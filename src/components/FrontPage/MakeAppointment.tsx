import React from "react";

const MakeAppointment = () => {
  return (
    <div
      className="relative h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346660.jpg?ga=GA1.1.406508785.1728154460')", // Replace with your image URL
      }}
    >
      {/*Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eb7e51] to-[#e24707] opacity-65"></div>

      {/* Appointment Information */}
      <div className="relative text-center text-white">
        <div className="flex items-center justify-center space-x-2">
          <span className="w-16 h-1 bg-white"></span>
          <h1 className="text-base">Make an Appointment</h1>
          <span className="w-16 h-1 bg-white"></span>
        </div>
        <div className=" py-6 space-y-2">
          <p className="text-lg md:text-4xl vigaRegular">
            Reach Out Today Let s Build Connections,
          </p>
          <p className="text-lg md:text-4xl vigaRegular">
            Solve Problems Together
          </p>
        </div>
        <button className=" bg-white text-[#e24707] py-2 px-8 rounded-full">
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default MakeAppointment;
