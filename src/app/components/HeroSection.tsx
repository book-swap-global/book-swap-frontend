import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 flex flex-col px-4 sm:flex-row items-center justify-center gap-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="max-w-2xl ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exchange Books, Build Your Library
          </h1>
          <p className="mb-6 text-lg">
            Turn your old books into credits and discover new reads. Join
            thousands of book lovers in the ultimate book exchange community.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded shadow hover:bg-blue-50">
              + List Your First Book
            </button>
            <button className="bg-white/20 border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white/10">
              How It Works
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center ">
          <div className="w-72 h-72 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden">
            <Image
              src="/images/exchange.png"
              alt="Book Stack"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
