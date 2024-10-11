import Link from "next/link";
import React from "react";

function Navbar() {
  const lis = (
    <>
      <li>
        <Link href="#" className="relative inline-block text-white group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link href="#" className="relative inline-block text-white group">
          About Me
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link href="#" className="relative inline-block text-white group">
          Portfolio
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link href="#" className="relative inline-block text-white group">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link href="#" className="relative inline-block text-white group">
          Blog
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </li>
    </>
  );
  return (
    <div className="md:mx-24 mx-10 py-4">
      <div className="  navbar  bg-[#3A444D] backdrop:opacity-70 text-white rounded-2xl bg-opacity-80">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {lis}
            </ul>
          </div>
          <Link href={""} className="text-xl">
            <img
              src="https://i.ibb.co.com/V9RDYV5/logo-removebg-preview.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lis}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"#"}>
            <button className="text-white bg-gradient-to-l from-[#5901F5] to-purple-700 focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
