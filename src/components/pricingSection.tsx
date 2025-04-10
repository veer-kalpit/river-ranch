
import React, { useRef } from "react";

import WaterSplash from "../../public/WatersplashPricing.png"
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);





export default function PricingSection() {
  const splash_2_Ref = useRef(null);

  // GSAP Animations
  useGSAP(() => {
   

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
  }, []);

  const pricingData = [
    { guests: "0-10", price: "2000 per pax" },
    { guests: "10-20", price: "1500 per pax" },
    { guests: "20+", price: "1300 per pax" },
  ];

  return (
    <section className="bg-white z-[60] relative pb-20 text-center h-screen ">
      <Image
        ref={splash_2_Ref}
        src={WaterSplash}
        alt="Water Splash"
        className="absolute -right-15 -bottom-20 w-[300px] h-[600px]"
      />
      <p className="uppercase text-inter font-light text-[16px] tracking-widest text-[#333333]">
        Affordable Stays, Memorable Getaways
      </p>
      <h2 className="text-[48px] font-cormorant text-[#333333] mt-10 mb-10">
        Pricing
      </h2>

      <div className="w-[1136px] mx-auto">
        <div className="flex justify-between text-[48px]  font-cormorant font-normal text-[#333333] mb-4 px-4">
          <p className="text-center w-full">Guests</p>
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

      <div className=" h-[123.63851928710938px] mt-[83px] flex flex-col items-center justify-center ">
        <p className="font-inter font-normal text-[16px] leading-[100%] text-center w-[802px]">
          For photographers, wedding or event decorations, live music or DJ
          booking, or any other special requests, please contact us with the
          details
        </p>
        <button
          type="button"
          className="mt-[36px] w-[170px] h-[49.63851547241211px] font-inter text-[16px] leading-[100%] uppercase text-center rounded-[24.82px] border-2 border-[#3333334D]"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
