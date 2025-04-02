"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SpaRoom from "../../public/SpaRoom.png";
// import WaterSplash2 from "../../public/waterSplash2.png"

const Spa = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // Play when visible
          } else {
            video.pause(); // Pause when not visible
          }
        });
      },
      { threshold: 0.5 } // Video should be 50% visible to trigger play/pause
    );

    observer.observe(video);
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section className="w-full min-h-screen Spa px-6 lg:px-0 flex flex-col lg:block">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[1843px] items-center justify-center gap-12 lg:gap-[260px] ">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-md lg:max-w-none">
          <h3 className="font-inter font-light text-lg lg:text-[16px] tracking-wider text-white uppercase pt-20 lg:pt-0">
            Our Spa
          </h3>
          <p className="font-inter font-normal text-lg lg:text-[16px] leading-relaxed lg:leading-[25px] text-white max-w-sm lg:w-[312px]">
            It&apos;s not selfish to love yourself, take care of yourself, and
            to make your happiness a priority. It&apos;s necessary.
          </p>
          <button
            type="button"
            className="w-[170px] h-[50px] rounded-[25px] border-2 border-white text-white uppercase"
          >
            Explore
          </button>
        </div>
        {/* Right Video */}
        <div className="relative">
          <video
            ref={videoRef}
            width={597}
            height={672}
            className="w-[597px] h-[672px] lg:-mt-[550px] "
            loop
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Image
            src={WaterSplash2}
            alt="Water splash"
            width={1024}
            height={1024}
            className="w-[1024px] h-[1024px]  absolute -top-[450px] "
          /> */}
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[140px] mt-16 lg:-mt-[440px] pb-20 lg:pb-[196px]">
        {/* Quote */}
        <p className="font-cormorant font-semibold text-2xl lg:text-[48px] leading-tight lg:leading-[65px] capitalize text-white max-w-md lg:w-[341px] text-center lg:text-left">
          “Relaxation is a stepping stone to tranquility.”
        </p>
        {/* Image */}
        <Image
          src={SpaRoom}
          alt="Sauna"
          width={391}
          height={564}
          className="max-w-full h-auto"
        />
        {/* Right Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-md lg:max-w-none lg:ml-[140px] lg:mt-[220px]">
          <h3 className="font-inter font-light text-lg lg:text-[16px] tracking-wider text-white uppercase">
            Sauna Room
          </h3>
          <p className="font-inter font-normal text-lg lg:text-[16px] leading-relaxed lg:leading-[25px] text-white max-w-sm lg:w-[312px]">
            Calm your mind and balance your body in our private treatment rooms
            overlooking the seafront.
          </p>
          <button
            type="button"
            className="w-[170px] h-[50px] border-b-2 text-white uppercase"
          >
            Book Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spa;
