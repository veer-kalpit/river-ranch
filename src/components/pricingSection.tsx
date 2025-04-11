import React, { useRef } from "react";

import WaterSplash from "../../public/splash_4.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface PricingSectionProps {
  scrollToFooter: () => void;
}

export default function PricingSection({ scrollToFooter }: PricingSectionProps) {
  const splash_2_Ref = useRef(null);
  const pageRef = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    // Splash_2 animation (slide in from right)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 40%",
        },
      })
      .fromTo(
        splash_2_Ref.current,
        {
          x: "-100%", // start off-screen to the left
          scale: 0, // start larger
        },
        {
          x: "0%", // move to original position
          scale: 1, // shrink to normal
          duration: 0.6,
          ease: "power3.out",
        }
      );
  }, []);

  const pricingData = [
    { guests: "0-10", price: "2000 per pax" },
    { guests: "10-20", price: "1500 per pax" },
    { guests: "20+", price: "1300 per pax" },
  ];

  return (
    <section
      ref={pageRef}
      className="bg-white z-[60] relative lg:py-24 px-5 lg:px-0 text-center h-fit pb-16"
    >
      <div
        ref={splash_2_Ref}
        className="w-screen h-full scale-[1] absolute top-0 left-0 z-0"
      >
        <div className="w-screen min-w-[800px] h-fit">
          <Image
            src={WaterSplash}
            alt="Water Splash"
            className="w-full h-fit object-cover"
          />
        </div>
      </div>

      <p className="uppercase text-inter font-light text-[14px] lg:text-[16px] tracking-widest text-[#333333] whitespace-nowrap relative z-10">
        Affordable Stays
        <span className="hidden lg:inline">, Memorable Getaways</span>
      </p>

      <h2 className="text-[38px] lg:text-[48px] font-cormorant text-[#205781] lg:text-[#333333] mt-5 lg:mt-10 mb-10 relative z-10">
        Pricing
      </h2>

      <div className="lg:w-[1136px] mx-auto relative z-10">
        <div className="flex justify-between text-[24px] lg:text-[48px]  font-cormorant font-normal text-[#333333] mb-4 px-4">
          <p className="text-center w-full">No. of Guests</p>
          <p className="text-center w-full">Price</p>
        </div>

        {pricingData.map(({ guests, price }, index) => (
          <div
            key={index}
            className="flex  justify-between text-center items-center bg-[#EDF7FF] py-5  rounded-[8px] mb-4 text-[#333333] "
          >
            <p className="text-center w-full font-inter text-[16px] leading-[100%] lg:text-[24px]">
              {guests}
            </p>
            <p className="text-center w-full font-inter text-[16px] leading-[100%] lg:text-[24px]">
              {price}
            </p>
          </div>
        ))}
      </div>

      <div className=" h-[123.63851928710938px] mt-[83px] flex flex-col items-center justify-center  relative z-10">
        <p className="font-inter font-normal text-[14px] lg:text-[16px]  leading-[20px] text-center lg:w-[802px] text-[#333333]">
          For photographers, wedding or event decorations, live music or DJ
          booking, or any other special requests, please contact us with the
          details
        </p>
        <button
          onClick={scrollToFooter}
          className=" cursor-pointer mt-[36px] w-[170px] h-[49.63851547241211px] font-inter text-[16px] leading-[100%] uppercase text-center rounded-[24.82px] border-2 border-[#3333334D] py-[11px]"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
