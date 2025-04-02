import React from "react";
import RoomsBook from "@/components/roomsBook";
import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Spa from "@/components/Spa";
import Booking from "@/components/booking";
import Gallery from "@/components/Gallery";
import Explore from "@/components/explore";
import Discover from "@/components/discover";

const page = () => {
  return (
    <div>
      <AboutUs />
      <Banner />
      <Spa />
      <Explore />
      <Discover />
      <RoomsBook />
      <Booking />
      <Gallery />
    </div>
  );
};

export default page;
