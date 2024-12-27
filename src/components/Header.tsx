import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-5">
        {/* Logo or brand name */}
        <div className="text-lg font-semibold">
          <Link href="/">Livecode with Ade Senpai</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link href="/profile" className="hover:underline text-lg">
            Profile
          </Link>
          <Link href="/search" className="hover:underline text-lg">
            Search
          </Link>
          <Link href="/create" className="hover:underline text-lg">
            Create Event
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns=""
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 p-5 flex flex-col items-start">
          <Link href="/" className="my-2 text-white hover:text-blue-200 text-lg">
            Home
          </Link>
          <Link href="/profile" className="my-2 text-white hover:text-blue-200 text-lg">
            Profile
          </Link>
          <Link href="/search" className="my-2 text-white hover:text-blue-200 text-lg">
            Search
          </Link>
          <Link href="/create" className="my-2 text-white hover:text-blue-200 text-lg">
            Create Event
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
