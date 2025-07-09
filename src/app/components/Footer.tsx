export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4 flex justify-center items-center">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}
          <a className="text-sky-100 font-bold " target="_blank" href="/">
         
          {  ` BookSwap ` }
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
} 