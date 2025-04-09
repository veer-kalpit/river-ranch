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


const Overlay = ({ setIsRenderedHome }) => {
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

  useGSAP(
    () => {
      if (!isAnimating) return;

      const tl = gsap.timeline();

      tl.to(buttonRef.current, { opacity: 0, duration: 1.5 }, 0)
        .to(frameRef.current, { scale: 6, opacity: 0, duration: 2.5 }, 0)
        .to(pageRef.current, {
          scale: 2,
          opacity: 0,
          zIndex: -1,
          duration: 0.35,
          onStart: () => {
            setIsRenderedHome(true);
          },
        });
    },
    { dependencies: [isAnimating] }
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div
      ref={pageRef}
      className="overlay relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden z-10"
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
      <div className="relative w-full flex flex-col  mt-50 z-[999]">
        <h1
          className="text-center text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider font-semibold font-cormorant"
          
        >
          River Ranch
        </h1>
      </div>

      {/* Frame and Explore Button */}
      <div className="frameImg relative flex items-center justify-center pb-10 w-full px-4">
        <Image
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          style={{
            display: "block",
            position: "relative",
            zIndex: 10,
            willChange: "transform",
            transformOrigin: "center center",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />

        {!isAnimating && (
          <div
            onClick={handleClick}
            ref={buttonRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-xl">
              <button
                className="hero-heading relative z-10 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5
                bg-[#F5E8DF] text-[#3A665F] uppercase
                text-sm sm:text-lg md:text-xl lg:text-2xl 
                rounded-lg shadow-lg"
                style={{ cursor: "pointer" }}
              >
                Explore
              </button>

              <div className="absolute bottom-0 flex space-x-20 justify-between z-20">
                <Image
                  src={leaf1}
                  alt="Decorative leaf"
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <Image
                  src={leaf2}
                  alt="Decorative leaf"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
