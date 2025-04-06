"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// image imports
import Warehouse_1 from "../../public/ware_house_1.jpeg";
import Warehouse_2 from "../../public/ware_house_2.png";
import Warehouse_3 from "../../public/ware_house_3.jpeg";
import Splash_1 from "../../public/splash_1.png";
import Splash from "../../public/splash.png";
import Splash_3 from "../../public/splash_3.png";
import Sunset from "../../public/sunset.jpeg";

const Discover = () => {
  const splashRef = useRef(null);

useEffect(() => {
  const splashElement = splashRef.current;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(splashElement, {
            height: "600px",
            duration: 1.2,
            ease: "power2.out",
          });
        } else {
          gsap.to(splashElement, {
            height: "0px",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  if (splashElement) {
    observer.observe(splashElement);
  }

  return () => {
    if (splashElement) observer.unobserve(splashElement);
  };
}, []);


  return (
    <div className="w-screen h-fit min-h-screen bg-white overflow-hidden">
      {/* First Section */}
      <div className="relative w-full h-screen min-h-fit flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 py-10 md:gap-30 md:py-30 md:px-10">
        <div className="w-fit h-fit space-y-5 mr-[12%] sm:mr-[40%] md:mr-0 ">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              YOGA AND HEALING EXPERIENCES
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              Enjoy Yoga Sessions That Restore Balance And Bring Peace.
            </h1>
          </div>
          <div className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] relative">
            <Image
              className="w-full h-full rounded-full object-cover shadow-lg relative z-10"
              src={Warehouse_1}
              alt="ware house"
            />
            <Image
              className="w-full h-fit scale-[1.6] rotate-y-180 absolute top-[88%] left-[-20%] z-0"
              src={Splash_1}
              alt="splash_1"
            />
          </div>
        </div>

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
              Soul, Promoting Inner Peace And Physical Vitality. Through
              Mindfulness, Meditation, And Movement, It Offers A Transformative
              Healing Experience, Easing Stress, Improving Well-Being, And
              Fostering Self-Awareness.
            </p>
            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        <div className="w-[150px] h-fit md:min-w-[180px] md:h-[280px] relative -mt-3 ml-auto mr-[5%] md:mt-0 min-[768px]:ml-0 min-[768px]:mr-0">
          <Image
            className="w-full h-full rounded-full object-cover shadow-lg relative z-10"
            src={Warehouse_1}
            alt="ware house"
          />
          <div
            ref={splashRef}
            className="splashItem w-[550px] h-[0px] absolute top-[-75%] left-[-65%] overflow-hidden z-0"
          >
            <Image className="w-full h-[600px]" src={Splash} alt="Splash" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-screen min-h-fit flex flex-wrap justify-center items-center gap-20 py-10 relative md:gap-30">
        <div className="w-fit h-fit space-y-8 px-5 sm:mr-auto md:ml-[5%] lg:px-0 lg:ml-0 lg:mr-0">
          <Image
            className="w-[600px] h-[250px] sm:h-[350px] object-cover shadow-lg relative z-10"
            src={Warehouse_3}
            alt="Warehouse_3"
          />
          <div className="w-fit h-fit space-y-8 ml-12">
            <p className="font-inter w-[250px] text-[#333333] text-xs leading-[18px]">
              A Nature Sanctuary Is A Paradise Where Greenery Abounds, And The
              Air Hums With Life, Offering Peace And Purity At Every Step.
              It&apos;s A Living Canvas Of Earth&apos;s Beauty, Where One Feels
              Deeply Connected To The Essence Of The Natural World.
            </p>
            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        <div className="w-fit h-fit space-y-16 relative ml-auto mr-[5%] z-10 lg:ml-0 lg:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              NATURE SANCTURY
            </h6>
            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              A Nature Sanctuary Is A Peaceful Heven Full Of Greenery And
              Natural Beauty.
            </h1>
          </div>
          <Image
            className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] rounded-full object-cover shadow-lg z-10 ml-auto mr-[15%] lg:ml-0 lg:mr-0"
            src={Sunset}
            alt="Sunset"
          />
        </div>

        <Image
          className="w-[220px] h-fit absolute top-[69%] lg:top-[50%] right-0 z-0"
          src={Splash_3}
          alt="Splash_3"
        />
      </div>
    </div>
  );
};

export default Discover;
