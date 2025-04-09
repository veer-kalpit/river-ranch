"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Animations
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Assets
import frameImage from "../assets/images/frame.png";
import leaf1 from "../assets/images/himg.png";
import leaf2 from "../assets/images/himg1.png";

const Overlay = ({ setHomeRendering }) => {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const pageRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
      videoRef.current.play();
    }
  };

  useGSAP(() => {
    if (!isAnimating) return;

    const tl = gsap.timeline();

    tl.to(
      buttonRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      0
    )

      .to(
        frameRef.current,
        {
          scale: 2.5,
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        0
      )

      .to(
        pageRef.current,
        {
          delay: 1,
          scale: 2,
          opacity: 0,
          zIndex: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onStart: () => {
            setHomeRendering();
          },
        },
        1
      ); // overlap transition for smooth flow
  }, [isAnimating]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div
      ref={pageRef}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col z-[50]"
    >
      {/* background video  */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        playsInline
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0.3;
          }
        }}
        src="/bg.mp4"
      />

      {/* Heading */}
      <h1 className="w-full text-center text-white text-5xl sm:text-8xl tracking-wider font-semibold font-cormorant z-[50]">
        River Ranch
      </h1>

      {/* Frame and Explore Button */}
      <div className="relative flex items-center justify-center w-full px-4 z-[50]">
        <Image
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          className="block relative min-w-[400px] w-full max-w-[500px]"
        />

        <div
          onClick={handleClick}
          ref={buttonRef}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <div className="relative w-fit h-fit rounded-md overflow-hidden z-0">
            <button
              className="hero-heading relative px-5 py-2
                bg-[#F5E8DF] text-[#3A665F] uppercase cursor-pointer
                text-sm sm:text-md"
            >
              Explore
            </button>

            <div className=" absolute bottom-0.5 left-0 w-full h-fit flex justify-between items-end z-10">
              <Image
                src={leaf1}
                alt="Decorative leaf"
                className="w-7 ml-0.5 h-fit"
              />
              <Image
                src={leaf2}
                alt="Decorative leaf"
                className="w-7 mr-0.5 h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
