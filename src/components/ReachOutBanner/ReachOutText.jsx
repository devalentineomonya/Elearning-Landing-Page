import React from "react";
import { MdArrowOutward } from "react-icons/md";
import curveArrow from "../../assets/curve-arrow.png";
const ReachOutText = () => {
  return (
    <div className="relative flex justify-center items-start flex-col flex-1 min-h-96">
      <img src={curveArrow} className="absolute top-0 right-0 w-48" />
      <div className="mt-[150px] lg:mt-0">
        <h1 className="text-slate-950 font-semibold text-4xl mb-4">
          Reach the right track to build great skills
        </h1>
        <p className="text-sm text-slate-700">
          Sit fugiat concepteur laboris velit amet minim ut reprehenderit
          reprehenderit dolore veniam enim. Labore ea ad ipsum sint enim
          commodo.{" "}
        </p>

       <GetStarted/>
      </div>
    </div>
  );
};

export const GetStarted=()=>{
  return(
    <button className="flex items-center py-3 px-4 rounded-full bg-[#7a68d6] text-white font-semibold gap-x-1 mt-4">
    <MdArrowOutward size={24} />
    <span>Get started - It's Free</span>
  </button>
  )
}

export default ReachOutText;
