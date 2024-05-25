import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
const JoinSectionText = () => {
  return (
    <div className=" flex flex-1 flex-col items-start justify-center min-h-96">
      <h1 className="text-slate-950 font-semibold text-4xl mb-4">
        Find a perfect group to expand your{" "}
        <span className=" w-full h-full px-3 py-2 oval-background border-2 border-[#9380f6]">
          Knowledge.
        </span>
      </h1>
      <p className="text-sm text-slate-700">
        Labore sint ad reprehenderit tempor. Enim occaecat fugiat officia
        exercitation in et sunt in aliqua labore incididunt. Aute Lorem eu duis
        eiusmod.
      </p>
      <button className="flex items-center py-2 px-3 rounded-full bg-[#fdb802] text-white font-semibold gap-x-1 mt-4">
        <HiOutlineUserGroup /> Join Group
      </button>
    </div>
  );
};

export default JoinSectionText;
