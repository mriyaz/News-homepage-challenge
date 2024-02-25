import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <header className="bg-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="text-4xl  font-black md:text-5xl">W.</a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-darkGrayishBlue text-base font-medium hover:text-softOrange  ">Home</a>
          <a href="#" className="text-darkGrayishBlue text-base font-medium hover:text-softOrange">New</a>
          <a href="#" className=" text-darkGrayishBlue text-base font-medium hover:text-softOrange">Popular</a>
          <a href="#" className=" text-darkGrayishBlue text-base font-medium hover:text-softOrange ">Trending</a>
          <a href="#" className=" text-darkGrayishBlue text-base font-medium hover:text-softOrange">Categories</a>

        </div>
        {/* Mobile menu button */}
        <button className="md:hidden block" aria-label="Open menu" onClick={toggleMenu}>
          <span className="block w-10 h-1 bg-gray-900 mb-1"></span>
          <span className="block w-10 h-1 bg-gray-900 mb-1"></span>
          <span className="block w-10 h-1 bg-gray-900 mb-1"></span>
        </button>

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-1/2 bg-white shadow-md py-5 px-6 md:hidden" onClick={toggleMenu}>
            <a href="#" className="block text-darkGrayishBlue text-base font-medium hover:text-softOrange mb-4">Home</a>
            <a href="#" className="block text-darkGrayishBlue text-base font-medium hover:text-softOrange mb-4">New</a>
            <a href="#" className="block text-darkGrayishBlue text-base font-medium hover:text-softOrange mb-4">Popular</a>
            <a href="#" className="block text-darkGrayishBlue text-base font-medium hover:text-softOrange mb-4">Trending</a>
            <a href="#" className="block text-darkGrayishBlue text-base font-medium hover:text-softOrange">Categories</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
