"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between relative">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
        <Image src="/images/exchange.png" alt="BookSwap Logo" width={32} height={32} className="rounded mr-2" />
        BookSwap
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-6 text-gray-700 font-medium">
        <Link href="/browse" className="hover:text-blue-600">Browse</Link>
        <Link href="/categories" className="hover:text-blue-600">Categories</Link>
        <Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-blue-900 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-900 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Search, credits, avatar, login */}
      <div className="flex items-center gap-4">
        <input type="text" placeholder="Search books, authors..." className="px-3 py-1.5 rounded border border-gray-200 text-sm hidden sm:block" />
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold hidden sm:block">247</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full hidden sm:block" />
        <Link href="/" className="ml-2 px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold">Login</Link>
      </div>
      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 flex flex-col items-center py-4 lg:hidden animate-fade-in">
          <Link href="/browse" className="py-2 w-full text-center hover:bg-blue-50" onClick={() => setMenuOpen(false)}>Browse</Link>
          <Link href="/categories" className="py-2 w-full text-center hover:bg-blue-50" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link href="/how-it-works" className="py-2 w-full text-center hover:bg-blue-50" onClick={() => setMenuOpen(false)}>How It Works</Link>
        </div>
      )}
    </header>
  );
} 