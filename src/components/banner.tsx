"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import BannerImg from "../../public/yuliya.png";
import WaterSplash from "../../public/WaterSpllash.png";
import FacilityCard from "./facilityCard";
import "aos/dist/aos.css";
import AOS from "aos";

const Banner = () => {
  const splashRef = useRef(null);
  const isInView = useInView(splashRef, { margin: "-10px" });
  const controls = useAnimation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        scale: [0.8, 1.1, 1],
        rotate: [0, 2, -2, 0],
        filter: "blur(0px)",
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        y: -200,
        opacity: 0,
        scale: 0.8,
        filter: "blur(8px)",
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row justify-center p-10 gap-12 lg:gap-[115px] pt-10 lg:pb-[800px] lg:pt-[160px] h-auto lg:h-screen">
        <div data-aos="fade-right" className="flex flex-col text-left max-w-lg">
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

        <div className="flex lg:relative">
          <Image
            src={BannerImg}
            alt="Swimming Pool"
            width={549}
            height={688}
            className="lg:w-[549px] lg:h-[688px] w-[331px] h-[468px] mt-6 lg:mt-[42px] z-10"
          />

          <motion.div
            ref={splashRef}
            className="absolute -top-[188px] -right-[300px] hidden lg:block w-[1000px] h-[1000px] rounded-full overflow-hidden"
            initial={{
              y: -200,
              opacity: 0,
              scale: 0.8,
              filter: "blur(8px)",
            }}
            animate={controls}
          >
            <Image
              src={WaterSplash}
              alt="Water splash"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <FacilityCard />
    </section>
  );
};

export default Banner;
