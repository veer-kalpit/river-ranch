import React from "react";
import RoomsBook from "@/components/roomsBook";
import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Spa from "@/components/Spa";
import Booking from "@/components/booking";
import Gallery from "@/components/Gallery";

const page = () => {
  return (
    <div>
      <AboutUs />
      <Banner />
      <Spa />
      <RoomsBook />
      <Booking />
      <Gallery />
    </div>
  );
};

export default page;
