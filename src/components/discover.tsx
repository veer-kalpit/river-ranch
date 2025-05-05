"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// image imports
import Yoga1 from "../../public/yoga.jpeg";
import Yoga2 from "../../public/Yoga2.jpeg";
import Frame from "../../public/frame.png";
import Splash from "../../public/splash.png";

import Sunset from "../../public/sunset.jpeg";
import YogaGallery from "./YogaGallery";
import frameImage from "../assets/images/frame.png";

gsap.registerPlugin(ScrollTrigger);

interface DiscoverProps {
  scrollToFooter: () => void;
}

const Discover: React.FC<DiscoverProps> = ({ scrollToFooter }) => {
  // Refs for animated elements
  const splashRef = useRef(null);
  const splash_2_Ref = useRef(null);
  const splash_4_Ref = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    // Splash animation (zoom + height increase)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: splashRef.current,
          start: "top 65%", // triggers when splash enters 70% of viewport
        },
      })
      .to(splashRef.current, {
        scale: 1.3,
        duration: 0.6,
        ease: "power3.out",
      });

    // Splash_2 animation (slide in from right)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: splash_2_Ref.current,
          start: "top 85%",
        },
      })
      .to(splash_2_Ref.current, {
        scale: 1,
        right: 0,
        duration: 0.6,
        ease: "power3.out",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: splash_4_Ref.current,
          start: "top 70%", // triggers when splash enters 70% of viewport
        },
      })
      .to(splash_4_Ref.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
  }, []);

  return (
    <div
      id="yoga"
      className="block w-screen h-fit bg-white z-50 relative pt-28"
    >
      {/* yoga gallery for mobile  */}
      <div className="w-full lg:hidden z-50 pb-5">
        <YogaGallery />
      </div>

      <div className="w-full h-fit flex justify-center items-center relative mt-10 lg:mt-0">
        {/* frame video  */}
        <div className="w-fit h-fit flex flex-col justify-center items-center relative overflow-hidden lg:mr-80">
          <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] mb-6 tracking-[3.5px]">
            EVENT DESTINATION
          </h6>
          <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9 -mb-5">
            Celebrations <br />
            and Ceremonies
          </h1>
          <div className="w-[400px] h-[600px] relative overflow-hidden">
            <Image
              src={frameImage}
              alt="Frame"
              className="w-full h-full object-cover relative z-10"
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full scale-[0.55] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover z-0"
              src="/celebrating_love.mp4"
            ></video>
          </div>

          <p className="font-inter w-fit max-w-[500px] text-center text-[#333333] text-[16px] leading-[25px] px-10 -mt-5">
            Embrace the golden glow of tradition at River Ranch. Let the
            tranquil riverside ambiance set the stage for laughter, rituals, and
            vibrant celebrations.
          </p>

          <button
            // onClick={scrollToFooter}
            className="font-inter border border-[#3333334D] text-xs px-8 py-3 rounded-full cursor-pointer mt-8"
          >
            BOOK NOW
          </button>
        </div>

        <div
          ref={splashRef}
          className=" hidden lg:block splashItem w-[550px] h-[600px] scale-0 overflow-hidden absolute top-0 right-[-10%]"
        >
          <Image className="w-full h-full" src={Splash} alt="Splash" />
        </div>
      </div>

      {/* Section 1: Yoga and Healing */}
      <div className="relative w-full h-auto px-10 space-y-28">
        <div className="w-full h-fit hidden lg:flex justify-center items-end gap-40 ">
          <div className="w-fit h-fit ">
            <h6 className="font-inter font-extralight text-[#333333] text-start text-[14px] mb-6 tracking-[3.5px]">
              SPIRITUAL EXPERIENCES
            </h6>
            <h1 className="font-cormorant text-start text-[#205781] text-3xl sm:text-4xl leading-9">
              Yoga, Sound Healing <br /> And Meditation
            </h1>
          </div>
          <div className="w-full max-w-[250px] h-[350px] relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/garden_video.mp4"
            ></video>
          </div>
        </div>

        <div className="w-full hidden lg:flex justify-center items-end gap-10 lg:gap-64 xl:gap-80 ">
          <div className="flex flex-col justify-center items-center gap-14">
            <div className="hidden md:flex w-[250px] h-[350px] relative justify-center items-center">
              <Image
                className="w-full h-[80%] object-cover shadow-lg relative z-10 "
                src={Yoga1}
                alt="ware house"
              />
              <Image
                className="w-full h-full object-cover z-50 scale-[1.4] absolute top-0 left-0"
                src={Frame}
                alt="Frame"
              />
            </div>
            <div className="w-fit h-fit space-y-8">
              <p className="font-inter w-[230px] text-[#333333] text-xs leading-[18px]">
                A Peaceful Retreat Beside The Mysore Bird Sanctuary, Where Calm
                Waters, Lush Greenery, And Open Skies Offer A Deep Connection To
                Nature’s Rhythm.
              </p>
              <button
                type="button"
                onClick={scrollToFooter}
                className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left"
              >
                DISCOVER
                <hr className="w-full mt-0.5" />
              </button>
            </div>
          </div>

          <div className="w-[250px] h-[350px] relative mb-5">
            <Image
              className="w-[70%] h-[70%] mt-14 ml-10 object-cover shadow-lg relative z-10"
              src={Yoga2}
              alt="ware house"
            />

            <Image
              className="w-full h-full object-cover z-50 scale-[1.4] absolute top-0 left-0"
              src={Frame}
              alt="Frame"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full h-auto pt-20 px-10 mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] mb-6 tracking-[3.5px]">
            SPIRITUALITY AND HEALING
          </h6>
          <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9">
            Yoga, Sound Healing <br /> And Meditation
          </h1>
          <div className="w-full max-w-[300px] aspect-square flex justify-center items-center gap-10 relative rounded-4xl overflow-hidden mt-8">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Yoga2}
              alt="ware house"
            />
          </div>

          <p className="font-inter w-fit max-w-[400px] text-center text-[#333333] text-[16px] leading-[25px] px-10 my-8">
            Awaken your spirit at River Ranch. Let the tranquil riverside
            setting guide your breath, movement, and inner harmony.
          </p>
        </div>
      </div>

      {/* Section 2: Nature Sanctuary */}
      <div className="w-full h-fit overflow-hidden ">
        <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] tracking-[3.5px] lg:hidden pt-16 mb-8">
          MOMENTS AND MEMORIES
        </h6>
        <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9 lg:hidden mb-10 lg:mb-0">
          Parties And <br />
          Get-Togethers
        </h1>

        <div className="w-full flex justify-center items-end gap-40 relative">
          {/* Left: Large image + text */}
          <div className="w-fit flex flex-col justify-center items-center">
            <video
              loop
              muted
              autoPlay
              preload="auto"
              className=" w-[300px] h-[400px] object-cover relative z-10"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="w-fit h-fit px-10 lg:px-5">
              <p className="font-inter lg:w-[250px] text-[#333333] text-[16px] leading-[25px] text-center lg:text-left mt-16 ">
                Celebrate life’s best moments at River Ranch, where lively
                parties and relaxed get-togethers come alive by the riverside.
                Dance under the stars, swap stories by the water, and make
                memories that’ll stay with you forever.
              </p>
              <button
                type="button"
                onClick={scrollToFooter}
                className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left hidden lg:block mt-8"
              >
                DISCOVER
                <hr className="w-full mt-0.5" />
              </button>
            </div>
          </div>

          {/* Right: Text + image */}
          <div className="w-fit hidden lg:block h-fit space-y-48 relative lg:mt-20">
            <div className="w-fit h-fit">
              <h1 className="font-cormorant text-[#205781] text-right text-3xl sm:text-4xl leading-9  mb-6">
                The Perfect Destination for <br /> Parties, Get- Togethers, and{" "}
                <br />
                Unforgettable Celebrations
              </h1>
              <h6 className="font-inter font-extralight text-[#333333] text-right text-[14px] tracking-[3.5px]">
                PARTIES AND GET TOGETHERS
              </h6>
            </div>
            <Image
              className="w-[250px] h-[400px] rounded-full object-cover shadow-lg ml-auto"
              src={Sunset}
              alt="Sunset"
            />
          </div>

          {/* Splash_2: Animated on scroll */}
        </div>
      </div>
    </div>
  );
};

export default Discover;
