"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "./Navbar";

// Media
import homeOverlay from "../../public/HomeOverlay.png";
import prgion from "../../public/pegion.gif";

const Home = ({ onRenderComplete }) => {
  const pegionRef = useRef(null);
  const pageRef = useRef(null);
  const videoRef_1 = useRef(null);
  const videoRef_2 = useRef(null);

  // Pigeon animation
  useGSAP(() => {
    if (!pegionRef.current) return;
    gsap.set(pegionRef.current, { x: "-15vw" });
    gsap.to(pegionRef.current, {
      keyframes: [
        { x: "-0vw", y: "28vh", duration: 1 },
        { x: "15vw", y: "25vh", duration: 0.9 },
        { x: "30vw", y: "32vh", duration: 0.8 },
        { x: "45vw", y: "23vh", duration: 0.9 },
        { x: "60vw", y: "33vh", duration: 0.8 },
        { x: "75vw", y: "21vh", duration: 0.9 },
        { x: "90vw", y: "30vh", duration: 0.8 },
        { x: "105vw", y: "24vh", duration: 1 },
        { x: "115vw", y: "20vh", duration: 1 },
      ],
    });
  }, []);

  // Zoom in entrance
  useGSAP(() => {
    if (!pageRef.current) return;
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 2 },
      {
        opacity: 1,
        scale: 1,
        zIndex: 20,
        duration: 0.35,
        onComplete: onRenderComplete,
      }
    );
  }, []);

  // Video transitions
  const fadeToNextVideo = (currentRef, nextRef) => {
    gsap.to(currentRef.current, {
      opacity: 0,
      duration: 1.5,
      onComplete: () => gsap.set(currentRef.current, { opacity: 1, zIndex: 0 }),
    });
    gsap.to(nextRef.current, {
      opacity: 1,
      duration: 1.5,
      onComplete: () => gsap.set(nextRef.current, { zIndex: 1 }),
    });
    nextRef.current.play();
  };

  return (
    <div
      ref={pageRef}
      className="w-screen h-screen z-0 fixed top-0 left-0 overflow-hidden"
    >
      {/* Top Gradient */}
      {/* <div className="h-20 absolute w-full bg-gradient-to-b from-[#1F7580] to-transparent top-0 left-0 z-10" /> */}

      {/* Background Videos */}
      <div className="w-full h-full relative">
        <video
          ref={videoRef_1}
          className="absolute w-full h-full object-cover z-10"
          src="/video1.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => fadeToNextVideo(videoRef_1, videoRef_2)}
        />
        <video
          ref={videoRef_2}
          className="absolute w-full h-full object-cover z-0"
          src="/video1.mp4"
          muted
          playsInline
          onEnded={() => fadeToNextVideo(videoRef_2, videoRef_1)}
        />

        {/* Overlay */}
        <Image
          src={homeOverlay}
          alt="Overlay"
          fill
          className="absolute w-full h-full object-cover z-20 pointer-events-none"
        />
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      {/* Heading Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-30 px-4 uppercase space-y-1">
        <p className="text-center lg:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[15%] text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Welcome to River Ranch
        </p>
        <p className="text-center lg:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[15%] text-[40px] lg:text-[150px] text-white font-bold font-cormorant leading-none">
          Escape
        </p>
        <p className="text-center lg:text-left sm:pl-[25%] md:pl-[30%] lg:pl-[30%] text-[40px] lg:text-[150px] text-white font-bold font-cormorant leading-none">
          Into Nature
        </p>
      </div>
    </div>
  );
};

export default Home;
