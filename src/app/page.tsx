"use client";

import AboutUs from "@/components/aboutUs";
import Banner from "@/components/banner";
import Discover from "@/components/discover";
import Explore from "@/components/explore";
import Gallery from "@/components/Gallery";
import Spa from "@/components/Spa";
import Footer from "@/components/footer";
import Home from "@/components/Home";
import Overlay from "@/components/Overlay";
import PricingSection from "@/components/pricingSection";
import Menu from "@/components/menu"
import SoundPlayer from "@/components/soundPlayer";

import { useRef, useState } from "react";

export default function LandingPage() {
  const [isRenderHome, setIsRenderHome] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeRendering = () => {
    setIsRenderHome(true);
  };

  const handleRenderComplete = () => {
    setTimeout(() => {
      setHideOverlay(true);
    }, 500);
  };

  return (
    <div className="relative w-screen">
      {/* Overlay Section */}
      <div className="absolute top-0 left-0 w-full h-full  transition-opacity duration-500">
        {!hideOverlay && <Overlay setHomeRendering={handleHomeRendering} />}
      </div>

      {/* Home Already Mounted, Just Hidden Initially */}
      <SoundPlayer isRendered={isRenderHome} />
      <Home
        isRendered={isRenderHome}
        onRenderComplete={handleRenderComplete}
        scrollToFooter={scrollToFooter}
      />

      {isRenderHome && (
        <>
          <AboutUs scrollToFooter={scrollToFooter} />
          <Banner />
          <Spa />
          <Explore scrollToFooter={scrollToFooter} />
          <Discover scrollToFooter={scrollToFooter} />
          <Gallery />
          {/* <PricingSection scrollToFooter={scrollToFooter} /> */}
          <Menu/>
          <Footer ref={footerRef}  />
        </>
      )}
    </div>
  );
}
