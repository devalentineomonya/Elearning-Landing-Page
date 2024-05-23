import React from "react";
import EventsCard from "../EventsCard/EventsCard";

const EventsSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 mt-8">
        <h3 className="text-4xl text-slate-900 font-semibold">
          Upcoming Online Events
        </h3>
        <div>&lt; &gt;</div>
      </div>
      <div className=" grid grid-cols-3 w-full h-screen gap-x-6">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default EventsSection;
