const testimonials = [
  {
    name: "Sarah Chen",
    review: "I've exchanged over 50 books on BookSwap! The community is amazing and the process is so smooth. Love discovering new reads!",
    stars: 5,
  },
  {
    name: "Mike Rodriguez",
    review: "Finally found a way to make money from my old textbooks while getting books I actually want to read. Brilliant concept!",
    stars: 5,
  },
  {
    name: "Emma Watson",
    review: "The app is so user-friendly and the credit system is genius. I've built an amazing library without breaking the bank!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
            <div className="font-semibold mb-2">{t.name}</div>
            <div className="flex gap-1 text-yellow-400 mb-2">{'★★★★★'.slice(0, t.stars)}</div>
            <div className="text-gray-600 text-sm text-center">"{t.review}"</div>
          </div>
        ))}
      </div>
    </section>
  );
} 