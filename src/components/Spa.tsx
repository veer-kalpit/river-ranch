"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import SpaRoom from "../../public/SpaRoom.png";
import WaterSplash2 from "../../public/waterSplash2.png";

const Spa = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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

  return (
    <section className="bg-[#205781] flex flex-col gap-[60px] md:gap-[140px] pb-[100px] md:py-[215px]">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-[50px] md:gap-[216px]">
        {/* Left Content */}
        <div className="w-[250px] md:w-[312px] flex gap-6 md:gap-10 flex-col mt-[100px] md:mt-[375px] text-center md:text-left">
          <h3 className="font-inter font-light text-sm md:text-lg tracking-wider text-white uppercase pt-10 md:pt-0">
            Our Spa
          </h3>
          <p className="font-inter font-normal text-sm md:text-lg leading-relaxed md:leading-[25px] text-white">
            It&apos;s not selfish to love yourself, take care of yourself, and
            to make your happiness a priority. It&apos;s necessary.
          </p>
          <button
            type="button"
            className="w-[140px] md:w-[170px] h-[40px] md:h-[50px] rounded-[20px] md:rounded-[25px] border-2 border-white text-white uppercase self-center lg:self-start"
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
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 w-[500px] h-[500px] md:w-[1024px] md:h-[1024px] z-10">
            <Image
              src={WaterSplash2}
              alt="Water splash"
              width={500}
              height={500}
              className="w-[500px] h-[450px] md:w-[1024px] md:h-[900px]"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-[50px] md:gap-[140px]">
        <p className="font-cormorant font-semibold text-xl md:text-[48px] leading-tight md:leading-[65px] capitalize text-white max-w-xs md:w-[341px] text-center md:text-left mt-[50px] md:mt-[116px]">
          “Relaxation is a stepping stone to tranquility.”
        </p>
        <Image
          src={SpaRoom}
          alt="Sauna"
          width={250}
          height={350}
          className="w-[250px] h-[350px] md:w-[391px] md:h-[564px]"
        />
        <div className="w-[250px] md:w-[312px] flex flex-col gap-6 md:gap-10 mt-[100px] md:mt-[300px] justify-center text-center lg:text-left">
          <h3 className="font-inter font-light text-sm md:text-lg tracking-wider text-white uppercase">
            Sauna Room
          </h3>
          <p className="font-inter font-normal text-sm md:text-lg leading-relaxed md:leading-[25px] text-white">
            Calm your mind and balance your body in our private treatment rooms
            overlooking the seafront.
          </p>
          <button
            type="button"
            className="w-[140px] md:w-[170px] h-[40px] md:h-[50px] border-b-2 pb-2 text-white uppercase  font-inter font-normal text-sm  leading-relaxed md:leading-[25px] self-center lg:self-start "
          >
            Book Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spa;
