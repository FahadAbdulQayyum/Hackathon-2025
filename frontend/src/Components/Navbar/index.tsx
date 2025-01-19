import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>pr1v</a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/services">
            <a className="hover:text-gray-400">Services</a>
          </Link>
          <Link href="/app">
            <a className="hover:text-gray-400">Get the App</a>
          </Link>
          <Link href="/our-story">
            <a className="hover:text-gray-400">Our Story</a>
          </Link>
          <Link href="/weddings">
            <a className="hover:text-gray-400">Weddings</a>
          </Link>
          <Link href="/events">
            <a className="hover:text-gray-400">Events</a>
          </Link>
          <Link href="/shop">
            <a className="hover:text-gray-400">Shop</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-gray-400">Blog</a>
          </Link>
        </nav>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          <Link href="/pro">
            <a className="hover:text-gray-400">Become a Priv Pro</a>
          </Link>
          <span>|</span>
          <Link href="/profile">
            <a className="hover:text-gray-400">Hi</a>
          </Link>
          <span>|</span>
          <Link href="/logout">
            <a className="hover:text-gray-400">Sign Out</a>
          </Link>
          <Link href="/book-now">
            <a className="bg-black px-4 py-2 rounded hover:bg-gray-700">Book Now</a>
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;