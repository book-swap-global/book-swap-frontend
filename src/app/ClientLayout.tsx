"use client";
import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
      });
      // Request push notification permission and subscribe
      if (window.Notification && Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            subscribeUserToPush();
          }
        });
      }
    }
  }, []);

  function subscribeUserToPush() {
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: '<YOUR_PUBLIC_VAPID_KEY>' // Replace with your VAPID public key
      }).then(subscription => {
        // Send subscription to your server
        console.log('Push subscription:', JSON.stringify(subscription));
      });
    });
  }

  return (
    <>{children}</>  
  );
} 