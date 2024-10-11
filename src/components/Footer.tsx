import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e1322] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 by Intuitive Pixel. All rights reserved</p>
          </div>
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <img
                src="https://i.ibb.co.com/V9RDYV5/logo-removebg-preview.png"
                alt="Intuitive Pixel Logo"
                className="h-16 w-36"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              {["Home", "About Me", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:text-[#8B5CF6] transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
