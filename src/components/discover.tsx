"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// image imports
import Yoga1 from "../../public/yoga.png";
import Splash_1 from "../../public/splash_1.png";
import Yoga2 from "../../public/Yoga2.png";
import Warehouse_2 from "../../public/ware_house_2.png";
import Warehouse_3 from "../../public/ware_house_3.jpeg";
import Splash from "../../public/splash.png";
import Splash_3 from "../../public/splash_3.png";
import Sunset from "../../public/sunset.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  // Refs for animated elements
  const splashRef = useRef(null);
  const splash_1_Ref = useRef(null);
  const splash_2_Ref = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    // Splash + Splash_1 animation on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splashRef.current,
        start: "top 50%", // animation triggers when splashRef hits 50% of viewport
      },
    });

    tl.to(
      splashRef.current,
      {
        scale: 1,
        height: "600px",
        duration: 0.5,
      },
      0
    ).to(
      splash_1_Ref.current,
      {
        scale: 1.2,
        duration: 0.5,
      },
      0
    );

    // Splash_2 animation (right slide-in)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: splash_2_Ref.current,
          start: "top 100%",
        },
      })
      .to(splash_2_Ref.current, {
        scale: 1,
        right: 0,
        duration: 0.5,
      });
  }, []);

  return (
    <div className="w-screen h-fit min-h-screen bg-white overflow-hidden z-[50] relative">
      {/* Section 1: Yoga and Healing */}
      <div className="relative w-full h-screen min-h-fit flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 py-10 md:gap-30 md:pt-30 md:py-0 md:px-10">
        {/* Left: Text + Splash_1 overlay */}
        <div className="w-fit h-fit space-y-5 mr-[12%] sm:mr-[40%] md:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              YOGA AND HEALING EXPERIENCES
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              Enjoy Yoga Sessions That Restore Balance And Bring Peace.
            </h1>
          </div>

          {/* Main Image */}
          <div className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] relative">
            <Image
              className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] rounded-full object-cover shadow-lg relative z-10"
              src={Yoga1}
              alt="ware house"
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
        </div>

        {/* Center: Secondary Image + Text */}
        <div className="w-fit h-fit space-y-8">
          <div className="w-[200px] h-[250px] md:w-[230px] md:h-[320px] relative">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Warehouse_2}
              alt="beach"
            />
          </div>
          <div className="w-fit h-fit space-y-8">
            <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
              Yoga Is A Holistic Practice That Harmonizes The Body, Mind, And
              Soul, Promoting Inner Peace And Physical Vitality...
            </p>
            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        {/* Right: Splash image with animation */}
        <div className="w-[150px] h-fit md:min-w-[180px] md:h-[280px] relative -mt-3 ml-auto mr-[5%] md:mt-0 min-[768px]:ml-0 min-[768px]:mr-0">
          <Image
            className="w-full h-full rounded-full object-cover shadow-lg relative z-10"
            src={Yoga2}
            alt="ware house"
          />
          <div
            ref={splashRef}
            className="splashItem w-[550px] h-[0px] scale-0 absolute top-[-75%] left-[-65%] overflow-hidden z-0"
          >
            <Image className="w-full h-[600px]" src={Splash} alt="Splash" />
          </div>
        </div>
      </div>

      {/* Section 2: Nature Sanctuary */}
      <div className="w-full flex flex-wrap justify-center items-center gap-20 py-10 relative md:gap-30">
        {/* Left: Large image + text */}
        <div className="w-fit h-fit space-y-8 px-5 sm:mr-auto md:ml-[5%] lg:px-0 lg:ml-0 lg:mr-0">
          <Image
            className="w-[600px] h-[250px] sm:h-[350px] object-cover shadow-lg relative z-10"
            src={Warehouse_3}
            alt="Warehouse_3"
          />

          <div className="w-fit h-fit space-y-8 ml-12">
            <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
              A Nature Sanctuary Is A Paradise Where Greenery Abounds...
            </p>
            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
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
              A Nature Sanctuary Is A Peaceful Heaven Full Of Greenery And
              Natural Beauty.
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
