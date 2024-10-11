import React from "react";
import Image from "next/image";

const pricingPlans = [
  {
    id: 1,
    title: "Hourly Basis",
    description: "Here's a more detailed pricing plan for Hourly Basis",
    price: "$34.99/month",
    image: "https://i.ibb.co/MRVH77n/image.png",
  },
  {
    id: 2,
    title: "Project Based",
    description: "Here's a more detailed pricing plan for Project Based",
    price: "$600.00/month",
    image:
      "https://i.ibb.co.com/0DS2LJY/gradient-benchmark-illustration-52683-83386-removebg-preview.png",
  },
  {
    id: 3,
    title: "Full Time Job",
    description: "Here's a more detailed pricing plan for Full Time Job",
    price: "1500.00/month",
    image: "https://i.ibb.co.com/rc7Cv2j/images-removebg-preview-1.png",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-[#01093A]">
      <div className="text-center mb-10">
        <h2 className="text-gray-200 text-lg uppercase font-medium">
          Pricing Plans
        </h2>
        <p className="text-white mt-4 text-3xl font-bold">
          Pricing Options That Meets Your
        </p>
        <div className="text-white text-3xl font-bold inline-block relative">
          budget and needs
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden bg-opacity-50 ${
              index == 1 ? "border-2 border-purple-600 relative" : ""
            }`}
          >
            {index == 1 ? (
              <div className="flex justify-center items-center">
                <div className="p-2 bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg text-white font-bold">
                  Popular Now
                </div>
              </div>
            ) : null}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-white mb-4">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {[
                  "35 hours working time in a week",
                  "Standard Rate",
                  "Bulk Hours Discount",
                  "Specialized Services",
                  "50% payment before work",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="h-5 w-5 bg-gradient-to-l from-[#5901F5] to-purple-700 rounded-lg transform rotate-45 flex-shrink-0 mx-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-l from-[#5901F5] to-purple-700 text-white py-2 rounded-md hover:from-purple-700 hover:to-purple-700 transition duration-300">
                Start project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
