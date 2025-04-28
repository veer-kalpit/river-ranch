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
          start: "top 55%", // triggers when splash enters 70% of viewport
        },
      })
      .to(splashRef.current, {
        scale: 1.3,
        height: "600px",
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
          trigger: splash_3_Ref.current,
          start: "top 70%", // triggers when splash enters 70% of viewport
        },
      })
      .to(splash_3_Ref.current, {
        scale: 1,
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
      {/* Section 1: Yoga and Healing */}
      <div className="relative w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-center py-5 md:gap-30 md:pt-30 md:py-0 md:px-10">
        {/* Left: Text + Splash_1 overlay */}
        <div className="w-fit h-fit space-y-0 lg:space-y-5 md:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[14px] mb-6 tracking-[3.5px]">
              <span className="lg:block hidden">
                YOGA AND HEALING EXPERIENCES
              </span>
              <span className="block lg:hidden text-center">
                Moments and Memories
              </span>
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              <span className="lg:block hidden">
                Enjoy Expert sessions that restore balance and bring peace.
              </span>
              <span className="lg:hidden block text-center">
                Parties and Get-Togethers
              </span>
             
            </h1>
          </div>

          {/* Main Image */}
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
              className="w-fit h-fit scale-0 absolute top-[86%] left-[-28%] z-0 "
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
        <div className="w-fit h-fit space-y-8 hidden lg:block">
          <div className="w-[200px] h-[250px] md:w-[230px] md:h-[320px] relative">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Warehouse_2}
              alt="beach"
            />
          </div>
          <div className="w-fit h-fit space-y-8">
            <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
              River Ranch offers yoga, meditation, and sound healing in
              nature—restoring balance, easing stress, and awakening inner peace
              through movement, breath, and sound.
            </p>
            <button
              type="button"
              onClick={() => {
                const phoneNumber = "919686985795";
                const message = "I want to book an experiance at River Ranch";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, "_blank");
              }}
              className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left"
            >
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        {/* Right: Splash image with animation */}
        <div className="w-[250px] h-[350px]  relative -mt-3 ml-auto mr-[5%] md:mt-0 min-[768px]:ml-0 min-[768px]:mr-0 lg:flex  hidden  justify-center items-center">
          <Image
            className="w-full h-[80%] object-cover shadow-lg relative z-10"
            src={Yoga2}
            alt="ware house"
          />

          <Image
            className="w-full h-full object-cover z-50 scale-[1.4] absolute top-0 left-0"
            src={Frame}
            alt="Frame"
          />
          <div
            ref={splashRef}
            className="splashItem w-[550px] h-[0px] scale-0 absolute top-[-95%] left-[0%] overflow-hidden z-0"
          >
            <Image className="w-full h-[600px]" src={Splash} alt="Splash" />
          </div>
        </div>
      </div>

      {/* Section 2: Nature Sanctuary */}
      <div className="w-full flex flex-wrap justify-center items-center gap-20 py-10 lg:pt-30 relative md:gap-30 ">
        {/* Left: Large image + text */}
        <div className="w-fit h-fit space-y-2 px-0 sm:mr-auto md:ml-[5%] lg:px-0 lg:ml-0 lg:mr-0">
          <video
            loop
            muted
            autoPlay
            preload="auto"
            className=" aspect-video w-[412px] lg:w-[453px] h-[595px] relative z-10"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <div className="w-fit h-fit space-y-8 ml-0 lg:ml-12">
            <p className="font-inter lg:w-[250px] text-[#333333] text-[16px] leading-[25px] text-center px-[36px] lg:px-0 lg:text-left">
              Celebrate life’s best moments at River Ranch, where lively parties
              and relaxed get-togethers come alive by the riverside. Dance under
              the stars, swap stories by the water, and make memories that’ll
              stay with you forever.
            </p>
            <button
              type="button"
              onClick={scrollToFooter}
              className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left hidden lg:block"
            >
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        {/* Right: Text + image */}
        <div className="w-fit hidden lg:block h-fit space-y-16 relative ml-auto mr-[5%] z-10 lg:ml-0 lg:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              Parties and get together
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              The Perfect Destination for Parties, Get-Togethers, and
              Unforgettable Celebrations
            </h1>
          </div>
          <Image
            className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] rounded-full object-cover shadow-lg z-10 ml-auto mr-[15%] lg:ml-0 lg:mr-0"
            src={Sunset}
            alt="Sunset"
          />
        </div>

        {/* Splash_2: Animated on scroll */}
      </div>
      <div className="w-full block lg:hidden z-50">
        <Image
          ref={splash_3_Ref}
          className="w-[300px] h-fit absolute top-[-20%] right-[-100px] scale-0 md:hidden"
          src={Splash}
          alt="Water Splash"
        />
      </div>
      <div className="relative">
        <p className="font-cormorant font-normal text-[#205781] text-[28px] lg:text-[48px] leading-[100%] capitalize text-center">
          “Host unforgettable events with ease <br />
          at River Ranch, offering an expansive <br />
          500-floating capacity for <br /> your celebrations.”
        </p>
        <Image
          ref={splash_2_Ref}
          className="w-[220px] h-fit scale-0 absolute top-[69%] lg:-top-18 right-[-10%] z-0 hidden lg:block"
          src={Splash_3}
          alt="Splash_3"
        />
      </div>
    </div>
  );
};

export default Discover;
