"use client";
import { Calendar, Link, LockOpen, User } from "lucide-react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./footer";
import { ArrowDown } from "lucide-react";
import NextLink from "next/link";

const Home = ({
  isRendered,
  onRenderComplete,
  scrollToFooter,
  scrollToAbout,
}) => {
  const pegionRef = useRef(null);
  const pageRef = useRef(null);
  const videoRef_1 = useRef(null);
  const videoRef_2 = useRef(null);

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
      <div className="absolute top-0 left-0 w-full h-full bg-[#000B18] opacity-30 z-20" />

      {/* Background Videos */}
      <div className="w-full h-full relative hidden sm:block">
        <video
          ref={videoRef_1}
          className="absolute w-full h-full object-cover z-10"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => fadeToNextVideo(videoRef_1, videoRef_2)}
        >
          <source src="/Birds.mp4" type="video/mp4" />
        </video>

        <video
          ref={videoRef_2}
          className="absolute w-full h-full object-cover z-0"
          muted
          playsInline
          preload="auto"
          onEnded={() => fadeToNextVideo(videoRef_2, videoRef_1)}
        >
          <source src="/Birds.mp4" type="video/mp4" />
        </video>
      </div>

      <video
        className="absolute w-full h-full object-cover sm:hidden"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/mobile_video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-40">
        <Navbar scrollToFooter={scrollToFooter} />
      </div>

      {/* Heading Content */}
      <div className="w-fit h-fit absolute mt-8 lg:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-white ">
        <h6 className="font-cormorant text-[16px] mb-[45px] lg:mb-3 tracking-[2px] text-center xl:text-start whitespace-nowrap">
          WELCOME TO RIVER RANCH
        </h6>

        <div className="w-fit h-fit leading-10 sm:leading-20 xl:leading-28">
          <h1 className="font-cormorant block lg:hidden font-semibold text-[64px] text-center whitespace-nowrap leading-[150%]">
            ESCAPE <br /> INTO <br /> NATURE
          </h1>
          <h1 className="font-cormorant font-semibold hidden lg:block text-[64px] xl:text-[150px] text-left whitespace-nowrap uppercase">
            Escape <br />
            <span className=" xl:ml-72 pt-2">Into Nature</span>
          </h1>
        </div>
        <button
          onClick={scrollToAbout}
          className="lg:hidden cursor-pointer w-fit border-2 border-white rounded-full flex justify-center items-center p-3 aspect-square mt-12 mx-auto"
        >
          <ArrowDown color="white" />
        </button>
      </div>
    </div>
  );
};

export default Home;
