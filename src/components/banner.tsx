"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import WaterSplash from "../../public/splash_5.png";
import WaterSplash_2 from "../../public/WaterSpllash.png";
import FacilityCard from "./facilityCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const splashRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const waterSlashRef = useRef(null);
  const pageRef = useRef(null);
  const splashRef_2 = useRef(null);

  useGSAP(() => {
    if (!splashRef.current || !videoRef.current || !textRef.current) return;

    // Text animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      })
      .fromTo(
        textRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 60%",
        },
      })
      .fromTo(
        waterSlashRef.current,
        { scale: 0, y: "-300px" },
        {
          scale: 1,
          y: "0px",
          duration: 1,
          ease: "power3.out",
        }
      );

    // Video animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 70%",
        },
      })
      .fromTo(
        videoRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

    // Splash animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: splashRef.current,
          start: "top 60%",
        },
      })
      .fromTo(
        splashRef.current,
        {
          y: -200,
          opacity: 0,
          scale: 0.8,
          rotate: -5,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: splashRef_2.current,
          start: "top 100%",
        },
      })
      .fromTo(
        splashRef_2.current,
        { y: "300px", scale: 0 },
        {
          y: "0px",
          scale: 1.3,
          duration: 1,
          ease: "power3.out",
        }
      );
  }, []);

  return (
    <div
      ref={pageRef}
      className="w-full h-fit bg-white z-[50] relative overflow-hidden"
    >
      <div
        ref={waterSlashRef}
        className="w-[500px] h-fit absolute top-[-450px] right-[100px]  z-0 lg:hidden"
      >
        <Image
          src={WaterSplash_2}
          alt="Water splash"
          className=" w-full h-fit object-cover rotate-90 scale-y-[1.5]"
        />
      </div>
      <div className="w-full h-fit flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-32 px-5 lg:px-10 pt-32 pb-16 lg:py-20 ">
        {/* TEXT */}
        <div ref={textRef} className="w-fit lg:w-fit h-fit text-left">
          <h1 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#205781] capitalize">
            A Haven of Tranquility
          </h1>
          <p className=" w-full max-w-[450px] font-inter font-normal text-base md:text-lg leading-relaxed text-[#333333] mt-5">
            River Ranch is a scenic resort and event destination, perfect for
            relaxing getaways, weddings, and celebrations. Surrounded by lush
            landscapes and open skies, it offers the ideal backdrop for
            unforgettable experiences, combining comfort, beauty, and charm.
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-fit lg:w-fit h-fit flex ">
          <video
            ref={videoRef}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="w-full max-w-[450px] h-[550px] object-cover relative z-10"
          >
            <source src="/Haldi.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* FACILITY SECTION */}
      <FacilityCard />
      <Image
        ref={splashRef}
        src={WaterSplash_2}
        alt="Water splash"
        className="w-[800px] h-fit absolute top-[-200px] right-[-100px] hidden lg:block object-cover z-0"
      />

      <Image
        ref={splashRef_2}
        src={WaterSplash}
        alt="Water splash"
        className="w-[600px] h-fit absolute rotate-[200deg] bottom-[50px] right-0 md:hidden object-cover z-0"
      />
    </div>
  );
};

export default Banner;
