import React from "react";
import { FaAmazon, FaGoogle, FaRegSquarePlus, FaSlack, FaYoutube } from "react-icons/fa6";
const OurPartners = () => {
  return (
    <div className="w-full h-fit lg:h-[60vh] bg-gray-200  rounded-xl flex items-center flex-col py-24">
      <h1 className="text-5xl font-semibold text-slate-900  ">
        We connect worlds Career Exparts
      </h1>
      <h1 className="text-5xl font-semibold text-slate-900 mt-4 ">
        Together to Inspire Freashiers
      </h1>
      <p className="mt-10 text-base text-center px-12  lg:w-[55%]">
        Ullamco consectetur esse tempor fugiat do ut sunt ex labore. Ullamco
        adipisicing quis duis magna reprehenderit do qui cupidatat. Ullamco
        adipisicing eiusmod ex nulla laboris cupidatat. Duis consequat cillum
      </p>
      <button className=" mt-4 flex items-center py-3 px-6 rounded-full gap-x-3 font-semibold text-gray-50  bg-[#fdb802]">
        <FaRegSquarePlus size={20}/> More About Us
      </button>
      <div className="flex items-center gap-x-4 mt-8">
        <div className="flex items-center gap-x-2">
          <FaGoogle size={40} />
          <span className="text-2xl font-semibold">Google</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaAmazon size={40} />
          <span className="text-2xl font-semibold">Amazon</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaYoutube size={40} />
          <span className="text-2xl font-semibold">Youtube</span>
        </div>
        <div className="flex items-center gap-x-2">
          <FaSlack size={40} />
          <span className="text-2xl font-semibold">Slack</span>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
