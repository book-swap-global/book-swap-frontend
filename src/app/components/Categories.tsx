const categories = [
  { name: "Romance", count: 2341, icon: "❤️" },
  { name: "Sci-Fi", count: 1892, icon: "🚀" },
  { name: "Mystery", count: 1567, icon: "🔍" },
  { name: "Self-Help", count: 1234, icon: "💡" },
  { name: "History", count: 987, icon: "🏛️" },
  { name: "Children", count: 2156, icon: "👧" },
];

export default function Categories() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(cat => (
          <div key={cat.name} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="text-3xl mb-2">{cat.icon}</div>
            <div className="font-semibold">{cat.name}</div>
            <div className="text-xs text-gray-500">{cat.count} books</div>
          </div>
        ))}
      </div>
    </section>
  );
} 