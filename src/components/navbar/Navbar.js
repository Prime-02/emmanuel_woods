import React, { useState } from "react";
import Button from "../reusables/buttons/Buttons";
import { navItems } from "../index";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed bg-white z-50 border border-b-blue-800 min-h-16 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        <span className="flex items-center gap-x-2">
          <span className="flex items-center justify-center rounded-full w-16 h-16">
            <Image
              src={"/assets/svg/iwlgo2.svg"}
              width={100}
              height={100}
              className="w-full h-full object-cover"
              alt="Logo"
            />
          </span>
          <span className=" font-extrabold text-lg">
            Emmanuel  Woods
          </span>
        </span>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-3 text-blue-800 font-semibold ">
          {navItems.map((link, i) => (
            <Link key={i} href={link.link} className="hover:underline">
              {link.name} {i !== 3 && "|"}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            text="Contact Us"
            className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center py-4">
            {navItems.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="py-2 text-blue-800 font-semibold hover:underline"
              >
                {link.name}
              </Link>
            ))}
            <Button
              text="Contact Us"
              className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 mt-4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
