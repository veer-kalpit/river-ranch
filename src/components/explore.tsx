"use client";

import React, { useRef } from "react";
import Image from "next/image";

// Image sources
import Bg from "../../public/explore_bg.png";
import Beach from "../../public/beach.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const pageRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    if (!pageRef.current) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 25%",
        },
      })
      .fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
  }, [pageRef.current]);
  return (
    <div
      ref={pageRef}
      className="w-screen h-screen relative overflow-hidden z-[50]"
    >
      <Image
        className="w-full h-full object-cover"
        src={Bg}
        alt="explore_background"
      />

      <div className="absolute top-[80%] left-[8%] sm:left-[15%] md:left-[20%] md:top-[20%] ">
        <h6 className="font-inter font-extralight text-[#F5F8FA]/75 text-[10px] mb-3 tracking-[3.5px]">
          HIGHLIGHTS
        </h6>
        <h1 className="font-cormorant text-[#F5F8FA] text-4xl md:text-5xl leading-8 md:leading-11">
          Sunrise And Sunset <br /> Right From Your Bed
        </h1>
      </div>

      <div className=" w-screen h-fit hidden md:flex absolute top-[100%] -translate-y-[100%]">
        <div
          ref={cardRef}
          className="w-[85%] sm:w-[60%] lg:w-[50%] h-[350px] -mb-10 mt-10 bg-white"
        >
          <div className="w-full h-full relative flex justify-center items-center">
            <div className=" w-[110px] h-[160px] md:w-[130px] md:h-[200px] absolute right-[8%] md:right-[12%] top-[-25%] -translate-y-[-25%] md:top-[-40%] md:-translate-y-[-40%] bg-zinc-500 overflow-hidden shadow-2xl rounded-full">
              <Image
                className="w-[120%] h-[120%] -mt-2.5 object-cover"
                src={Beach}
                alt="beach"
              />
            </div>

            <div className="w-fit h-fit sm:px-10 mr-32 sm:mr-28 md:mr-28 lg:px-0 xl:mr-0">
              <h1 className="font-cormorant text-[#205781] text-start text-3xl sm:text-4xl">
                Lush
                <br />
                Living
              </h1>

              <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px] mt-4">
                Lush Living Is An Immersive Experience That Blends Luxury With
                Nature, Offering Vibrant Greenery, Serene Spaces, And
                Unparalleled Comfort. It Embodies A Lifestyle Where Elegance
                Meets Tranquility, Creating A Harmonious Retreat To Rejuvenate
                The Mind, Body, And Soul.
              </p>

              <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left mt-4">
                EXPLORE
                <hr className="w-full mt-0.5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:flex justify-center items-center gap-5">
          <h1 className="font-inter text-white">01</h1>
          <hr className="w-[120px] border-white" />
          <h1 className="font-inter text-white">03</h1>
        </div>
      </div>
    </div>
  );
};

export default Explore;
