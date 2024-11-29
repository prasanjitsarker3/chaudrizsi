import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-16 h-1 bg-[#e24707]"></span>
              <h1 className=" text-base 2xl:text-lg font-semibold primaryColor">
                Who We Are
              </h1>
            </div>

            {/* Main Headings */}
            <div>
              <h1 className=" text-2xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
                Refunds and Relationships
              </h1>
              <h1 className=" text-2xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
                Tailored with Care
              </h1>
            </div>

            {/* Divider */}
            <div className="border-b-2 border-gray-300"></div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-between text-center md:text-left">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-gray-800">780+</h1>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-gray-800">10+</h1>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-gray-800">1450+</h1>
                <p className="text-gray-600">Projects Crafted</p>
              </div>
            </div>
            <button className=" py-3 px-12 primaryBg text-white rounded-full">
              Contact Us Now
            </button>
          </div>

          {/* Right Section */}
          <div className="col-span-12 md:col-span-6">
            <div className="h-96 w-full">
              <Image
                src={
                  "https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt=""
                width={500}
                height={500}
                className=" h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
