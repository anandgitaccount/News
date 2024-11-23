import React, { useContext, useRef, useState } from 'react';
import NewsContext from '../context/NewsContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const ctx = useContext(NewsContext);
  const searchRef = useRef();

  const handleSearch = () => {
    let value = searchRef.current.value;
    console.log(value);
    ctx.setsearch(value);
  };

  return (
    <nav className="bg-gray-800 text-white fixed z-50 w-full">
      <div className="container px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">NewsPortal</div>

        {/* Links & Search (hidden on small screens) */}
        <div className="hidden md:flex space-x-8 items-center">
          <h3
            onClick={() => ctx.setsearch('entertainment')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Entertainment
          </h3>
          <h3
            onClick={() => ctx.setsearch('crime')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Crime
          </h3>
          <h3
            onClick={() => ctx.setsearch('finance')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Financial
          </h3>
          <h3
            onClick={() => ctx.setsearch('sports')}
            className="hover:text-gray-300 cursor-pointer"
          >
            Sports
          </h3>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-700 font-bold py-1 px-3 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <h3
            onClick={() => ctx.setsearch('entertainment')}
            className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            Entertainment
          </h3>
          <h3
            onClick={() => ctx.setsearch('crime')}
            className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            Crime
          </h3>
          <h3
            onClick={() => ctx.setsearch('finance')}
            className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            Financial
          </h3>
          <h3
            onClick={() => ctx.setsearch('sports')}
            className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            Sports
          </h3>
          <div className="px-4 py-2">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="mt-2 w-full bg-gray-700 font-bold py-1 px-3 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
