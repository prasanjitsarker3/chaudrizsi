import Image from "next/image";
import React from "react";

const MissionStatement = () => {
  return (
    <div className=" py-12">
      <div className="py-20 bg-gradient-to-b from-[#ee916a] to-[#e24707]">
        <div className=" w-full container mx-auto md:px-8 px-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-white">
              <div className="flex items-center space-x-2">
                <span className="w-16 h-1 bg-white"></span>
                <h1 className="text-base  text-white">Who Are The Best One!</h1>
              </div>
              <h1 className="  vigaRegular font-medium text-2xl md:text-3xl 2xl:text-4xl  ">
                What We Believe In
              </h1>
              <p className=" my-5 md:text-base text-sm md:text-justify">
                we believe in the power of financial clarity. We are dedicated
                to providing accurate accounting and tax filing services that
                empower individuals and businesses to make informed decisions.
              </p>
              <p className=" md:text-base text-sm md:text-justify">
                With a commitment to integrity and excellence, we navigate
                complex tax laws, ensure compliance, and offer personalized
                solutions tailored to your unique needs. Trust us to simplify
                your financial journey and help you achieve success.
              </p>
            </div>
            <div className=" text-white">
              <div className="relative flex gap-6 md:gap-12 pl-8 pb-4 ">
                <div className="absolute left-8 top-1/2 h-1/2 w-0.5 border-l-2 border-dashed pl-8"></div>
                <div className="flex items-center space-x-1">
                  <div className="border border-dashed border-white w-24 md:w-40"></div>
                  <Image
                    src="/Photo/shuttle.png"
                    alt="Fund Icon"
                    width={100}
                    height={100}
                    className=" md:h-16 md:w-16 h-10 w-10"
                  />
                </div>

                <div>
                  <h1 className="vigaRegular font-medium text-2xl md:text-3xl">
                    Our Vision
                  </h1>
                  <p className="mt-4 md:text-base text-sm text-justify">
                    To simplify your financial journey with reliable accounting
                    and tax filing services. We strive to ensure accuracy,
                    compliance, and personalized solutions that empower your
                    financial success and peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                {/* Icon Section */}
                <div className="md:h-20 md:w-20 h-14 w-14 flex-shrink-0">
                  <Image
                    src="/Photo/target.png"
                    alt="Fund Icon"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text Section */}
                <div>
                  <h1 className="vigaRegular font-medium text-2xl md:text-3xl">
                    Our Mission
                  </h1>
                  <p className="mt-2 md:text-base text-sm text-justify leading-relaxed">
                    To simplify your financial journey with reliable accounting
                    and tax filing services. We strive to ensure accuracy,
                    compliance, and personalized solutions that empower your
                    financial success and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
