import React from "react";
import Image from "next/image";
import Biryani from "../../public/Biryani.png";
import Buffet from "../../public/Buffet.png";
import Naan from "../../public/Naan.png";

export default function Menu() {
  return (
    <section className="bg-white z-[60] relative px-10   text-center h-fit py-5 lg:py-[214px]">
      <p className="uppercase text-inter font-light text-[14px] lg:text-[16px] tracking-widest text-[#333333] whitespace-nowrap">
        Discover Delicious Choices
      </p>

      <h2 className="text-[38px] lg:text-[48px] font-cormorant text-[#205781] lg:text-[#333333] mb-10 lg:mt-10 lg:mb-[105px]">
        Menu
      </h2>

      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-[120px]">
        {/* Text Content */}
        <div className="flex flex-col w-full max-w-md items-center lg:text-left">
          <h1 className="text-[24px] lg:text-[48px] font-cormorant font-semibold leading-[65px] capitalize text-[#205781] mb-[35px] lg:block hidden">
            Explore Our Menu
          </h1>
          <p className="font-inter text-[16px] leading-[25px] capitalize lg:block hidden">
            Dive into a world of flavors! From classic favorites to bold new
            creations, our menu is designed to tantalize your taste buds.
            Whether you&apos;re craving something comforting or adventurous, we
            have the perfect dish for you. Take a peek and find your next
            delicious obsession!
          </p>
          <a
            href="https://app.muncho.in/#/home/35675f19-7114-4cb5-80d6-9672b9abd32a/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="cursor-pointer w-[170px] h-[50px] font-inter text-[16px] leading-[100%] uppercase text-center rounded-full border-2 text-[#205781] border-[#205781] py-[11px] hover:bg-white hover:text-[#205781] transition-all"
            >
              See Menu
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="relative w-[315px] h-[355px] lg:w-[600px] lg:h-[600px]">
          <Image
            src={Naan}
            alt="Naan"
            width={324}
            height={330}
            className="absolute left-10  lg:top-0 lg:left-0 z-10 w-[138px] h-[153px] lg:w-[324px] lg:h-[330px]"
          />
          <Image
            src={Buffet}
            alt="Buffet"
            width={503}
            height={558}
            className="absolute top-22 left-22 lg:top-[100px] lg:left-[180px] z-20 w-[224px] h-[248px] lg:w-[503px] lg:h-[558px]"
          />
          <Image
            src={Biryani}
            alt="Biryani"
            width={324}
            height={330}
            className="absolute top-60 left-10 lg:top-[400px] lg:left-0 z-30 w-[138px] h-[153px] lg:w-[324px] lg:h-[330px]"
          />
        </div>
      </div>
    </section>
  );
}
