"use client";

import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Discover from "@/components/discover";
import Explore from "@/components/explore";
import Footer from "@/components/footer";
import Home from "@/components/Home";

import Overlay from "@/components/Overlay";
import { useState } from "react";

export default function LandingPage() {
  const [isRenderHome, setIsRenderHome] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const handleHomeRendering = () => {
    setIsRenderHome(true);
    // setTimeout(() => {
    // }, 400);
  };

  const handleRenderComplete = () => {
    setTimeout(() => {
      setHideOverlay(true);
    }, 500);
  };

  return (
    <div className="relative w-screen">
      {/* Overlay Section */}
      <div className="absolute top-0 left-0 w-full h-full z-50 transition-opacity duration-500">
        {!hideOverlay && <Overlay setHomeRendering={handleHomeRendering} />}
      </div>

      {/* Home Already Mounted, Just Hidden Initially */}

      <Home isRendered={isRenderHome} onRenderComplete={handleRenderComplete} />

      {isRenderHome && (
        <>
          <AboutUs />
          <Banner />
          <Explore />
          <Discover />
          <Footer />
        </>
      )}
    </div>
  );
}
