import Image from "next/image";
import React from "react";

const SuccessActionStep = () => {
  const successData = [
    {
      id: 1,
      title: "Book Time",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      img: "https://images.pexels.com/photos/7818099/pexels-photo-7818099.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Meet Experts",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      img: "https://images.pexels.com/photos/7691698/pexels-photo-7691698.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Get Results",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      img: "https://images.pexels.com/photos/7691745/pexels-photo-7691745.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="w-full container mx-auto md:px-8 px-4 py-16">
      {/* Section Title */}
      <div className="text-center pb-8">
        <h1 className="text-xl md:text-3xl 2xl:text-5xl primaryColor vigaRegular text-center">
          Your success depends
        </h1>
        <h1 className="text-xl md:text-3xl 2xl:text-5xl primaryColor vigaRegular text-center">
          on easy actionable steps
        </h1>
        <p className="text-base md:text-lg 2xl:text-xl">
          There are many variations of passages of available, but the majority
          have suffered
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {successData?.map((data) => (
          <div key={data.id} className="relative">
            {/* Image Section */}
            <div className="relative h-96 rounded-xl">
              <Image
                src={data.img}
                alt={data.title}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

              {/* ID in Top-Right */}
              <div className="absolute top-4 right-4 primaryBg text-white bg-opacity-50 font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                {data.id}
              </div>
              <div className=" absolute bottom-4 left-4 text-white">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>

            {/* Text Section */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessActionStep;
