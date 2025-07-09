"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bookData } from "./mockBooks";
import FeaturedBooks from "../components/FeaturedBooks";
import BooksList from "../components/Books/BooksList";

let books = bookData;

const authorOptions = ["All Authors", ...Array.from(new Set(books.map(b => b.author)))];
const publisherOptions = ["All Publishers", ...Array.from(new Set(books.map(b => b.publisher)))];
const categoryOptions = ["All Categories", ...Array.from(new Set(books.map(b => b.genre)))];
const conditionOptions = ["All Conditions", "New", "Like New", "Good", "Fair"];
const sortOptions = [
  { label: "List Date (Newest)", value: "date-desc" },
  { label: "List Date (Oldest)", value: "date-asc" },
  { label: "Credit Price (Low to High)", value: "credit-asc" },
  { label: "Credit Price (High to Low)", value: "credit-desc" },
];

export default function BookListPage() {
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState(authorOptions[0]);
  const [publisher, setPublisher] = useState(publisherOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [condition, setCondition] = useState(conditionOptions[0]);
  const [sort, setSort] = useState(sortOptions[0].value);

  let filteredBooks = books.filter(book => {
    return (
      (search === "" || book.title.toLowerCase().includes(search.toLowerCase())) &&
      (author === "All Authors" || book.author === author) &&
      (publisher === "All Publishers" || book.publisher === publisher) &&
      (category === "All Categories" || book.genre === category) &&
      (condition === "All Conditions" || book.condition === condition)
    );
  });

  if (sort === "date-desc") {
    filteredBooks = filteredBooks.sort((a, b) => b.listed.localeCompare(a.listed));
  } else if (sort === "date-asc") {
    filteredBooks = filteredBooks.sort((a, b) => a.listed.localeCompare(b.listed));
  } else if (sort === "credit-asc") {
    filteredBooks = filteredBooks.sort((a, b) => a.credits - b.credits);
  } else if (sort === "credit-desc") {
    filteredBooks = filteredBooks.sort((a, b) => b.credits - a.credits);
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-900">
          <span className="inline-block w-6 h-6 bg-blue-200 rounded mr-2" />
          BookSwap
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">24 Credits</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">+ List Book</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full ml-2" />
        </div>
      </div>
      {/* Search & Filters */}
      <div className="bg-white py-4 px-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-7xl mx-auto rounded-lg mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded text-sm"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="px-3 py-2 border border-gray-200 rounded text-sm" value={author} onChange={e => setAuthor(e.target.value)}>
          {authorOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <select className="px-3 py-2 border border-gray-200 rounded text-sm" value={publisher} onChange={e => setPublisher(e.target.value)}>
          {publisherOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <select className="px-3 py-2 border border-gray-200 rounded text-sm" value={category} onChange={e => setCategory(e.target.value)}>
          {categoryOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <select className="px-3 py-2 border border-gray-200 rounded text-sm" value={condition} onChange={e => setCondition(e.target.value)}>
          {conditionOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <select className="px-3 py-2 border border-gray-200 rounded text-sm" value={sort} onChange={e => setSort(e.target.value)}>
          {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      </div>
    
      {/* Available Books Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Available Books</h2>
          <span className="text-gray-500 text-sm">{filteredBooks.length} books available for exchange</span>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
          <BooksList books={filteredBooks
          } />
        
        {/* </div> */}
      </div>
    </div>
  );
} 