import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
const JoinSectionText = () => {
  return (
    <div className=" flex flex-1 flex-col">
      <h1 className="text-slate-950 font-semibold text-4xl mb-4">
        Find a perfect group to expand your Knowledge.
      </h1>
      <p className="text-sm text-slate-700">
        Labore sint ad reprehenderit tempor. Enim occaecat fugiat officia
        exercitation in et sunt in aliqua labore incididunt. Aute Lorem eu duis
        eiusmod.
      </p>
      <button className="flex items-center py-3 px-4 rounded-full bg-[#fdb802] text-white font-semibold gap-x-1 mt-4">
        <HiOutlineUserGroup /> Join Group
      </button>
    </div>
  );
};

export default JoinSectionText;
