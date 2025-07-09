export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-8">How BookSwap Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
        <div className="flex-1">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">📷</div>
          <div className="font-semibold mb-2">1. List Your Books</div>
          <div className="text-gray-500 text-sm">Scan ISBN or search to add books. Set your credit price and upload photos.</div>
        </div>
        <div className="flex-1">
          <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">🔄</div>
          <div className="font-semibold mb-2">2. Browse & Exchange</div>
          <div className="text-gray-500 text-sm">Find books you want and use your credits to exchange with other members.</div>
        </div>
        <div className="flex-1">
          <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">🚚</div>
          <div className="font-semibold mb-2">3. Ship & Enjoy</div>
          <div className="text-gray-500 text-sm">Ship your book, receive your new read, and rate your experience.</div>
        </div>
      </div>
    </section>
  );
} 