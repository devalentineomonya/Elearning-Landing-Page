import React from "react";

const Supporters = () => {
  return (
    <div>
      <h2 className="text-slate-950 font-semibold text-4xl text-center  ">
        Some big companies supports
      </h2>
      <h2 className="text-slate-950 font-semibold text-4xl text-center">
        DevBros Events service
      </h2>

      <div className="flex flex-wrap  gap-x-3 gap-y-5 mt-5">
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
      </div>
    </div>
  );
};

const SupporterCard = () => {
  return <div className="px-2 py-4 rounded-full bg-gray-200 max-h-20 min-h-20  min-w-52 max-w-52 flex flex-shrink-0 justify-center items-center "></div>;
};

export default Supporters;
