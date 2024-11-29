"use client";
/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  ServiceData,
  serviceData,
} from "../UtlitiFunction/FakeInformationData";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const [activeId, setActiveId] = useState<number>(2);

  return (
    <div className="py-20">
      <div className="w-full container mx-auto md:px-8 px-4">
        {/* Section Header */}
        <div className="pb-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-16 h-1 bg-[#e24707]"></span>
            <h1 className="text-lg font-semibold primaryColor">
              Service We Offer
            </h1>
            <span className="w-16 h-1 bg-[#e24707]"></span>
          </div>
          <h1 className="vigaRegular font-medium text-2xl md:text-3xl 2xl:text-4xl text-slate-800 text-center pb-2">
            We're accounting for your growth.
          </h1>
          <p className="text-center">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by
          </p>
          <p className="text-center">
            charms of pleasure of the moment, so blinded by desire, that they
            cannot foresee th
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-12 py-12">
          {serviceData.map((data: ServiceData) => (
            <motion.div
              key={data.id}
              onMouseEnter={() => setActiveId(data.id)}
              onMouseLeave={() => setActiveId(2)}
              className=" relative border rounded-2xl overflow-hidden"
              initial={{ scale: 1 }}
              animate={{
                scale: activeId === data.id ? 1.01 : 1,
                background:
                  activeId === data.id
                    ? "linear-gradient(to bottom, #ee916a, #e24707)"
                    : "#ffffff",
              }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
              }}
            >
              <div className="space-y-3 md:p-10 p-6">
                {/* Icon and ID */}
                <div className="flex justify-between items-center">
                  <div className="h-20 w-20 flex justify-center items-center primaryBg">
                    <Image
                      src={data.img}
                      alt={data.name}
                      width={100}
                      height={100}
                      className="rounded-full p-2"
                    />
                  </div>
                  <motion.h1
                    className="vigaRegular font-bold text-4xl"
                    animate={{
                      color: activeId === data.id ? "#ffffff" : "#1e293b",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {data.id}
                  </motion.h1>
                </div>

                {/* Title */}
                <motion.h1
                  className="font-semibold text-2xl vigaRegular"
                  animate={{
                    color: activeId === data.id ? "#ffffff" : "#1e293b",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {data.name}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className=" w-auto"
                  animate={{
                    color: activeId === data.id ? "#ffffff" : "#6b7280",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {data.description}
                </motion.p>

                {/* Divider */}
                <div
                  className={`border-b ${
                    activeId === data.id ? "border-white" : "border-gray-200"
                  }`}
                ></div>

                {/* Read Details Button */}
                <motion.button
                  className="flex items-center gap-2 font-medium"
                  animate={{
                    color: activeId === data.id ? "#ffffff" : "#1e293b",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  Read Details <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
