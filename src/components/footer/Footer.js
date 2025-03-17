import Link from "next/link";
import React from "react";
import { navItems } from "../index";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:text-base">
          {navItems.map((link, i) => (
            <React.Fragment key={i}>
              <Link
                href={link.link}
                className="text-blue-800 font-semibold hover:underline hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
              {i !== navItems.length - 1 && (
                <span className="text-blue-800">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Attribution */}
        <div className="text-sm text-gray-600 text-center sm:text-left">
          {`Image Courtesy of`}{" "}
          <Link
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 font-semibold hover:underline hover:text-blue-600 transition-colors duration-300"
          >
            PEXELS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
