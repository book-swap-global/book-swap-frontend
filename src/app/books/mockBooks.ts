export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  published: number;
  pages: number;
  credits: number;
  condition: string;
  estimatedValue: string;
  image: string;
  rating: number; // Add this line
  seller: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
    memberSince: number;
    exchanges: number;
  };
  description: string;
  sellerNotes: string;
  genre: string;
  publisher: string;
  edition: string;
  language: string;
  location: string;
  listed: string;
};

export const bookData: Book[] = [
  {
    id: "gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    published: 1925,
    pages: 180,
    credits: 25,
    condition: "Like New",
    estimatedValue: "$12-15",
    image: "/images/exchange.png",
    rating: 4.8,
    seller: {
      name: "BookLover23",
      avatar: "/images/exchange.png",
      rating: 4.8,
      reviews: 127,
      memberSince: 2022,
      exchanges: 89,
    },
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on prosperous Long Island and in New York City, the novel tells the story of Jay Gatsby and his pursuit of Daisy Buchanan.\n\nThis edition is in excellent condition with minimal wear. All pages are intact and binding is tight. A true classic of American literature that belongs in every book lover's collection.",
    sellerNotes:
      '"This was my college copy, well-maintained and loved. No highlighting or writing inside. Perfect for someone discovering this masterpiece for the first time!"',
    genre: "Classic Literature",
    publisher: "Scribner",
    edition: "Paperback",
    language: "English",
    location: "New York, NY",
    listed: "2 days ago",
  },
  {
    id: "mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    published: 1960,
    pages: 281,
    credits: 22,
    condition: "Good",
    estimatedValue: "$10-13",
    image: "/images/exchange.png",
    rating: 4.9,
    seller: {
      name: "HarperFan",
      avatar: "/images/exchange.png",
      rating: 4.7,
      reviews: 98,
      memberSince: 2021,
      exchanges: 54,
    },
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice. Harper Lee's classic novel is a must-read for everyone.",
    sellerNotes:
      '"Some underlining in pencil. Cover slightly worn but pages are clean and binding is strong."',
    genre: "Classic Literature",
    publisher: "J.B. Lippincott & Co.",
    edition: "Paperback",
    language: "English",
    location: "Alabama, USA",
    listed: "5 days ago",
  },
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    published: 1949,
    pages: 328,
    credits: 18,
    condition: "Fair",
    estimatedValue: "$8-11",
    image: "/images/exchange.png",
    rating: 4.8,
    seller: {
      name: "Orwellian",
      avatar: "/images/exchange.png",
      rating: 4.6,
      reviews: 76,
      memberSince: 2020,
      exchanges: 33,
    },
    description:
      "A dystopian social science fiction novel and cautionary tale, warning of the dangers of totalitarianism and extreme political ideology.",
    sellerNotes:
      '"Cover is creased, but all pages are intact. Some notes in the margins."',
    genre: "Dystopian",
    publisher: "Secker & Warburg",
    edition: "Paperback",
    language: "English",
    location: "London, UK",
    listed: "1 week ago",
  },
  {
    id: "pride",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    published: 1813,
    pages: 279,
    credits: 20,
    condition: "Like New",
    estimatedValue: "$11-14",
    image: "/images/exchange.png",
    rating: 4.7,
    seller: {
      name: "Austenite",
      avatar: "/images/exchange.png",
      rating: 4.9,
      reviews: 112,
      memberSince: 2023,
      exchanges: 41,
    },
    description:
      "Jane Austen's classic novel of manners, love, and misunderstanding in the English countryside.",
    sellerNotes:
      '"Pristine condition. No marks or folds. Gift-worthy!"',
    genre: "Classic Romance",
    publisher: "T. Egerton",
    edition: "Hardcover",
    language: "English",
    location: "Bath, UK",
    listed: "3 days ago",
  },
  {
    id: "catcher",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    published: 1951,
    pages: 214,
    credits: 24,
    condition: "Good",
    estimatedValue: "$9-12",
    image: "/images/exchange.png",
    rating: 4.6,
    seller: {
      name: "HoldenFan",
      avatar: "/images/exchange.png",
      rating: 4.5,
      reviews: 65,
      memberSince: 2022,
      exchanges: 27,
    },
    description:
      "A story about adolescent alienation and loss of innocence in the protagonist Holden Caulfield.",
    sellerNotes:
      '"Some dog-eared pages. Otherwise clean and tight."',
    genre: "Classic Fiction",
    publisher: "Little, Brown and Company",
    edition: "Paperback",
    language: "English",
    location: "New York, NY",
    listed: "4 days ago",
  },
  {
    id: "mice",
    title: "Of Mice and Men",
    author: "John Steinbeck",
    isbn: "9780140177398",
    published: 1937,
    pages: 107,
    credits: 19,
    condition: "Fair",
    estimatedValue: "$7-10",
    image: "/images/exchange.png",
    rating: 4.5,
    seller: {
      name: "Steinbeckian",
      avatar: "/images/exchange.png",
      rating: 4.4,
      reviews: 53,
      memberSince: 2021,
      exchanges: 19,
    },
    description:
      "A powerful tale of friendship and dreams among two displaced ranch workers during the Great Depression.",
    sellerNotes:
      '"Worn cover, but pages are clean. Great reading copy."',
    genre: "Classic Drama",
    publisher: "Covici Friede",
    edition: "Paperback",
    language: "English",
    location: "California, USA",
    listed: "6 days ago",
  },
]; 