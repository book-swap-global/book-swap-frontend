const CACHE_NAME = 'book-swap-cache-v3';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/next.svg',
  '/offline.html',
];
const MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Helper: Clean up old cache entries
async function cleanCache() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  const now = Date.now();
  for (const request of requests) {
    const response = await cache.match(request);
    if (!response) continue;
    const dateHeader = response.headers.get('sw-cache-date');
    if (dateHeader && now - Number(dateHeader) > MAX_CACHE_AGE) {
      await cache.delete(request);
    }
  }
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method === 'POST') {
    event.respondWith(
      fetch(request.clone()).catch(() => {
        return savePostRequest(request);
      })
    );
    return;
  }

  // Runtime caching for images, fonts, and API
  if (
    request.url.match(/\.(?:png|jpg|jpeg|svg|gif|webp)$/) ||
    request.url.match(/fonts\.(?:googleapis|gstatic)\.com/) ||
    request.url.includes('/api/')
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        fetch(request)
          .then(response => {
            cache.put(request, response.clone());
            return response;
          })
          .catch(() => cache.match(request))
      )
    );
    return;
  }

  // Stale-while-revalidate for all other requests
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const fetchPromise = fetch(request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);
      return cachedResponse || fetchPromise;
    })
  );
  event.waitUntil(cleanCache());
});

// Offline fallback for navigation requests
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/offline.html'))
    );
  }
});

// Background sync for failed POST requests
self.addEventListener('sync', event => {
  if (event.tag === 'sync-post-requests') {
    event.waitUntil(replayPostRequests());
  }
});

// Save failed POST requests to IndexedDB (simple version)
async function savePostRequest(request) {
  const db = await openDB();
  const body = await request.clone().text();
  await db.setItem('post-queue', { url: request.url, body });
  self.registration.sync.register('sync-post-requests');
  return new Response(JSON.stringify({ success: false, offline: true }), { status: 503 });
}

async function replayPostRequests() {
  const db = await openDB();
  const queued = await db.getItem('post-queue');
  if (queued) {
    await fetch(queued.url, { method: 'POST', body: queued.body });
    await db.removeItem('post-queue');
  }
}

// Simple IndexedDB wrapper
function openDB() {
  return new Promise(resolve => {
    const request = indexedDB.open('sw-db', 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore('store');
    };
    request.onsuccess = () => {
      resolve({
        setItem: (key, value) => {
          const tx = request.result.transaction('store', 'readwrite');
          tx.objectStore('store').put(value, key);
          return tx.complete;
        },
        getItem: key => {
          return new Promise(res => {
            const tx = request.result.transaction('store', 'readonly');
            const req = tx.objectStore('store').get(key);
            req.onsuccess = () => res(req.result);
          });
        },
        removeItem: key => {
          const tx = request.result.transaction('store', 'readwrite');
          tx.objectStore('store').delete(key);
          return tx.complete;
        }
      });
    };
  });
}

// Push notification skeleton
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Book Swap Notification';
  const options = {
    body: data.body || 'You have a new notification!',
    icon: '/next.svg',
    badge: '/next.svg',
  };
  event.waitUntil(self.registration.showNotification(title, options));
}); 