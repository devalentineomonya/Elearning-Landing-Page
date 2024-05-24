import React from "react";
import HeroText from "./HeroText/HeroText";
import HeroImage from "./HeroImage/HeroImage";
const HomeHero = () => {
  return (
    
        <div className="flex h-[calc(70vh+4rem)] flex-col lg:flex-row">
        <HeroText />
        <HeroImage />
    </div>
      
  );
};

export default HomeHero;
