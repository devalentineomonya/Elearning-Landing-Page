import React from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import EventsSection from "../components/EventsSection/EventsSection";

const Home = () => {
  return (
    <MaxWidthContainer>
      <HomeHero />
      <EventsSection />
    </MaxWidthContainer>
  );
};

export default Home;
