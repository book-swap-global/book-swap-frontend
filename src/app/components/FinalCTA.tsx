export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Book Exchange Journey?</h2>
      <p className="mb-8 text-lg">Join thousands of book lovers and turn your reading passion into a thriving library.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-50">Sign Up Free</button>
        <button className="bg-white/20 border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white/10">List Your First Book</button>
      </div>
      <div className="mt-4 text-xs text-white/80">No credit card required • Get 50 welcome credits</div>
    </section>
  );
} 