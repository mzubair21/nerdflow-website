"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NerdFlowLogo from "../../assets/images/NerdFlowLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(""); 
  const [isScrolled, setIsScrolled] = useState(false); 

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
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); 
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isActive = (path:String) => activePath === path;

  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 py-4 font-poppins transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Image
              src={NerdFlowLogo}
              alt="Logo"
              className="w-[10rem] sm:w-[14rem] md:w-[15rem]"
            />
          </div>

          {/* Burger Menu Icon for Medium and Small Screens */}
          <div className="md:flex lg:hidden items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex justify-end flex-1 text-white text-[0.875rem] font-bold pr-[1.175rem] pl-[1.175rem]">
            <ul className="flex space-x-8 sm:space-x-12 md:space-x-2 lg:space-x-8 relative">
              <li className="relative">
                <Link href="/" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link href="/services" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/services") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Services
                </Link>
              </li>
              <li className="relative">
                <Link href="#portfolio" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("#portfolio") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Portfolio
                </Link>
              </li>
              <li className="relative">
                <Link href="/about" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/about") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  About
                </Link>
              </li>
              <li className="relative">
                <Link href="/pricing" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/pricing") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Pricing
                </Link>
              </li>
              <li className="relative">
                <Link href="/blogs" className="hover:text-teal">
                  <span
                    className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                      isActive("/blogs") ? "w-full" : "w-0"
                    }`}
                  ></span>
                  Blogs
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contact"
                  className="hover:bg-grey bg-white rounded-full py-[0.75rem] px-[0.875rem] text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu for Small and Medium Screens */}
      {isMenuOpen && (
        <div className="lg:hidden overflow-x-hidden fixed inset-0 top-[4rem] left-0 bg-teal bg-opacity-90 text-white z-20">
          <nav className="flex flex-col items-center py-8 space-y-4" onClick={closeMenu}>
            <Link href="/" className="text-lg font-medium">
              Home
            </Link>
            <Link href="/services" className="text-base font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="text-base font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="text-base font-medium">
              About
            </Link>
            <Link href="/pricing" className="text-base font-medium">
              Pricing
            </Link>
            <Link href="/blogs" className="text-base font-medium">
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium bg-white rounded-full py-[0.75rem] px-[1.5rem] text-black"
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
