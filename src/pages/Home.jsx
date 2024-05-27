import React from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import EventsSection from "../components/EventsSection/EventsSection";
import OurPartners from "../components/OurPartners/OurPartners";
import ReachOutBanner from "../components/ReachOutBanner/ReachOutBanner";
import JoinGroupSection from "../components/JoinGroupSection/JoinGroupSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import Supporters from "../components/Supporters/Supporters";

const Home = () => {
  return (
    <MaxWidthContainer>
      <HomeHero />
      <EventsSection />
      <OurPartners/>
      <ReachOutBanner/>
      <JoinGroupSection/>
      <FeatureSection/>
      <Supporters/>
    </MaxWidthContainer>
  );
};

export default Home;
