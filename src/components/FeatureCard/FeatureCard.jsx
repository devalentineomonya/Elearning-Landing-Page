import React from "react";

import testImage from "../../assets/ai_talk.jpg";
const FeatureCard = ({featureItem}) => {
  return (
    <div className="w-full aspect-square flex flex-col justify-center items-center px-3 bg-slate-50 rounded-md">
      <img src={testImage} className="h-16 w-16 rounded-full" />
      <h3 className="font-semibold text-2xl text-slate-950">{featureItem.name}</h3>
      <p className="text-center text-sm">
       {featureItem.description} </p>
    </div>
  );
};

export default FeatureCard;
