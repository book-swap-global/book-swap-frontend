import Image from "next/image";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

export default function Home() {
  // TODO: Replace this with real auth or landing logic
  const showLanding = true; // Set to true to show landing page for now
  return showLanding ? (
    <LandingPage />
  ) : (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-10 ">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4 bg-sky-100 rounded-lg p-2 shadow-lg">
          <Image
            src="/images/exchange.png"
            alt="Book Swap App Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <h1 className="text-2xl my-1  font-bold text-gray-950">BookSwap</h1>
        <p className="text-gray-600 text-sm font-medium">
          Connect. Exchange. Learn.
        </p>
      </div>
      <Login />
    </div>
  );
}
