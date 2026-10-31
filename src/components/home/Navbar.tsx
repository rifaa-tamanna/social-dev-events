"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Image 
            src='/soci-dev-logo.png'
            width={120}
            height={120}
            alt="Development Logo"
        />

        {/* Middle: Upcoming Events (Desktop) */}
        <div className="hidden md:flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">
          <svg
            className="w-5 h-5 text-[#D6CDBD]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <Link href="/events">
            Upcoming Events
          </Link>
        </div>

        {/* Right Side: Login & Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login Button: Outline, Black BG, White Border, Space Grotesk */}
          <Link
            href="/login"
            className="font-['Space_Grotesk'] bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
          >
            Login
          </Link>

          {/* Sign Up Button: #F08C2E BG, Black Text, Space Grotesk */}
          <Link
            href="/signup"
            className="font-['Space_Grotesk'] bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">
            <svg
              className="w-5 h-5 text-[#D6CDBD]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <Link href="/events" className="hover:underline">
              Upcoming Events
            </Link>
          </div>
          <div className="flex flex-col w-full gap-2 px-4">
            <Link
              href="/login"
              className="font-['Space_Grotesk'] text-center bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="font-['Space_Grotesk'] text-center bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;