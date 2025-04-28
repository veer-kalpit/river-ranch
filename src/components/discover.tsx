"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// image imports
import Yoga1 from "../../public/yoga.jpeg";
import Splash_1 from "../../public/splash_1.png";
import Yoga2 from "../../public/Yoga2.jpeg";
import Frame from "../../public/frame.png";
import Warehouse_2 from "../../public/ware_house_2.png";
import Warehouse_3 from "../../public/ware_house_3.jpeg";
import Splash from "../../public/splash.png";
import Splash_3 from "../../public/splash_3.png";
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
  const splash_1_Ref = useRef(null);
  const splash_2_Ref = useRef(null);
  const splash_3_Ref = useRef(null);
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

    // Splash_1 animation (scale up separately)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: splash_1_Ref.current,
          start: "top 80%",
        },
      })
      .to(splash_1_Ref.current, {
        scale: 1.2,
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
    <div id="yoga" className="block w-screen h-fit bg-white z-50 relative">
      <div className="w-full lg:hidden z-50 py-10">
        <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] mb-6 tracking-[3.5px]">
          EVENT DESTINATION
        </h6>
        <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9 mb-8">
          Events
        </h1>
        <YogaGallery />
      </div>

      <div className="w-full h-fit lg:py-20 lg:px-20">
        {/* frame video  */}
        <div className="w-fit h-fit flex flex-col justify-center items-center relative overflow-hidden mx-auto lg:mx-0">
          <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] mb-6 tracking-[3.5px]">
            WEDDING BY RIVER
          </h6>
          <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9">
            Celebrations <br />
            and Ceremonies
          </h1>
          <div className="w-[350px] h-[400px] relative overflow-hidden">
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

          <p className="font-inter w-fit max-w-[500px] text-center text-[#333333] text-xs leading-[18px] px-10">
            Embrace the golden glow of tradition at River Ranch. Let the
            tranquil riverside ambiance set the stage for laughter, rituals, and
            vibrant celebrations.
          </p>

          <button className="font-inter border border-[#3333334D] text-xs px-8 py-3 rounded-full cursor-pointer mt-2.5">
            EXPLORE
          </button>
        </div>

        <div
          ref={splashRef}
          className=" hidden lg:block splashItem w-[550px] h-[600px] scale-0 absolute top-[5%] right-0 overflow-hidden"
        >
          <Image className="w-full h-full" src={Splash} alt="Splash" />
        </div>
      </div>

      {/* Section 1: Yoga and Healing */}
      <div className="relative w-full h-auto px-10 lg:px-20 ">
        <div className="w-full h-fit hidden lg:flex justify-center items-end gap-56 mb-16">
          <div className="w-fit h-fit ">
            <h6 className="font-inter font-extralight text-[#333333] text-start text-[14px] mb-6 tracking-[3.5px]">
              YOGA AND HEALING EXPERIENCE
            </h6>
            <h1 className="font-cormorant text-start text-[#205781] text-3xl sm:text-4xl leading-9">
              Yoga, Sound Healing <br /> And Meditation
            </h1>
          </div>
          <div className="w-[200px] h-[250px] md:w-[230px] md:h-[320px] relative">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Warehouse_2}
              alt="beach"
            />
          </div>
        </div>

        <div className="w-full hidden lg:flex justify-center items-center gap-10 xl:gap-56">
          {/* left side  */}
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

            {/* Splash_1 overlay animation */}
            <div
              ref={splash_1_Ref}
              className="w-fit h-fit scale-0 absolute top-[86%] left-[-28%] z-0"
            >
              <Image
                className="w-full h-fit scale-x-[-1] -ml-1"
                src={Splash_1}
                alt="splash_1"
              />
            </div>
          </div>

          {/* right side  */}
          <div className="w-fit h-fit flex justify-center items-center gap-10 relative">
            <div className="w-fit h-fit space-y-8 ml-12">
              <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
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
            <div className="w-[250px] h-[350px] relative ">
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
      </div>

      <div className="lg:hidden w-full h-auto py-10 px-10 mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <h6 className="font-inter font-extralight text-[#333333] text-center text-[14px] mb-6 tracking-[3.5px]">
            SPRRITUALITY AND HEALING
          </h6>
          <h1 className="font-cormorant text-center text-[#205781] text-3xl sm:text-4xl leading-9">
            Yoga Sound <br />
            Healing And <br />
            Meditation
          </h1>
          <div className="w-full max-w-[300px] aspect-square flex justify-center items-center gap-10 relative rounded-2xl overflow-hidden mt-8">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Yoga2}
              alt="ware house"
            />
          </div>

          <p className="font-inter w-fit max-w-[400px] text-center text-[#333333] text-xs leading-[18px] px-10 my-8">
            Awaken your spirit at River Ranch. Let the tranquil riverside
            setting guide your breath, movement, and inner harmony.
          </p>
        </div>
      </div>

      {/* Section 2: Nature Sanctuary */}
      <div className="w-full hidden lg:flex flex-wrap justify-center items-center gap-20 py-10 lg:pt-30 relative md:gap-30 ">
        {/* Left: Large image + text */}
        <div className="w-fit h-fit space-y-8 px-5 sm:mr-auto md:ml-[5%] lg:px-0 lg:ml-0 lg:mr-0">
          <Image
            className="w-[600px] h-[250px] sm:h-[350px] object-cover shadow-lg relative z-10"
            src={Warehouse_3}
            alt="Warehouse_3"
          />

          <div className="w-fit h-fit space-y-8 ml-12">
            <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
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

        {/* Right: Text + image */}
        <div className="w-fit h-fit space-y-16 relative ml-auto mr-[5%] z-10 lg:ml-0 lg:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              NATURE SANCTUARY
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              A nature sanctuary, serene and lush, where peace flows through
              wild beauty.
            </h1>
          </div>
          <Image
            className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] rounded-full object-cover shadow-lg z-10 ml-auto mr-[15%] lg:ml-0 lg:mr-0"
            src={Sunset}
            alt="Sunset"
          />
        </div>

        {/* Splash_2: Animated on scroll */}
        <Image
          ref={splash_2_Ref}
          className="w-[220px] h-fit scale-0 absolute top-[69%] lg:top-[50%] right-[-10%] z-0"
          src={Splash_3}
          alt="Splash_3"
        />
      </div>
    </div>
  );
};

export default Discover;
