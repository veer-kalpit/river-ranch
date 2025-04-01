import React from "react";
import RoomsBook from "@/components/roomsBook";
import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Spa from "@/components/Spa";

const page = () => {
  return (
    <div>
      <AboutUs />
      <Banner />
      <Spa />
      <RoomsBook />
    </div>
  );
};

export default page;
