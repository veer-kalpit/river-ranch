"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import AOS from "aos";
import SpaRoom from "../../public/bottles.png";
import WaterSplash2 from "../../public/WaterSplashSpa.png";

const Spa = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      controls.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });
      hasAnimated.current = true;
    }
  }, [inView, controls]);

  return (
    <section
      id="spa"
      className="bg-[#205781] lg:flex flex-col gap-[60px] md:gap-[140px] pb-[120px] md:py-[230px] hidden z-[50] relative"
    >
      {/* First Section */}
      <div className="flex justify-center items-center">
        {/* Left Content */}
        <div
          data-aos="fade-right"
          className="w-full max-w-[300px] flex gap-6 md:gap-10 flex-col text-center md:text-left"
        >
          <h3 className="font-inter font-light text-sm md:text-lg tracking-wider text-white uppercase pt-10 md:pt-0 ">
            event DESTINATION
          </h3>
          <p className="font-inter font-normal text-sm md:text-lg leading-relaxed md:leading-[25px] text-white">
            Weddings, sangeets, parties, birthdays, and corporate retreats come
            alive in this unique event destination—where every gathering becomes
            a celebration of life, love, and connection, set against nature’s
            perfect backdrop.
          </p>
          <button
            type="button"
            onClick={() => {
              const phoneNumber = "919686985795";
              const message = "Hi, I want to book an event in River Ranch";
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
            className="w-[140px] md:w-[170px] h-[40px] md:h-[50px] rounded-[20px] md:rounded-[25px] border-2 border-white text-white uppercase self-center lg:self-start hover:bg-white hover:text-[#205781] transition-all duration-300"
          >
            Explore
          </button>
        </div>

        {/* Right Video */}
        <div className="relative flex justify-center items-center">
          {/* Video */}
          <video
            ref={videoRef}
            width={300}
            height={350}
            className="w-[300px] h-[350px] md:w-[597px] md:h-[672px] z-20"
            loop
            muted
            autoPlay
            preload="auto"
            data-aos="zoom-in-right"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Animated Water Splash */}
          <motion.div
            ref={ref}
            initial={{ y: -400, scale: 0, opacity: 0 }}
            animate={controls}
            className="absolute -top-[260px] -right-[200px] w-[500px] h-[700px] z-10"
          >
            <Image
              src={WaterSplash2}
              alt="Water splash"
              width={2244}
              height={2244}
              className="w-[2244px] h-[2244px] md:w-[2244px] md:h-[1880px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Second Section */}
      <div
        data-aos="fade-right"
        className="flex  flex-col md:flex-row items-center md:justify-center gap-[50px] md:gap-[80px]"
      >
        <p className="font-cormorant font-semibold text-xl md:text-[48px] leading-tight md:leading-[65px] capitalize text-white max-w-xs md:w-[341px] text-center md:text-left mt-[50px] md:mt-[116px]">
          Dine by the river, where nature flows & flavors thrive.
        </p>
        <Image
          src={SpaRoom}
          alt="Sauna"
          width={391}
          height={564}
          priority
          className="w-[250px] h-[350px] lg:w-[391px] lg:h-[564px] rounded-[196px]"
        />
        <div
          data-aos="fade-left"
          className="w-[250px] md:w-[312px] flex flex-col gap-6 md:gap-10 mt-[100px] md:mt-[300px] justify-center text-center lg:text-left"
        >
          <h3 className="font-inter font-light text-sm md:text-[16px] tracking-wider text-white uppercase">
            river side dining
          </h3>
          <p className="font-inter font-normal text-sm md:text-[16px] leading-relaxed md:leading-[25px] capitalize text-white">
            Riverside dining combines delicious food with the calming charm of
            flowing water, creating a serene and delightful experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Spa;
