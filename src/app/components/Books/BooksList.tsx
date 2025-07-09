import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Book {
  id: string | number;
  image: string;
  title: string;
  author: string;
  credits: number;
  rating: number;
}

interface BooksListProps {
  books: Book[];
}

function BooksList({ books }: BooksListProps) {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, i) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="bg-white rounded-xl shadow p-4 flex flex-col relative hover:ring-2 hover:ring-blue-400 transition-all"
          >
            <div className="  flex flex-col">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={120}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="font-semibold mb-1">{book.title}</div>
              <div className="text-xs text-gray-500 mb-2">{book.author}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600 font-bold text-sm">
                  {book.credits} credits
                </span>
                <span className="text-yellow-400">★ {book.rating}</span>
              </div>
              <button className="mt-auto bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 text-sm">
                Exchange Now
              </button>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default BooksList