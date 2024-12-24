import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center p-5">
      
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link href="/profile" className="hover:underline text-lg">
            Profile
          </Link>
        </div>

        
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu} 
        >
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 p-5 flex flex-col items-start">
          <Link href="/" className="my-2 text-white hover:text-blue-200 text-lg">
            Home
          </Link>
          <Link href="/profile" className="my-2 text-white hover:text-blue-200 text-lg">
            Profile
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
