import React from "react";
import Image from "next/image"; // for handling images if needed

export default function BlogAndCTA() {
  return (
    <div className="bg-[#0e1322] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Blog Section */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold text-purple-400">
          Our Blog & News
        </h3>
        <h2 className="text-4xl font-bold text-white mt-2">
          Get Every Single Update Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Blog Cards */}
        <BlogCard
          date="APR 12, 2024"
          title="Educational Website Design"
          author="Alexandra"
          description="Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo"
          imgSrc="https://i.pinimg.com/736x/63/a6/f3/63a6f3cab1c02d196455a3f267cba9b4.jpg"
        />
        <BlogCard
          date="APR 12, 2024"
          title="Artificial Intelligence Web App"
          author="Alexandra"
          description="Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo"
          imgSrc="https://i.pinimg.com/736x/d3/44/ab/d344abd97718b337e51fe95404145a3c.jpg"
        />
        <BlogCard
          date="APR 12, 2024"
          title="Travel Agency Landing Page"
          author="Alexandra"
          description="Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo"
          imgSrc="https://i.pinimg.com/736x/89/b8/94/89b8945741fdffe8813fa4fa9af7d2de.jpg"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-l inset-0 to-[#270B72] from-[#510E6D] mt-16 rounded-lg p-8 text-center max-w-6xl mx-auto grid grid-cols-2 backdrop-opacity-10">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-5xl font-bold text-white font-serif text-left lg:text-center">
              Have a project?
            </h2>
            <h2 className="text-5xl font-bold text-white me-36 font-serif mt-3">
              Let's talk.
            </h2>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-100 mt-4">
            Let's chat and turn your ideas into reality! Whether it’s a website
            redesign, mobile app development, or custom projects, I’ve got you
            covered.
          </p>
          <button className="mt-6 px-6 py-3 bg-white rounded-lg font-semibold hover:bg-pink-600 relative group">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-white hover:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text hover:from-white hover:to-white">
              Make a call!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
const BlogCard = ({
  date,
  title,
  author,
  description,
  imgSrc,
}: {
  date: string;
  title: string;
  author: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div className="bg-[#1c2130] rounded-lg overflow-hidden shadow-lg relative">
      <div className="relative">
        <Image
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
          width={320}
          height={192}
        />
        <span className="text-white font-bold absolute top-2 left-8 bg-[#0e1322] p-2 rounded-lg">
          {date}
        </span>
      </div>
      <div className="p-6">
        <div>
          <h3 className="text-3xl font-bold text-white mt-2">{author}</h3>
        </div>
        <p className="text-sm text-gray-400 mt-4">{description}</p>
      </div>
      <div className="absolute -bottom-1 right-0 bg-[#0e1322] p-3 rounded-xl">
        <button className=" text-purple-400 font-bold hover:text-purple-500 bg-gradient-to-bl to-[#270B72] from-[#510E6D] p-4 rounded-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
