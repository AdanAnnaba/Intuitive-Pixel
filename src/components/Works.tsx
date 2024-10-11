"use client";
import React, { useRef } from "react";
import Image from "next/image";

export default function Works() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">My Portfolio / Works</h2>
          <button className=" font-bold  bg-gradient-to-l from-[#5901F5] to-purple-700 text-white p-3 rounded-md hover:from-purple-700 hover:to-purple-700 transition duration-300">
            View all project &rarr;
          </button>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto hide-scroll-bar scroll-smooth"
          >
            {/* Card 1 */}
            <div className="flex-shrink-0 bg-gray-800 p-4 rounded-lg w-80">
              <Image
                src="https://i.pinimg.com/564x/73/26/e0/7326e0d56596a2ded8de8397b27e8742.jpg" // Replace with correct image path or URL
                alt="Landing Page Design"
                width={300} // Increased width
                height={200} // Fixed height
                className="rounded-lg mb-4 object-cover max-h-72" // object-cover to maintain aspect ratio
              />
              <h3 className="text-xl font-bold">Landing Page Design</h3>
              <p className="text-sm text-gray-400 ">UI/UX Design</p>
            </div>

            {/* Card 2 */}
            <div className=" flex-shrink-0 bg-gradient-to-l from-purple-600 to-blue-700 rounded-lg w-80">
              <Image
                src="https://i.pinimg.com/564x/1a/53/32/1a53324102481ff85a23cb913048ced4.jpg" // Replace with correct image path or URL
                alt="Social Media Design"
                width={300} // Increased width
                height={200} // Fixed height
                className="rounded-lg mb-4 object-cover max-h-72 w-full"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Social Media Design</h3>
                <p className="text-sm text-purple-600">Graphic Design</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 bg-gray-800 p-4 rounded-lg w-80">
              <Image
                src="https://i.pinimg.com/564x/8b/d1/7f/8bd17f51f00ed3fe5aebca7be2f24d1b.jpg" // Replace with correct image path or URL
                alt="Mobile App Design"
                width={300} // Increased width
                height={200} // Fixed height
                className="rounded-lg mb-4 object-cover max-h-72"
              />
              <h3 className="text-xl font-bold">Mobile App Design</h3>
              <p className="text-sm text-gray-400">UI/UX Design</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &larr;
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
