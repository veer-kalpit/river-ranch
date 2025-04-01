import React from "react";
import Image from "next/image";
import SpaSofa from "../../public/SpaSofa.png";
import SpaRoom from "../../public/SpaRoom.png";

const Spa = () => {
  return (
    <section className="w-full min-h-screen Spa px-6 lg:px-0 flex flex-col lg:block">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[1843px] items-center justify-center gap-12 lg:gap-[260px] mt-10 lg:mt-[103px]">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-md lg:max-w-none">
          <h3 className="font-inter font-light text-lg lg:text-[16px] tracking-wider text-white uppercase">
            Our Spa
          </h3>
          <p className="font-inter font-normal text-lg lg:text-[16px] leading-relaxed lg:leading-[25px] text-white max-w-sm lg:w-[312px]">
            It&apos;s not selfish to love yourself, take care of yourself, and
            to make your happiness a priority. It&apos;s necessary.
          </p>
          <button
            type="button"
            className="w-[170px] h-[50px] rounded-[25px] border-2 border-white text-white uppercase"
          >
            Explore
          </button>
        </div>
        {/* Right Image */}
        <div>
          <Image
            src={SpaSofa}
            alt="Spa Sofa"
            width={550}
            height={672}
            className="max-w-full h-auto lg:-mt-[272px]"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[140px] mt-16 lg:-mt-[440px]">
        {/* Quote */}
        <p className="font-cormorant font-semibold text-2xl lg:text-[48px] leading-tight lg:leading-[65px] capitalize text-white max-w-md lg:w-[341px] text-center lg:text-left">
          “Relaxation is a stepping stone to tranquility.”
        </p>
        {/* Image */}
        <Image
          src={SpaRoom}
          alt="Sauna"
          width={391}
          height={564}
          className="max-w-full h-auto"
        />
        {/* Right Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-md lg:max-w-none lg:ml-[140px] lg:mt-[220px]">
          <h3 className="font-inter font-light text-lg lg:text-[16px] tracking-wider text-white uppercase">
            Sauna Room
          </h3>
          <p className="font-inter font-normal text-lg lg:text-[16px] leading-relaxed lg:leading-[25px] text-white max-w-sm lg:w-[312px]">
            Calm your mind and balance your body in our private treatment rooms
            overlooking the seafront.
          </p>
          <button
            type="button"
            className="w-[170px] h-[50px] border-b-2 text-white uppercase"
          >
            Book Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spa;
