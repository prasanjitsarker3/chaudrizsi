"use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isSmallDevice =
    typeof window !== "undefined" && window.innerWidth < 768;

  const handleNext = () => {
    const limit = isSmallDevice
      ? testimonialData.length - 1
      : testimonialData.length - 3;
    if (currentIndex < limit) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const testimonialData = [
    {
      id: 1,
      name: "Jasmine Lemon",
      designation: "Manager at Google",
      profileImg: "https://upload.wikimedia.org/profile1.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
    {
      id: 2,
      name: "Michael Lee",
      designation: "Product Designer at Apple",
      profileImg: "https://upload.wikimedia.org/profile2.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
    {
      id: 3,
      name: "Sophia Brown",
      designation: "Software Engineer at Amazon",
      profileImg: "https://upload.wikimedia.org/profile3.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
    {
      id: 4,
      name: "Ethan Davis",
      designation: "CTO at Microsoft",
      profileImg: "https://upload.wikimedia.org/profile4.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
    {
      id: 5,
      name: "Ava Martinez",
      designation: "CEO at Tesla",
      profileImg: "https://upload.wikimedia.org/profile5.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
    {
      id: 6,
      name: "Liam Johnson",
      designation: "Data Scientist at Meta",
      profileImg: "https://upload.wikimedia.org/profile6.jpg",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Meta_Platforms_Inc._logo.svg",
      feedback:
        "A customer is an individual or business that are chases another company's goods or services Customers are important becaus drive revenues.",
    },
  ];

  return (
    <div className=" pt-12 pb-24 ">
      <div className=" w-full container mx-auto md:px-8 px-4">
        <div className=" flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-16 h-1 bg-[#e24707]"></span>
              <h1 className="text-base primaryColor">Testimonial</h1>
            </div>
            <h1 className=" text-xl md:text-4xl font-medium vigaRegular text-slate-800 pb-3 pt-2">
              Here s How Our Clients are Dominating
            </h1>
            <p className=" text-sm md:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. <br />{" "}
              The point of using Lorem Ipsum is that it has a more or less
              normal distribution
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="md:h-12 md:w-12 h-8 w-8 flex justify-center items-center border border-[#e24707] hover:bg-[#e24707] hover:text-white primaryColor text-white rounded-full"
              onClick={handlePrev}
            >
              <ArrowLeft />
            </button>
            <button
              className="md:h-12 md:w-12 h-8 w-8 flex justify-center items-center border border-[#e24707] hover:bg-[#e24707] hover:text-white primaryColor text-white rounded-full"
              onClick={handleNext}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10"
          key={currentIndex}
        >
          {testimonialData
            ?.slice(currentIndex, currentIndex + (isSmallDevice ? 1 : 3))
            .map((item, index) => (
              <div
                key={item.id}
                className={`border border-gray-100 px-10 py-5 ${
                  index === 1
                    ? "bg-gradient-to-b from-[#ee916a] to-[#e24707]"
                    : "bg-gray-100"
                }`}
              >
                <div className=" flex  items-center gap-4">
                  <Image
                    src={
                      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                    }
                    alt=""
                    width={100}
                    height={100}
                    className=" w-14 h-14 rounded-full"
                  />
                  <div>
                    <h1
                      className={`font-medium text-2xl ${
                        index == 1 ? " text-white" : "text-slate-800"
                      }`}
                    >
                      {item.name}
                    </h1>
                    <h1
                      className={`${
                        index == 1
                          ? "text-base text-white"
                          : "text-base text-slate-700"
                      }`}
                    >
                      {item.designation}
                    </h1>
                  </div>
                </div>
                <h1
                  className={`${
                    index == 1 ? "text-white py-3" : "text-slate-600 py-3"
                  }`}
                >
                  {item.feedback}
                </h1>
                <div className=" flex justify-between items-center">
                  <div
                    className={`flex items-center ${
                      index == 1 ? " text-white" : "text-yellow-400"
                    }`}
                  >
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/128/5968/5968863.png"
                    }
                    alt=""
                    width={100}
                    height={60}
                    className=" h-14"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
