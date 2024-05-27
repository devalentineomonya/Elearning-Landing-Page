import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { GetStarted } from "../ReachOutBanner/ReachOutText";

const featureItems = [
  {
    title: "Can Join Group",
    description:
      "Pariatur aute sit dolore duis do incididunt et est sint mollit. Elit fugiat ipsum ",
  },
  {
    name: "Unlimited Events",
    description: " non anim laborum exercitation laboris commodo do culpa.",
  },
  {
    name: "Start Free Group",
    description: " non anim laborum exercitation laboris commodo do culpa.",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full h-fit lg:h-[80vh] bg-gray-200  rounded-xl flex items-center flex-col py-24">
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="sm:w-1/2 text-center  text-3xl font-semibold text-slate-800  ">
          Feature of DrevBros
        </h2>
        <p className="sm:w-1/2 text-center text-sm">
          Mollit sint quis nostrud ullamco ex eu velit exercitation magna ex
          fugiat ut pariatur. Dolor in laboris Lorem in ipsum proident non
          reprehenderit. Ea ullamco fugiat duis qui adipisicing ut adipisicing
          fugiat ea mollit cillum officia. Sunt qui ad officia ipsum
          exercitation id cupidatat. Aliquip nisi consequat culpa non pariatur
          velit proident consectetur.
        </p>
      </div>
      <div className="grid grid-cols-3  gap-x-3  w-[90%] md:w-[70%] ">
        {featureItems.map((featureItem, index) => (
          <FeatureCard featureItem={featureItem}  key={index}/>
        ))}
      </div>
      <GetStarted />
    </div>
  );
};

export default FeatureSection;
