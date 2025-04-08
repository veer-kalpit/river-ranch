"use client"; // if this is in the app directory

import React, { useEffect, useRef, useState } from "react";

// Animations gsap
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import Image from "next/image";
import frame from "../../public/frame.png";

const Overlay = ({ setIsRenderedHome }) => {
  // references
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const pageRef = useRef(null);

  // states
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
  }, [isAnimating]);

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
        src="/bg.mp4"
        muted
        playsInline
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0.3;
          }
        }}
      />

      <div className="w-full h-full relative flex items-center justify-center px-4">
        {/* frame  */}
        <Image
          className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          ref={frameRef}
          src={frame}
          alt="Frame"
        />

        {/* explore button  */}
        <button
          ref={buttonRef}
          onClick={handleClick}
          type="button"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase
                    bg-[#988579] text-white px-4 py-2 cursor-pointer
                    text-sm sm:text-base md:text-lg 
                    rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Overlay;
