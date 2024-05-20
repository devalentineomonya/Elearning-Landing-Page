import React from "react";
import HeroText from "./HeroText/HeroText";
import HeroImage from "./HeroImage/HeroImage";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
const HomeHero = () => {
  return (
    <MaxWidthContainer>
        <div className="flex h-[calc(70vh+4rem)]">
        <HeroImage />
        <HeroText />
    </div>
      </MaxWidthContainer>
  );
};

export default HomeHero;
