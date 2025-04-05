"use client";

import React from "react";
import Home from "@/components/Home";
import RoomsBook from "@/components/roomsBook";
import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Spa from "@/components/Spa";
import Booking from "@/components/booking";
import Gallery from "@/components/Gallery";
import Explore from "@/components/explore";
import Discover from "@/components/discover";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Home />
      <AboutUs />
      <Banner />
      <Spa />
      <Explore />
      <Discover />
      <RoomsBook />
      <Booking />
      <Gallery />
      <Footer />
    </>
  );
}
