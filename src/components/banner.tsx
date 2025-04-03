"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BannerImg from "../../public/yuliya.png";
import WaterSplash from "../../public/watersplash.png";
import FacilityCard from "./facilityCard";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate clip-path value for top-to-bottom reveal
  const clipHeight = Math.min(100, scrollY / 5); // Adjust speed of reveal

  return (
    <section>
      <div className="flex flex-col lg:flex-row  justify-center p-10 gap-12 lg:gap-[115px] pt-10 lg:pt-[160px] h-auto lg:h-screen">
        <div className="flex flex-col text-left max-w-lg">
          <h1 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#205781] capitalize">
            A Haven of Tranquility
          </h1>
          <p className="mt-4 font-inter font-normal text-base md:text-lg leading-relaxed text-gray-700">
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
        <div className="flex lg:relative">
          <Image
            src={BannerImg}
            alt="Swimming Pool"
            width={549}
            height={688}
            className="lg:w-[549px] lg:h-[688px] w-[331px] h-[468px] mt-6 lg:mt-[42px]"
          />
          <motion.div
            className="absolute -z-10 -top-[190px] -right-[300px] hidden lg:block"
            style={{
              clipPath: `polygon(0% 0%, 100% 0%, 100% ${clipHeight}%, 0% ${clipHeight}%)`,
              transition: "clip-path 0.3s ease-out",
            }}
          >
            <Image
              src={WaterSplash}
              alt="Water splash"
              width={721}
              height={919}
            />
          </motion.div>
        </div>
      </div>
      <FacilityCard />
    </section>
  );
};

export default Banner;
