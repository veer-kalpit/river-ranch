import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="about-us flex flex-col items-center justify-center w-full h-auto max-w-[1920px] bg-[#205781] px-4 py-16 text-center z-[50] mt-[100vh]"
    >
      <h1 className="font-inter font-light text-base tracking-[30%] uppercase text-white">
        About Us
      </h1>
      <p className="mt-6 md:mt-10 font-cormorant font-semibold text-[24px] lg:text-[36px] leading-normal text-white max-w-[90%] md:max-w-[1185px] capitalize">
        Nestled on 4 acres of lush countryside near Mysore, River Ranch is a
        boutique farmstay offering an authentic connection with nature. Our
        family-owned property features organic gardens, mango groves, and banana
        plantations in a peaceful rural setting.
      </p>
      <button
        type="button"
        className="w-[150px] md:w-[170px] h-[45px] md:h-[50px] rounded-full border-2 border-white text-white mt-6 md:mt-10 font-inter uppercase transition-all duration-300 hover:bg-white hover:text-[#205781]"
      >
        Explore
      </button>
    </section>
  );
};

export default AboutUs;
