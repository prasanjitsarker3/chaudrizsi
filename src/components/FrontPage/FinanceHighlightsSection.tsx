"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Highlight,
  highlightData,
} from "../UtlitiFunction/FakeInformationData";

const FinanceHighlightsSection = () => {
  const [activeId, setActiveId] = useState<number>(3);

  return (
    <div className="py-24 bg-[#fcede6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8">
          {highlightData.map((data: Highlight) => (
            <div
              key={data.id}
              className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white p-6 rounded-lg relative overflow-hidden transition-transform duration-500 transform`}
              onMouseEnter={() => setActiveId(data.id)}
              onMouseLeave={() => setActiveId(3)}
            >
              <div
                className={`flex flex-col items-center justify-between text-center h-72 transition-opacity duration-500 ${
                  activeId === data.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1 className="text-xl vigaRegular text-slate-800">
                  {data.name}
                </h1>
                <div className="border border-[#e24707] h-32 w-32 rounded-full flex justify-center items-center">
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={100}
                    height={100}
                    className="p-3"
                  />
                </div>
                <h2 className="text-lg font-medium text-gray-700">
                  {data.title}
                </h2>
              </div>
              <div
                className={`absolute inset-0 flex flex-col items-center justify-between text-center primaryBg text-white p-4 transition-opacity duration-300 ${
                  activeId === data.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-xl font-bold">{data.headline}</h1>
                <p className="mt-4">{data.description}</p>
                <button className="mt-6 text-white py-2 px-4 flex items-center gap-2">
                  Read Report <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceHighlightsSection;
