"use client";

import React, { useEffect, useRef, useState } from "react";
import FrameImage from "../../public/frame.png";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Overlay = () => {
  const router = useRouter();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    if (headingRef.current) {
      headingRef.current.style.opacity = "1";
      headingRef.current.style.visibility = "visible";
      headingRef.current.style.display = "block";
      headingRef.current.style.zIndex = "999";

      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.style.opacity = "1";
        }
      }, 100);
    }
  }, []);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
      videoRef.current.play();
    }

    gsap.to(headingRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.in",
    });

    gsap.to(frameRef.current, {
      duration: 2,
      opacity: 0,
      scale: 9,
      ease: "power2.inOut",
      onComplete: () => {
        router.push("/home");
      },
    });
  };

  return (
    <div className="overlay flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Video Background */}
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
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-full flex flex-col items-center mt-37 z-[999]">
        <h1
          ref={headingRef}
          className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
          uppercase tracking-wider font-semibold"
          style={{
            fontFamily: "'Cormorant Garamond', serif, system-ui",
          }}
        >
          River Ranch
        </h1>
      </div>

      <div className="frameImg relative flex items-center justify-center w-full px-4">
        <Image
          ref={frameRef}
          src={FrameImage}
          alt="Frame"
          style={{
            width: "90%",
            maxWidth: "600px",
            display: "block",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            willChange: "transform",
            transformOrigin: "center center",
          }}
          className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
        />

        {!isAnimating && (
          <button
            className="absolute left-1/2 top-1/2 transform uppercase -translate-x-1/2 -translate-y-1/2 
            bg-[#988579] text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
            text-sm sm:text-base md:text-lg 
            rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
