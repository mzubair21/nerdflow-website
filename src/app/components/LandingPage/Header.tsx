"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NerdFlowLogo from "../../assets/images/NerdFlowLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(""); // State to track the active route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Disable scroll when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Check if we are on the client (browser) before accessing the window object
    if (typeof window !== "undefined") {
      // Update active path based on current URL
      setActivePath(window.location.pathname);
    }
  }, []);

  const isActive = (path: string) => activePath === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 bg-gradient-to-b from-black to-transparent font-poppins">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center -ml-6">
            <Image
              src={NerdFlowLogo}
              alt="Logo"
              className="w-[10rem] sm:w-[12rem] md:w-[15rem]"
            />
          </div>

          {/* Burger Menu Icon for Small Screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links for Medium and Large Screens */}
          <nav className="hidden md:flex justify-end flex-1 text-white text-[0.875rem] font-bold pr-[1.175rem] pl-[1.175rem] ">
            <ul className="flex space-x-10 sm:space-x-12 md:space-x-6 relative">
              <li className="relative">
                <Link href="/" className="hover:text-teal">
                  <span
                    className={`absolute -top-9 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link href="/services" className="hover:text-teal">
                  <span
                    className={`absolute -top-9 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/services") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Services
                </Link>
              </li>
              <li className="relative">
                <Link href="#portfolio" className="hover:text-teal">
                  <span
                    className={`absolute -top-9 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("#portfolio") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Portfolio
                </Link>
              </li>
              <li className="relative">
                <Link href="/about" className="hover:text-teal">
                  <span
                    className={`absolute -top-9 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/about") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  About
                </Link>
              </li>
              <li className="relative">
                <Link href="/blogs" className="hover:text-teal">
                  <span
                    className={`absolute -top-9 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/blogs") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Blogs
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contact"
                  className="hover:bg-grey  bg-white rounded-full py-[0.75rem] px-[0.875rem] text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden overflow-x-hidden fixed inset-0 top-[4rem] left-0 bg-teal bg-opacity-90 text-white z-20">
          <nav className="flex flex-col items-center space-y-6 py-6" onClick={closeMenu}>
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
            <Link href="/services" className="text-lg font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="text-lg font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="text-lg font-medium">
              About
            </Link>
            <Link href="/blogs" className="text-lg font-medium">
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium bg-white rounded-full py-[0.75rem] px-[1.5rem] text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
