"use client";

import React, { useRef } from "react";

// GSAP animation tools
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Icons for input labels
import { RiCalendarCheckLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";

import Image from "next/image";
import Pegion from "../../public/pegion.gif";

const Home = ({ isRendered, onRenderComplete }) => {
  const pageRef = useRef(null); // Ref for the entire page container

  const videoRef_1 = useRef(null); // First video background
  const videoRef_2 = useRef(null); // Second video background (used for smooth fade transition)
  const pegionRef = useRef(null); // pegion gif (used for bird flying animation)

  // Animate the zoom-in entrance of the page when it renders
  useGSAP(() => {
    if (!pageRef.current || !isRendered) return;

    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 2 },
      {
        opacity: 1,
        scale: 1,
        zIndex: 20,
        duration: 0.35,
        onComplete: onRenderComplete, // Call parent callback when animation completes
      }
    );
  }, [isRendered]);

  useGSAP(() => {
    if (!pegionRef.current || !isRendered) return;

    // Animate the pigeon across the screen using a series of keyframes.
    // This creates a natural-looking flight path that moves in a wavy pattern.
    gsap.to(pegionRef.current, {
      keyframes: [
        { x: "0vw", y: "28vh", duration: 1 }, // Pigeon enters the screen from the left
        { x: "15vw", y: "25vh", duration: 0.9 }, // Slight upward glide
        { x: "30vw", y: "32vh", duration: 0.8 }, // Slight downward dip
        { x: "45vw", y: "23vh", duration: 0.9 }, // Upward glide
        { x: "60vw", y: "33vh", duration: 0.8 }, // Dip again
        { x: "75vw", y: "21vh", duration: 0.9 }, // Higher glide
        { x: "90vw", y: "30vh", duration: 0.8 }, // Another small dip
        { x: "105vw", y: "24vh", duration: 1 }, // Approaching the end of screen
        { x: "115vw", y: "20vh", duration: 1 }, // Flies off the screen smoothly
      ],
    });
  }, [isRendered]);

  /**
   * Smoothly fade from current video to the next one
   * @param {ref} currentRef - Ref of the currently playing video
   * @param {ref} nextRef - Ref of the next video to play
   */
  const fadeToNextVideo = (currentRef, nextRef) => {
    gsap.to(currentRef.current, {
      opacity: 0,
      duration: 1.5,
      onComplete: () => {
        gsap.set(currentRef.current, {
          opacity: 1,
          zIndex: 0,
        });
      },
    });

    gsap.to(nextRef.current, {
      opacity: 1,
      duration: 1.5,
      onComplete: () => {
        gsap.set(nextRef.current, {
          zIndex: 1,
        });
      },
    });

    nextRef.current.play(); // Start next video after transition
  };

  // When first video ends, fade into second video
  const handleVideo1End = () => {
    fadeToNextVideo(videoRef_1, videoRef_2);
  };

  // When second video ends, fade back into first video
  const handleVideo2End = () => {
    fadeToNextVideo(videoRef_2, videoRef_1);
  };

  return (
    <div
      ref={pageRef}
      className="home fixed top-0 left-0 w-screen h-screen z-0"
    >
      {/* Background Video Container */}
      <div className="w-full h-full relative">
        {/* First background video (starts playing by default) */}
        <video
          ref={videoRef_1}
          className="absolute w-screen h-full object-cover z-10"
          src={"/video1.mp4"}
          muted
          playsInline
          autoPlay
          onEnded={handleVideo1End}
        />

        {/* Second background video (starts hidden, used for transition) */}
        <video
          ref={videoRef_2}
          className="absolute w-screen h-full object-cover z-0"
          src={"/video1.mp4"}
          muted
          playsInline
          onEnded={handleVideo2End}
        />
      </div>

      <Image
        ref={pegionRef}
        className="w-[200px] h-auto absolute top-0 left-[-15vw] z-40"
        src={Pegion}
        alt="pegion"
      />

      {/* Main Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col uppercase justify-center z-10 px-4">
        {/* Left side gradient background for text readability */}
        <div
          className="absolute hidden sm:block left-0 right-0 sm:right-auto max-w-[100%] sm:max-w-[80%] md:max-w-[70%] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] 
                       bg-gradient-to-r from-black/50 to-transparent sm:rounded-r-3xl rounded-none z-[-1]"
        ></div>

        {/* Hero Tagline */}
        <h3 className="text-center sm:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[25%] hero-heading tracking-wide text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Welcome to River Ranch
        </h3>

        {/* Hero Heading - Line 1 */}
        <h1
          className="text-center sm:text-left sm:pl-[15%] md:pl-[20%] lg:pl-[25%] hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
          style={{
            textShadow:
              "0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          Treasure
        </h1>

        {/* Hero Heading - Line 2 */}
        <h1
          className="text-center sm:text-left sm:pl-[25%] md:pl-[30%] lg:pl-[40%] hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
          style={{
            textShadow:
              "0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          your holiday
        </h1>

        {/* Book Now Button */}
        <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
          <button
            className="text-base sm:text-lg md:text-xl bg-[#1F7580] text-white border-2 border-white hover:bg-white hover:text-[#1F7580] 
                      transition-colors rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 uppercase tracking-wide font-medium 
                      shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Bottom Inputs Section (for large screens only) */}
      <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10 md:pb-16 lg:pb-20 z-10">
        <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-16 p-4 sm:p-6 rounded-lg bg-black/30 backdrop-blur-sm">
          {/* Check In Input */}
          <div>
            <div className="flex gap-2 items-center">
              <RiCalendarCheckLine className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Check in
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>

          {/* Check Out Input */}
          <div>
            <div className="flex gap-2 items-center">
              <RiCalendarCheckLine className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Check out
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>

          {/* Guests Input */}
          <div>
            <div className="flex gap-2 items-center">
              <IoMdPerson className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Guests
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>

          {/* Accommodation Input */}
          <div>
            <div className="flex gap-2 items-center">
              <FaUnlock className="text-[#1F7580]" />
              <h3 className="uppercase font-semibold text-white text-sm lg:text-base">
                Accommodation
              </h3>
            </div>
            <input
              className="bg-transparent text-white border-b-2 border-[#1F7580] outline-none w-full"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
