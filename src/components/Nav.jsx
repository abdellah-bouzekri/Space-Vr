import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-indigo-900 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="ml-5">
            <img src="/images/Vector.png" alt="logo" className="h-8 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="block md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu items */}
          <ul
            className={`fixed inset-0 top-16 left-0 bg-indigo-900 md:static md:flex md:justify-center md:items-center md:gap-6 md:bg-transparent p-5 font-medium text-lg md:p-0 transition-all duration-300 ease-in-out transform text-white ${
              isMenuOpen ? "translate-x-0 z-40" : "-translate-x-full -z-10"
            } space-y-4 md:space-y-0 md:space-x-6 md:translate-x-0 md:z-auto`}>
            {/* Mobile-only adjustments */}
            <li className="hover:text-blue-600 text-center md:text-left text-xl md:text-lg">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-blue-600 text-center md:text-left text-xl md:text-lg">
              <Link to="/Stories" onClick={() => setIsMenuOpen(false)}>
                Stories
              </Link>
            </li>
            <li className="hover:text-blue-600 text-center md:text-left text-xl md:text-lg">
              <Link to="/Pages" onClick={() => setIsMenuOpen(false)}>
                Pages
              </Link>
            </li>
            <li className="hover:text-blue-600 text-center md:text-left text-xl md:text-lg">
              <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}></div>
      )}

      <div className="h-16"></div>
    </>
  );
}

export default Nav;
