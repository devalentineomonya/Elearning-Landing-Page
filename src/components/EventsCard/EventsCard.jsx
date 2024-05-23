import React from "react";
import testImage from "../../assets/pattern1.png";
const EventsCard = () => {
  return (
    <div className="w-full aspect-square">
      <div className="h-1/2 relative">
        <img src={testImage} className="absolute w-full h-full rounded-xl " />
      </div>
      <div className="mt-2">
        <p className="text-purple-500 font-[400]">
          <span>WED, MAR 15</span> | <span>7:30 PM BST</span>{" "}
        </p>
        <h2 className="text-slate-900 font-semibold text-3xl ">
          Carrer meetup with Design & Development
        </h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="relative flex items-center">
          <div className="w-10 h-10 rounded-full bg-red-500 hover:scale-105 hover:mr-5 transition-all ease-in-out duration-300 flex justify-center items-center "></div>
          <div className="w-10 h-10 rounded-full bg-pink-500 -ml-5 hover:ml-0 hover:scale-105 transition-all ease-in-out duration-300 flex justify-center items-center "></div>
          <div className="w-10 h-10 rounded-full bg-yellow-500 -ml-5 hover:ml-0 hover:scale-105 transition-all ease-in-out duration-300 flex justify-center items-center "></div>
          <div className="w-10 h-10 rounded-full bg-purple-500 -ml-5 hover:ml-0 hover:scale-105 transition-all ease-in-out duration-300 flex justify-center items-center "></div>
          <div className="w-10 h-10 rounded-full bg-orange-500 -ml-5 hover:ml-0 hover:scale-105 transition-all ease-in-out duration-300 flex justify-center items-center ">
            50+
          </div>
        </div>
        <h4 className="text-slate-800 font-semibold text-xl">View more</h4>
      </div>
    </div>
  );
};

export default EventsCard;
