import React from "react";
import Image from "next/image";
import BannerImg from "../../public/yuliya.png";
import WaterSplash from "../../public/watersplash.png";
import FacilityCard from "./facilityCard";

const Banner = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row  justify-center gap-12 lg:gap-[115px] pt-10 lg:pt-[160px] h-auto lg:h-screen">
        <div className="flex flex-col text-center lg:text-left max-w-lg">
          <h1 className="font-cormorant font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#205781] capitalize">
            A Haven of Tranquility
          </h1>
          <p className="mt-4 font-inter font-normal text-base md:text-lg leading-relaxed text-gray-700">
            River Ranch, once a family farm, is now a sanctuary for reconnecting
            with nature and escaping city life. Committed to sustainability, we
            practice rainwater harvesting and organic farming to minimize our
            environmental impact. Pets are always welcome, because vacations are
            better with the whole family—including four-legged members!
          </p>
          <button
            type="button"
            className="border-b-2 pb-3 mt-4 font-inter font-normal text-base uppercase text-[#205781] border-[#205781] w-fit mx-auto lg:mx-0"
          >
            See Rooms
          </button>
        </div>
        <div className="flex justify-center relative">
          <Image
            src={BannerImg}
            alt="Swimming Pool"
            width={549}
            height={688}
            className="w-[549px] h-[688px]  mt-6 lg:mt-[42px]"
          />
          <Image
            src={WaterSplash}
            alt="Water splash"
            width={721}
            height={919}
            className="absolute -z-10 -top-[190px] -right-[300px] hidden lg:block"
          />
        </div>
      </div>
      <FacilityCard />
    </section>
  );
};

export default Banner;
