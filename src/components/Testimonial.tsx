import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto bg-gradient-to-l from-[#5901F5] to-purple-700 bg-opacity-10 rounded-lg p-8 min-h-[300px] relative">
        <h2 className="text-3xl font-bold mb-8 text-center md:absolute md:-top-14 md:left-[50%] md:transform md:-translate-x-1/2">
          Client's Say
        </h2>
        <div className="md:grid block grid-cols-1 md:grid-cols-2 items-center space-y-6 md:space-y-0 md:space-x-2">
          {/* Client's Image */}
          <div className="flex flex-col items-center h-full relative md:static pt-24 md:pt-0">
            <div className="absolute -top-20 md:-top-28 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto">
              <Image
                src="https://i.pinimg.com/564x/60/ef/9f/60ef9f4051f6659bf723ed6ce06a2016.jpg"
                alt="Client Image"
                className="rounded-lg object-cover"
                width={190}
                height={190}
              />
            </div>
            {/* Client's Details */}
            <div className="text-center mt-4 md:absolute md:bottom-7">
              <h3 className="text-2xl font-bold">Alexandra</h3>
              <p className="text-sm text-white">Entrepreneur</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="flex-1 mt-6 md:mt-0">
            <p className="mb-4 text-xl text-gray-600">
              Don&apos;t just take our word for it - hear what our satisfied
              customers have to say!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
