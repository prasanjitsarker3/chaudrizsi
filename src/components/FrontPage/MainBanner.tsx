import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const MainBanner = () => {
  return (
    <div className="h-[100vh]">
      <div className=" relative">
        <div className=" relative grid grid-cols-12">
          {/* Left Image */}
          <div className="md:h-[100vh] h-[50vh] w-full col-span-12 md:col-span-7">
            <Image
              src={
                "https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="Image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="md:h-[100vh] h-[50vh] w-full col-span-12 md:col-span-5">
            <Image
              src={
                "https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="Image 2"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"></div>

        <div className="absolute top-1/3 md:top-auto md:bottom-8 w-full">
          <div className=" relative bg-black  bg-opacity-20 md:w-1/2 w-full 2xl:h-96 md:h-72 h-96">
            <div className=" 2xl:pl-52 md:pl-20 p-5">
              <div className=" md:space-y-1 2xl:space-y-3 space-y-3">
                <select className=" w-80 border rounded-full py-2 px-6 bg-white text-black">
                  <option value="" disabled>
                    I went to
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <h1 className=" text-base text-white">
                  STILL HERE TO ASSIST YOU TO YOUR GOAL
                </h1>
                <h1 className=" text-xl vigaRegular text-white">
                  Tax services & accounting services
                </h1>
                <h1 className=" text-2xl vigaRegular text-white">
                  IN NYC BY CHAUDRI CPA
                </h1>
                <p className=" text-white 2xl:text-base text-sm">
                  Our tax professionals have an average of 10 years of expertise
                  and know how to obtain you every credit and deduction you
                  deserve. With us, tax filing and accounting may become as
                  simple as a consistent procedure for you each year.
                </p>
                <button className=" bg-white py-2 px-4 primaryColor rounded-full">
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
          <div className=" hidden md:block 2xl:block absolute right-1/3 2xl:mr-32 md:mr-16 top-0">
            <div className=" w-20 h-20 bg-[#f1a383] bg-opacity-30 flex justify-center items-center rounded-full">
              <div className=" w-16 h-16 bg-[#eb7e51] bg-opacity-60 flex justify-center items-center rounded-full">
                <div className=" w-10 h-10 primaryBg flex justify-center items-center rounded-full">
                  <Play className=" text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
