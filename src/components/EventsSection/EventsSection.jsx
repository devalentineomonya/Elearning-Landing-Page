import React from "react";
import EventsCard from "../EventsCard/EventsCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const EventsSection = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-6 mt-8">
        <h3 className="text-4xl text-slate-900 font-semibold">
          Upcoming Online Events
        </h3>
        <div className="flex items-center gap-x-2"><FaArrowLeft size={24}className="cursor-pointer" /> <FaArrowRight size={24} className="cursor-pointer" /></div>
      </div>
      <div className=" grid grid-cols-3 w-full gap-x-6">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default EventsSection;
