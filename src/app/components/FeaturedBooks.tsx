import Image from "next/image";
import Link from "next/link";
import { bookData, Book } from "../books/mockBooks";
import BooksList from "./Books/BooksList";

export default function FeaturedBooks({
  books = bookData,
}: {
  books?: Book[];
}) {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Books</h2>
        <Link
          href="/books"
          className="text-blue-600 font-medium hover:underline"
        >
          View All
        </Link>
      </div>
      <BooksList books={books} />
    </section>
  );
}
