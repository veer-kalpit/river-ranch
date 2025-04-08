"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";




const Home = ({ isRendered, onRenderComplete, showNavbar }) => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const headingsContainerRef = useRef(null);
  const bookButtonRef = useRef(null);
  const bookingSectionRef = useRef(null);
  const birdRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isRendered) return; // Wait until Overlay signals to render

    // Try playing the background video
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video play error:", e));
    }

    // Set initial animation states
    gsap.set(headingsContainerRef.current, { opacity: 0 });
    gsap.set([headingRef1.current, headingRef2.current, headingRef3.current], {
      opacity: 0,
      x: -100,
    });
    gsap.set(bookButtonRef.current, { opacity: 0, y: 50 });
    gsap.set(bookingSectionRef.current, { opacity: 0, y: 100 });
    gsap.set(birdRef.current, { x: "110vw", opacity: 0, display: "block" });

    // Text animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(headingsContainerRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
    })
      .to(headingRef1.current, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        headingRef2.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        headingRef3.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        bookButtonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        bookingSectionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .add(() => {
        // Notify parent when all animations finish
        if (onRenderComplete) onRenderComplete();
      });

    // Flying bird animation
    const birdTl = gsap.timeline({ delay: 2 });

    birdTl
      .to(birdRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      .to(birdRef.current, {
        x: "-100vw",
        duration: 40,
        ease: "none",
      });

    return () => {
      tl.kill();
      birdTl.kill();
    };
  }, [isRendered, onRenderComplete]);

  return (
    <div
      className="h-screen w-full relative"
      style={{ backgroundColor: "black" }}
    >
      {/* Background Overlay */}
      <div className="h-20 z-10 absolute w-full bg-gradient-to-b from-[#1F7580] to-transparent top-0 left-0"></div>

      {/* Background Video */}
      <video
        className="absolute w-screen h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        style={{
          willChange: "auto",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      {showNavbar && <Navbar />}

      {/* Bird GIF */}
      <img
        ref={birdRef}
        className="absolute size-20 sm:size-24 md:size-32 lg:size-40 sm:block hidden z-10"
        style={{ top: "10%", opacity: 0, visibility: "visible" }}
        src="https://i.gifer.com/2vDc.gif"
        alt="Flying birds"
      />

      {/* Text Headings */}
      <div
        ref={headingsContainerRef}
        className="absolute inset-10  lg:top-40 flex flex-col uppercase -gap-[22px] justify-center z-10 px-4 lg:pl-[254px]"
      >

        <h3
          ref={headingRef1}
          className="text-center lg:text-left text-white font-medium font-inter"
        >
          Welcome to River Ranch
        </h3>
        <h1
          ref={headingRef2}
          className="text-center lg:text-left text-[40px] lg:text-[150px] text-white font-semibold font-cormorant"
        >
          Escape
        </h1>
        <h1
          ref={headingRef3}
          className="text-center text-[40px] lg:text-[150px] text-white font-semibold font-cormorant "
        >
          Into Nature
        </h1>

        <div className="mt-8 flex justify-center md:hidden">
          <button
            ref={bookButtonRef}
            className="bg-white text-[#3A665F] border-2 border-white hover:bg-transparent
                      hover:text-white transition-colors duration-300 uppercase rounded-full 
                      px-8 py-3 text-lg tracking-wider font-semibold shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
