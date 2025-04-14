"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import WaterSplash from "../../public/WaterSpllash.png";
import WaterSplash_2 from "../../public/splash_5.png";
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
        { scale: 0, y: "-500px" },
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
        { y: "100%", scale: 0 },
        {
          y: "0%",
          scale: 1,
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
      <Image
        ref={waterSlashRef}
        src={WaterSplash}
        alt="Water splash"
        className=" w-[400px] h-fit absolute top-[-100px] right-[-150px] object-cover z-0 lg:hidden"
      />
      <div className="w-full h-fit flex flex-col lg:flex-row py-8 lg:py-24 px-8 lg:px-24 gap-10 justify-center items-center ">
        {/* TEXT COLUMN */}
        <div ref={textRef} className="w-full h-fit flex flex-col text-left ">
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
        </div>

        {/* VIDEO + SPLASH IMAGE */}
        <div className="w-full lg:w-fit h-fit flex ">
          <video
            ref={videoRef}
            loop
            muted
            autoPlay
            preload="auto"
            className="w-full aspect-video max-w-[800px] relative z-10"
          >
            <source src="/Haldi.mp4" type="video/mp4" />
          </video>

          <div
            ref={splashRef}
            className="w-[800px] h-[650px] absolute object-cover top-0 right-[-100px] z-0 hidden lg:block"
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
      <Image
        ref={splashRef_2}
        src={WaterSplash_2}
        alt="Water splash"
        className=" w-[400px] sm:w-[600px]  h-fit absolute bottom-[-80px] sm:bottom-[-150px] right-[-50px] md:hidden object-cover"
      />
    </div>
  );
};

export default Banner;
