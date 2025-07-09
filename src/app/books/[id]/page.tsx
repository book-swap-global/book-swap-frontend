import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FeaturedBooks from "@/app/components/FeaturedBooks";
import Image from "next/image";
import { bookData } from "../mockBooks";
import BooksList from "@/app/components/Books/BooksList";

async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  let books = bookData;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500 text-xl">
            Book not found.
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find similar books (other than this one)
  const similarBooks = books.filter((b) => b.id !== book.id).slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book Image & Gallery */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full md:w-1/3">
            <Image
              src={book.image}
              alt={book.title}
              width={220}
              height={320}
              className="rounded-xl object-contain mb-4"
            />
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-16 bg-gray-100 rounded overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={book.image}
                    alt="thumb"
                    width={40}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Book Info & Seller */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h1 className="text-2xl font-bold mb-1">{book.title}</h1>
              <div className="text-gray-600 mb-2">by {book.author}</div>
              <div className="text-sm text-gray-400 mb-4 flex gap-4">
              
                <span>Published: {book.published}</span>
                <span>{book.pages} pages</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-green-600 font-bold text-lg">
                  {book.credits}{" "}
                  <span className="text-base font-normal">Credits</span>
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                  {book.condition}
                </span>
               
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={book.seller.avatar}
                    alt={book.seller.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sm flex items-center gap-1">
                      {book.seller.name}{" "}
                      <span className="text-yellow-400">
                        ★ {book.seller.rating}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {book.seller.reviews} reviews · Member since{" "}
                      {book.seller.memberSince} · {book.seller.exchanges}{" "}
                      successful exchanges
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="flex gap-4 mt-4">
                <button className="bg-blue-600 text-white px-8 py-2 rounded font-semibold hover:bg-blue-700 flex-1">
                  Exchange Now
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded font-semibold flex-1">
                  Add to Wishlist
                </button>
              </div>
            </div>
            {/* About & Details */}
           
          </div>
        </div>
        <div className="mt-4">
           <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white rounded-xl shadow p-6 flex-1">
                <h2 className="text-lg font-bold mb-2">About This Book</h2>
                <p className="text-gray-700 text-sm whitespace-pre-line mb-4">
                  {book.description}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 text-blue-900 text-sm rounded">
                  <span className="font-semibold">Seller's Notes</span>
                  <br />
                  {book.sellerNotes}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 w-full md:w-64 flex-shrink-0">
                <h2 className="text-lg font-bold mb-2">Book Details</h2>
                <div className="text-sm text-gray-700 mb-2">
                  <b>Genre:</b> {book.genre}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <b>Publisher:</b> {book.publisher}
                </div>
               
                <div className="text-sm text-gray-700 mb-2">
                  <b>Language:</b> {book.language}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <b>Location:</b> {book.location}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <b>Listed:</b> {book.listed}
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-2 mt-4 rounded text-green-900 text-xs">
                  <b>BookCredit Protection</b>
                  <br />
                  Your credits are protected until you confirm receipt of the
                  book in described condition.
                </div>
              </div>
            </div>
        </div>
        {/* Similar Books */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">
            Similar Books You Might Like
          </h2>
          <BooksList books={similarBooks} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;