import React from "react";

const AboutUs = () => {
  return (
    <section
      data-aos="zoom-in-down"
      className="about-us flex flex-col items-center justify-center w-full h-auto max-w-[1920px] bg-[#205781] px-4 py-16 text-center"
    >
      <h1 className="font-inter font-light text-base md:text-lg uppercase text-white">
        About Us
      </h1>
      <p className="mt-6 md:mt-10 font-cormorant font-semibold text-2xl md:text-4xl lg:text-5xl leading-normal text-white max-w-[90%] md:max-w-[1185px] capitalize">
        Set by a serene lake near the Mysore Bird Sanctuary, River Ranch is a
        boutique resort offering elegant stays surrounded by nature. With its
        peaceful setting and refined charm, it&apos;s perfect for weekend
        getaways, destination weddings, and private celebrations.
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
