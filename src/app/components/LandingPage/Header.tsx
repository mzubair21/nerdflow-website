"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import NerdFlowLogo from "../../assets/images/NerdFlowLogo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // Disable scroll when the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname)

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => activePath === path

  return (
    <header
      className={`${"fixed top-0 left-0 w-full z-[100] py-4 font-poppins transition-colors duration-300"} ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="container mx-auto relative px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={NerdFlowLogo}
              alt="Logo"
              className="w-[10rem] sm:w-[12rem] md:w-[13rem]"
            />
          </div>

          {/* Burger Menu Icon for Medium and Small Screens */}
          <div className="md:flex lg:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex justify-end flex-1 text-white text-[0.875rem] font-bold pr-[1.175rem] pl-[1.175rem]">
            <ul className="flex space-x-8 sm:space-x-12 md:space-x-2 lg:space-x-8 relative">
              {["/", "/services", "/about", "/pricing", "/blogs"].map(
                (path) => (
                  <li key={path} className="relative">
                    <Link href={path} className="hover:text-teal">
                      <span
                        className={`absolute -top-7 left-0 right-0 h-[3px] bg-white transition-all ${
                          isActive(path) ? "w-full" : "w-0"
                        }`}
                      ></span>
                      {path === "/"
                        ? "Home" // Special case for the home route
                        : path.replace("/", "").charAt(0).toUpperCase() +
                          path.slice(2)}
                    </Link>
                  </li>
                )
              )}
              <li className="relative">
                <Link
                  href="/contact"
                  className="hover:bg-teal hover:text-white bg-white rounded-full py-[0.75rem] px-[0.875rem] text-black"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden top-[4rem] fixed inset-0 bg-teal bg-opacity-90 text-white transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav
            className="flex flex-col justify-center items-center py-16 h-[calc(100%-120px)] "
            onClick={closeMenu}
          >
            <Link
              href="/"
              className="text-xl font-semibold hover:bg-black/80 w-full text-center p-2 py-3"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-xl font-semibold hover:bg-black/80 w-full text-center p-2 py-3"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-xl font-semibold hover:bg-black/80 w-full text-center p-2 py-3"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-xl font-semibold hover:bg-black/80 w-full text-center p-2 py-3"
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className="text-xl font-semibold hover:bg-black/80 w-full text-center p-2 py-3"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="w-full block text-center group p-2"
            >
              <span className="text-xl group-hover:bg-teal group-hover:text-white font-semibold  rounded-full p-4 py-3">
                Contact Us
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
