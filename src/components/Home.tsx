"use client";
import { Calendar, LockOpen, User } from "lucide-react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "./Navbar";

// Media
import prgion from "../../public/pegion.gif";

const Home = ({ isRendered, onRenderComplete }) => {
  const pegionRef = useRef(null);
  const pageRef = useRef(null);
  const videoRef_1 = useRef(null);
  const videoRef_2 = useRef(null);

  // Pigeon animation
  useGSAP(() => {
    if (!pegionRef.current || !isRendered) return;

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
      onComplete: () => {
        if (pegionRef.current) {
          pegionRef.current.style.display = "none"; // fully remove it
        }
      },
    });
  }, [isRendered]);

  // Page entrance zoom
  useGSAP(() => {
    if (!pageRef.current || !isRendered) return;
    gsap.to(pageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: onRenderComplete,
    });
  }, [isRendered]);

  // Video transitions
  const fadeToNextVideo = (currentRef, nextRef) => {
    const tl = gsap.timeline();

    tl.to(
      currentRef.current,
      {
        opacity: 0,
        zIndex: 10,
        duration: 1.5,
        onComplete: () =>
          gsap.set(currentRef.current, { opacity: 1, zIndex: 0 }),
      },
      0
    ).to(
      nextRef.current,
      {
        opacity: 1,
        duration: 1.5,
        onComplete: () => gsap.set(nextRef.current, { zIndex: 1 }),
      },
      0
    );
    nextRef.current.play();
  };

  return (
    <div
      ref={pageRef}
      className={`w-screen h-screen z-0 scale-[2] opacity-0 fixed top-0 left-0 overflow-hidden ${
        isRendered ? "" : "hidden"
      }`}
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
        {/* <Image
          src={homeOverlay}
          alt="Overlay"
          fill
          className="absolute w-full h-full object-cover z-20 pointer-events-none"
        /> */}
      </div>

      <Image
        ref={pegionRef}
        className="w-[200px] h-fit absolute top-0 left-0 z-40"
        src={prgion}
        alt="pegion"
      />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      {/* Heading Content */}
      <div className="w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-white ">
        <h6 className="font-inter text-[10px] tracking-[3px] text-center xl:text-start whitespace-nowrap">
          WELCOME TO RIVER RENCH
        </h6>

        <div className="w-fit h-fit leading-10 sm:leading-20 xl:leading-28">
          <h1 className="font-cormorant text-[40px] sm:text-[80px] xl:text-[120px] text-center xl:text-start whitespace-nowrap">
            ESCAPE
          </h1>
          <h1 className="font-cormorant text-[40px] sm:text-[80px] xl:text-[120px] text-center xl:text-end xl:ml-72 whitespace-nowrap">
            INTO NATURE
          </h1>
        </div>
      </div>

      <div className="w-full absolute top-[60%] sm:top-[63%] md:top-[80%] left-1/2 -translate-x-1/2  flex flex-wrap justify-center items-center gap-8 z-30">
        <div className="hidden md:block w-fit h-fit">
          <div className="w-fit h-fit flex justify-center items-center gap-2 text-white">
            <Calendar size={16} color="white" />
            <h1 className="font-inter text-[13px]">CHECK IN</h1>
          </div>
          <div className="w-fit h-fit text-white mt-1.5">
            <h1 className="font-inter text-[13px]">Mon, 20 Jun 2022</h1>
            <hr className="border-white w-[150px]" />
          </div>
        </div>
        <div className="hidden md:block w-fit h-fit">
          <div className="w-fit h-fit flex justify-center items-center gap-2 text-white">
            <Calendar size={16} color="white" />
            <h1 className="font-inter text-[13px]">CHECK OUT</h1>
          </div>
          <div className="w-fit h-fit text-white mt-1.5">
            <h1 className="font-inter text-[13px]">Sat, 06 Jun 2022</h1>
            <hr className="border-white w-[150px]" />
          </div>
        </div>
        <div className="hidden md:block w-fit h-fit">
          <div className="w-fit h-fit flex justify-center items-center gap-2 text-white">
            <User size={16} color="white" />
            <h1 className="font-inter text-[13px]">Guests</h1>
          </div>
          <div className="w-fit h-fit text-white mt-1.5">
            <h1 className="font-inter text-[13px]">1 Adult</h1>
            <hr className="border-white w-[150px]" />
          </div>
        </div>
        <div className="hidden md:block w-fit h-fit">
          <div className="w-fit h-fit flex justify-center items-center gap-2 text-white">
            <LockOpen size={16} color="white" />
            <h1 className="font-inter text-[13px]">ACCOMMODATION</h1>
          </div>
          <div className="w-fit h-fit text-white mt-1.5">
            <h1 className="font-inter text-[13px]">Sea view room</h1>
            <hr className="border-white w-[150px]" />
          </div>
        </div>
        <button className="w-fit border border-white rounded-full px-13 py-2 whitespace-nowrap text-white text-[14px]">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
