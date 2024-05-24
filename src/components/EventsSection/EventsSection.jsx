import React from "react";
import EventsCard from "../EventsCard/EventsCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ai_talk from "../../assets/ai_talk.jpg";
import career_meetup from "../../assets/career_meetup.jpg";
import digital_marketing from "../../assets/digital_marketing.jpeg";
import startup_competition from "../../assets/startup_competition.jpg";
import tech_exhibition from "../../assets/tech_exhibition.jpg";
import web_development_workshop from "../../assets/web_development_workshop.jpg";
const events = [
  {
    date: "WED, MAR 15",
    time: "7:30 PM BST",
    title: "Career meetup with Design & Development",
    attendees: 50,
    image: career_meetup,
  },
  {
    date: "THU, APR 20",
    time: "6:00 PM EST",
    title: "Digital Marketing Conference",
    attendees: 120,
    image: digital_marketing,
  },
  {
    date: "FRI, JUN 25",
    time: "8:00 AM PST",
    title: "Startup Pitch Competition",
    attendees: 80,
    image: startup_competition,
  },
  {
    date: "SAT, JUL 10",
    time: "2:00 PM GMT",
    title: "Tech Exhibition Opening",
    attendees: 30,
    image: tech_exhibition,
  },
  {
    date: "MON, AUG 30",
    time: "5:30 PM CET",
    title: "Tech Talk: AI and Future of Work",
    attendees: 90,
    image: ai_talk,
  },
  {
    date: "WED, SEP 5",
    time: "9:00 AM BST",
    title: "Web Development Workshop",
    attendees: 60,
    image: web_development_workshop,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const EventsSection = () => {
  const CustomLeftArrow =({ onClick }) => {
 
    return (
      <div onClick={() => onClick()} className="cursor-pointer">
        <FaArrowLeft size={24} />
      </div>
    );
  };

  const CustomRightArrow =({ onClick }) => {
 
    return (
      <div onClick={() => onClick()} className="cursor-pointer">
        <FaArrowRight size={24} />
      </div>
    );
  };
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-6 mt-8">
        <h3 className="text-4xl text-slate-900 font-semibold">
          Upcoming Online Events
        </h3>
        <div className="flex items-center gap-x-2">
          <CustomLeftArrow />
          <CustomRightArrow />
        </div>
      </div>

      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {events &&
          events.map((eventItem, i) => (
            <EventsCard key={i} eventItem={eventItem} />
          ))}
      </Carousel>
    </div>
  );
};

export default EventsSection;
