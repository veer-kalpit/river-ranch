import React from "react";

interface AboutUsProps {
  scrollToFooter: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ scrollToFooter }) => {
  return (
    <section
      id="about"
      className="about-us flex flex-col items-center justify-center w-full h-auto max-w-[1920px] bg-[#205781] px-4 py-16 text-center z-[50] mt-[100vh]"
    >
      <h1 className="font-inter font-light text-base tracking-[30%] uppercase text-white">
        About Us
      </h1>
      <p className="mt-6 md:mt-10 font-cormorant font-semibold text-[18px] lg:text-[36px] leading-normal text-white max-w-[90%] md:max-w-[1185px] capitalize">
        <span className="lg:block hidden">
          Located just ten minutes from Mysore, the River Ranch Resort is
          nestled beside a serene bird sanctuary and overlooks the tranquil
          Kaveri River. Immerse yourself in nature as you witness birds from
          30-40 countries gracing the skies, making it a haven for bird
          enthusiasts. The gentle slopes near the river provide the perfect
          setting for a relaxed evening or a breathtaking sunset experience.
          Whether you&apos;re looking for a peaceful escape or a scenic
          adventure, the River Ranch Resort offers the ideal blend of comfort
          and natural beauty.
        </span>
        <span className="lg:hidden block">
          Just ten minutes from Mysore, the River Ranch Resort sits by a serene
          bird sanctuary and the calming Kaveri River. Enjoy sightings of birds
          from 30-40 countries and breathtaking sunsets over gentle river
          slopes—a perfect retreat for nature lovers
        </span>
      </p>
      <button
        type="button"
        onClick={scrollToFooter}
        className="relative group w-[150px] md:w-[170px] h-[45px] md:h-[50px] rounded-full border-2 border-white text-white mt-6 md:mt-10 font-inter uppercase transition-all duration-300 hover:bg-white hover:text-[#205781]"
      >
        Book Now {/* Bubble tooltip */}
        {/* <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#205781] text-xs font-medium px-4 py-2 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md z-10">
          Book Now
        </span> */}
      </button>
    </section>
  );
};

export default AboutUs;
