import Image from "next/image";
import React from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const WhyChooseUp = () => {
  return (
    <div className=" py-12">
      <div className=" bg-[#fef8f5] ">
        <div className=" grid grid-cols-12  w-full  container mx-auto md:px-8 px-4">
          <div className=" col-span-12 md:col-span-6 p-10">
            <div className="flex items-center space-x-2">
              <span className="w-16 h-1 bg-[#e24707]"></span>
              <h1 className="text-base primaryColor">Why Choose Up</h1>
            </div>
            <h1 className=" text-2xl font-medium vigaRegular text-slate-700 mt-2">
              One Source of Financial
            </h1>
            <h1 className=" text-2xl font-medium vigaRegular text-slate-700">
              Security Specialists
            </h1>
            <p className=" text-sm text-slate-600 my-2">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee.
            </p>
            <div className=" flex gap-5">
              <div className=" h-16 w-16  border border-dashed border-[#e24707] p-1   rounded-full">
                <Image
                  src={"/Photo/fund.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="bg-[#e24707] p-1 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-slate-900 font-medium text-lg">
                  Audit & Assurance
                </h1>
                <h1 className=" text-slate-800 font-medium text-base">
                  Transparency is a keyword
                </h1>
                <p className=" text-slate-600 text-sm">
                  The capital markets & investors use the information provided{" "}
                  <br />
                  by us. We know our onus of responsibility!
                </p>
              </div>
            </div>
            <div className=" flex gap-5 pl-8 my-2">
              <div className=" h-16 w-16  border border-dashed border-[#e24707] p-1   rounded-full">
                <Image
                  src={"/Photo/fund.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="bg-[#e24707] p-1 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-slate-900 font-medium text-lg">
                  Audit & Assurance
                </h1>
                <h1 className=" text-slate-800 font-medium text-base">
                  Transparency is a keyword
                </h1>
                <p className=" text-slate-600 text-sm">
                  The capital markets & investors use the information provided{" "}
                  <br />
                  by us. We know our onus of responsibility!
                </p>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" h-16 w-16  border border-dashed border-[#e24707] p-1   rounded-full">
                <Image
                  src={"/Photo/fund.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="bg-[#e24707] p-1 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-slate-900 font-medium text-lg">
                  Audit & Assurance
                </h1>
                <h1 className=" text-slate-800 font-medium text-base">
                  Transparency is a keyword
                </h1>
                <p className=" text-slate-600 text-sm">
                  The capital markets & investors use the information provided{" "}
                  <br />
                  by us. We know our onus of responsibility!
                </p>
              </div>
            </div>
            <button className=" primaryBg text-white py-2 px-8 rounded-full mt-2">
              Contact Us Now
            </button>
          </div>
          <div className=" relative col-span-12 md:col-span-6">
            <div className=" h-[38rem] 2xl:h-[38rem] w-full">
              <Image
                src={
                  "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149271742.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                }
                alt=""
                width={500}
                height={500}
                className=" h-full w-full object-cover"
              />
            </div>
            <div className=" absolute bottom-6 left-6 w-72  primaryBg p-5 text-white">
              <p className="relative text-center text-base  md:text-lg leading-relaxed">
                <BiSolidQuoteLeft className="inline text-xl mr-2 align-top" />
                The world is moved not only by the mighty shoves of the heroes,
                but also by the aggregate of the tiny pushes of each honest
                worker.
                <BiSolidQuoteRight className="inline text-xl ml-2 align-top" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUp;
