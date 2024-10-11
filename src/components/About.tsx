import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex relative">
            <Image
              src="https://i.ibb.co.com/6P7Jr57/7cfd36cccb749df9df6f247eabb8dcb2.jpg"
              alt="Professional woman"
              width={350}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute bottom-16 right-[15rem] bg-gray-900 p-2 rounded-lg">
              <div className="bg-purple-600 text-white p-4 text-center pt-6 rounded-lg mt-4 inline-block  h-36 w-40">
                <span className="text-3xl font-bold ">15+</span>
                <p className="text-[1rem] font-bold">
                  Years of working experience
                </p>
              </div>
            </div>
            <div className="absolute bottom-[26em] right-[31rem] -rotate-90 text-nowrap bg-gray-900 p-7 rounded-2xl">
              <button className="btn btn-outline text-white border-[0.5px] border-blue-700 rounded-2xl hover:bg-gray-900">
                <span className="block bg-gray-900 rounded-xl px-4 py-2">
                  Watch Intro
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              I want to give you the best service
            </h2>
            <p className="mb-6 text-gray-300">
              Avaliamos os objetivos do seu negócio e identificamos os
              públicos-alvo ideais nas primeiras fases do projeto, os
              públicos-alvo ideais nas primeiras fases do valiamos os objetivos
              do seu identificamos os.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co.com/kc5J6G6/images-1-removebg-preview.png"
                  className="w-16 h-16 mr-2"
                  alt=""
                />
                <span className="text-2xl font-bold">
                  We can save your money
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co.com/236JVTp/image.jpg"
                  className="w-16 h-16 mr-2"
                  alt=""
                />
                <span className="text-2xl font-bold">
                  Promise specific timeline guarantee
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mb-6 text-gray-300 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 bg-purple-600 rounded-lg transform rotate-45 flex-shrink-0"></div>
                  <div>Production or trading of good</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 bg-purple-600 rounded-lg transform rotate-45 flex-shrink-0"></div>
                  <div>100% Better results</div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co.com/Xzh0fGK/Call-Us2x.png"
                  alt=""
                  className="h-24 w-24"
                />

                <div>
                  <span className="font-bold md:text-nowrap text-xl  ">
                    (+880) 1123 456788
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-purple-600 text-lg">
                    Have any question?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
