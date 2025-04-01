"use client";

import React from "react";
import Image from "next/image";

// Image sources
import Bg from "../../public/explore_bg.png";
import Beach from "../../public/beach.png";

const Explore = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        src={Bg}
        alt="explore_background"
      />

      {/* hero text 1  */}
      <div className="absolute top-[20%] left-[5%] sm:left-[15%] md:left-[20%]">
        <h6 className="font-inter font-extralight text-[#F5F8FA]/75 text-[10px] mb-3 tracking-[3.5px]">
          HIGHLIGHTS
        </h6>
        <h1 className="font-cormorant text-[#F5F8FA] text-4xl md:text-5xl leading-8 md:leading-11">
          Sunrise And Sunset <br /> Right From Your Bed
        </h1>
      </div>

      <div className="w-screen h-fit flex absolute top-[100%] -translate-y-[100%]">
        <div className="w-[85%] sm:w-[60%] lg:w-[50%] h-[350px] -mb-10 mt-10 bg-white">
          <div className="w-full h-full relative flex justify-center items-center">
            {/* Beach image  */}
            <div className=" w-[110px] h-[160px] md:w-[130px] md:h-[200px] absolute right-[8%] md:right-[12%] top-[-25%] -translate-y-[-25%] md:top-[-40%] md:-translate-y-[-40%] bg-zinc-500 overflow-hidden shadow-2xl rounded-full">
              <Image
                className="w-[120%] h-[120%] -mt-2.5 object-cover"
                src={Beach}
                alt="beach"
              />
            </div>

            {/* Hero text 2  */}
            <div className="w-fit h-fit sm:px-10 mr-32 sm:mr-28 md:mr-28 lg:px-0 xl:mr-0">
              <div className="w-fit flex justify-center items-center gap-3 md:gap-4">
                <hr className="w-[45px] border-[#333333]" />
                <h1 className="font-cormorant text-[#205781] text-3xl sm:text-4xl">
                  Beach Or
                </h1>
              </div>

              <h1 className="font-cormorant text-[#205781] text-3xl sm:text-4xl -mt-1">
                Poolside?
              </h1>

              <p className="font-inter w-[135px] text-[#333333] text-xs leading-[18px] mt-8">
                Dare To Try Something New. Savour The Mediterranean And Feel The
                Sea Energy. What Do You Feel Like Doing?
              </p>

              <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left mt-8">
                EXPLORE
                <hr className="w-full mt-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* number line  */}
        <div className="hidden flex-1 sm:flex justify-center items-center gap-5">
          <h1 className="font-inter text-white">01</h1>
          <hr className="w-[120px] border-white" />
          <h1 className="font-inter text-white">03</h1>
        </div>
      </div>
    </div>
  );
};

export default Explore;
