"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import NerdFlowLogo from "../../assets/images/NerdFlowLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="py-4 bg-gradient-to-b from-black to-transparent font-poppins ">
      {/* Container for centering content */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center -ml-6"> 
            <Image
              src={NerdFlowLogo}
              alt="Logo"
              className="w-[10rem] sm:w-[12rem] md:w-[15rem]"
            />
          </div>

          {/* Burger Menu Icon for Small Screens (Visible below md) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links for Medium and Large Screens (Hidden on smaller screens) */}
          <nav className="hidden md:flex justify-end flex-1 text-white text-[0.875rem] font-bold pr-[1.175rem] pl-[1.175rem] ">
            <ul className="flex space-x-10 sm:space-x-12 md:space-x-6"> {/* Add more space between the links */}
              <li>
                <Link href="/" className="hover:text-teal">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-teal">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-teal">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal bg-white rounded-full py-[0.75rem] px-[0.875rem] text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu (Only Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="md:hidden overflow-x-hidden fixed inset-0 top-[4rem] left-0 bg-teal bg-opacity-90 text-white z-20">
          <nav
            className="flex flex-col items-center space-y-6 py-6"
            onClick={closeMenu}
          >
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
            <Link href="/services" className="text-lg font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-lg font-medium">
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
