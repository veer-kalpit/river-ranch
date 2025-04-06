"use client";

import React, { useEffect, useRef, useState } from "react";

// GSAP for animations
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Assets
import frameImage from "../../public/frame.png";
import Image from "next/image";

const Overlay = ({ setIsRendered }) => {
  // Refs to access DOM elements for animation
  const frameRef = useRef(null);     // Reference to the frame image
  const videoRef = useRef(null);     // Reference to the background video
  const buttonRef = useRef(null);    // Reference to the "Explore" button
  const pageRef = useRef(null);      // Reference to the full page container

  // Local state to prevent multiple animation triggers
  const [isAnimating, setIsAnimating] = useState(false);

  /**
   * Handle click on "Explore" button.
   * Starts the video playback at 3x speed and sets the animation state to true.
   */
  const handleClick = () => {
    if (isAnimating) return;          // Prevent multiple clicks while animating
    setIsAnimating(true);             // Trigger animation

    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // Speed up video
      videoRef.current.play();           // Start playback
    }
  };

  /**
   * Run GSAP animation when `isAnimating` becomes true.
   * This animates the button, frame image, and page container.
   */
  useGSAP(() => {
    if (!isAnimating) return;

    const tl = gsap.timeline();

    tl.to(buttonRef.current, { 
      opacity: 0, 
      duration: 1.5 
    }, 0) // Fade out the button

    .to(frameRef.current, { 
      scale: 6, 
      opacity: 0, 
      duration: 2.5 
    }, 0) // Zoom and fade out the frame image

    .to(pageRef.current, {
      scale: 2,
      opacity: 0,
      zIndex: -1,
      duration: 0.35,
      onStart: () => {
        setIsRendered(true); // Inform parent to render main content
      },
    }); // Animate the entire overlay out
  }, [isAnimating]);

  /**
   * On initial mount, pause the background video so it doesn't auto-play.
   */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <>
      <div
        ref={pageRef}
        className="overlay relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden z-10"
      >
        {/* Fullscreen background video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={"/bg.mp4"}
          muted
          playsInline
          onLoadedMetadata={() => {
            // Start a little after the beginning for cinematic effect
            if (videoRef.current) {
              videoRef.current.currentTime = 0.3;
            }
          }}
        />

        <div className="w-full h-full relative flex items-center justify-center px-4">
          {/* Decorative frame image */}
          <Image
            ref={frameRef}
            src={frameImage}
            alt="Frame"
            className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          />

          {/* Explore Button */}
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
    </>
  );
};

export default Overlay;
