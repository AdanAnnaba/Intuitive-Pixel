import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Herosection() {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/5jX2MBJ/Black-and-Yellow-Web-Developer-Linked-In-Banner.png')",
        }}
      >
        <Navbar />
        {/* Changed to flex-col for mobile, grid for larger screens */}
        <section className="flex flex-col md:grid md:grid-cols-12">
          {/* Adjusted image size and positioning for mobile */}
          <div className="md:hidden w-full max-w-[20rem] mx-auto mt-8">
            <img
              src="https://i.ibb.co.com/j4FFRfG/ccae4bc8117c4833fd9cd17468657016-removebg-preview.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Left Part */}
          {/* Adjusted padding and text alignment for mobile */}
          <div className="col-span-7 flex flex-col justify-center items-center md:items-start p-8 md:p-36 text-white text-center md:text-left">
            <div>
              <div>
                {/* Adjusted text sizes for better mobile readability */}
                <h4 className="text-base md:text-lg font-thin">
                  This is Natalia Rossi
                </h4>
                <h2 className="text-3xl md:text-5xl font-semibold">
                  UI/UX and Graphic
                </h2>
                <div className="flex items-center justify-center md:justify-start my-2">
                  <div>
                    <img
                      src="https://i.ibb.co.com/PwRNLcp/workers-feeling-479.webp"
                      className="h-8 w-24 md:h-12 md:w-32 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold mx-2">
                    Designer
                  </h2>
                  <div>
                    <img
                      src="https://i.ibb.co.com/9pkZzDq/getty-1084171152-400165.jpg"
                      className="h-6 w-10 md:h-8 md:w-12 rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <p className="mt-2 text-base md:text-lg">
                  With 5+ years of experience
                </p>
                {/* Adjusted button layout for mobile */}
                <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="btn bg-gradient-to-r from-[#5901F5] to-purple-700 text-white px-6 md:px-10 py-2 rounded-md outline-none border-0">
                    Say Hello
                  </button>
                  <button className="btn bg-transparent border border-blue-600 text-blue-600 px-6 md:px-10 py-2 rounded-md">
                    Work Demo
                  </button>
                </div>
              </div>
              {/* Adjusted statistics section for better mobile layout */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 m-6 md:m-10 -ml-4 bg-slate-950 py-5 px-4 md:px-10 rounded-3xl">
                <div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h1 className="text-4xl md:text-5xl font-bold">18K+</h1>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#63E6BE"
                          d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl text-center md:text-left">
                    Project Done
                  </h2>
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h1 className="text-4xl md:text-5xl font-bold">7K+</h1>
                    <img
                      src="https://i.ibb.co.com/D56GkwS/images-3-removebg-preview.png"
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-lg md:text-xl text-center md:text-left">
                    Happy Customers
                  </h2>
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h1 className="text-4xl md:text-5xl font-bold">4.7+</h1>
                    <img
                      src="https://i.ibb.co.com/D56GkwS/images-3-removebg-preview.png"
                      className="h-8 w-12 md:h-10 md:w-14 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-lg md:text-xl text-center md:text-left">
                    Happy rating
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Right Part */}
          <div className="col-span-5 hidden md:flex justify-center items-center">
            <div className="w-[30rem]">
              <img
                src="https://i.ibb.co.com/j4FFRfG/ccae4bc8117c4833fd9cd17468657016-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Herosection;
