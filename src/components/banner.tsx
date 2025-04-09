"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import WaterSplash from "../../public/WaterSpllash.png";
import FacilityCard from "./facilityCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const splashRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

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
  }, []);

  return (
    <section className="bg-white z-[50] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center p-10 gap-12 lg:gap-[115px] pt-10 lg:pb-[800px] lg:pt-[160px] h-auto lg:h-screen">
        {/* TEXT COLUMN */}
        <div ref={textRef} className="flex flex-col text-left max-w-lg">
          <h1 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#205781] capitalize">
            A Haven of Tranquility
          </h1>
          <p className="mt-4 font-inter font-normal text-base md:text-lg leading-relaxed text-[#333333] lg:w-[361px] lg:mt-10">
            River Ranch, once a family farm, is now a sanctuary for reconnecting
            with nature and escaping city life. Committed to sustainability, we
            practice rainwater harvesting and organic farming to minimize our
            environmental impact. Pets are always welcome, because vacations are
            better with the whole family—including four-legged members!
          </p>
          <button
            type="button"
            className="border-b-2 pb-3 mt-4 font-inter font-normal text-base uppercase text-[#205781] border-[#205781] w-fit mx-auto lg:mx-0"
          >
            See Rooms
          </button>
        </div>

        {/* VIDEO + SPLASH IMAGE */}
        <div className="flex lg:relative">
          <video
            ref={videoRef}
            loop
            muted
            autoPlay
            preload="auto"
            width={549}
            height={688}
            className="lg:w-[549px] lg:h-[688px] w-[331px] h-[468px] mt-6 lg:mt-[42px] z-10"
          >
            <source src="/Bannervid.mp4" type="video/mp4" />
          </video>

          <div
            ref={splashRef}
            className="absolute -top-[188px] -right-[300px] hidden lg:block w-[1000px] h-[1000px] rounded-full overflow-hidden"
          >
            <Image
              src={WaterSplash}
              alt="Water splash"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* FACILITY SECTION */}
      <FacilityCard />
    </section>
  );
};

export default Banner;
