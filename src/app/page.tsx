import Image from "next/image";
import Login from "./components/Login";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-10 ">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4 bg-sky-100 inline-block rounded-lg p-2 shadow-lg">
          <Image
            src="/images/exchange.png"
            alt="Book Swap App Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <h1 className="text-2xl my-1  font-bold text-gray-950">BookSwap</h1>
        <p className="text-gray-600 text-sm font-medium">Connect. Exchange. Learn.</p>
      </div>
      <Login />

    </div>
  );
}
