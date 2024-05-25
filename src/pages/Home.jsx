import React from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import EventsSection from "../components/EventsSection/EventsSection";
import OurPartners from "../components/OurPartners/OurPartners";
import ReachOutBanner from "../components/ReachOutBanner/ReachOutBanner";

const Home = () => {
  return (
    <MaxWidthContainer>
      <HomeHero />
      <EventsSection />
      <OurPartners/>
      <ReachOutBanner/>
    </MaxWidthContainer>
  );
};

export default Home;
