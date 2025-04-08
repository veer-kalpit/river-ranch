"use client";

import Home from "@/components/Home";
import Overlay from "@/components/Overlay";
import { useState } from "react";
import RoomsBook from "@/components/roomsBook";
import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Spa from "@/components/Spa";
import Booking from "@/components/booking";
import Gallery from "@/components/Gallery";
import Explore from "@/components/explore";
import Discover from "@/components/discover";
import Footer from "@/components/footer";

export default function LandingPage() {
  const [isRendered, setIsRendered] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const handleRenderComplete = () => {
    setTimeout(() => {
      setHideOverlay(true);
    }, 500); // 0.5 seconds
  };

  return (
    <div >
      <div className="w-screen h-screen absolute top-0 left-0 z-50">
        {!hideOverlay && (
          <Overlay
            setIsRendered={setIsRendered}
            onRenderComplete={handleRenderComplete}
          />
        )}
      </div>

      {/* Home always rendered */}
      <Home
        isRendered={isRendered}
        onRenderComplete={handleRenderComplete}
        showNavbar={hideOverlay}
      />

      {/* Rest of the content after overlay */}
      {hideOverlay && (
        <>
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
      )}
    </div>
  );
}
