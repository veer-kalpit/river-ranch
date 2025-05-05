import React, { forwardRef } from "react";

type AboutUsProps = {
  scrollToFooter: () => void;
};

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>((props, ref) => {
  return (
    <div
      ref={ref}
      id="about"
      className="about-us flex flex-col items-center justify-center w-full h-auto max-w-[1920px] bg-[#205781] px-4 py-16 text-center z-[50] mt-[100vh]"
    >
      <h1 className="font-inter font-light text-base tracking-[30%] uppercase text-white">
        About Us
      </h1>
      <p className="mt-6 md:mt-10 font-cormorant font-semibold text-[18px] lg:text-[36px] leading-normal text-white max-w-[90%] md:max-w-[1185px]">
        Located just ten minutes from Mysore, River Ranch Resort sits beside a
        serene bird sanctuary and overlooks the tranquil Kaveri River. Watch
        birds from 30-40 countries and enjoy gentle riverbank slopes perfect for
        peaceful evenings and stunning sunsets. A perfect blend of comfort and
        natural beauty awaits.
      </p>
      <button
        type="button"
        onClick={props.scrollToFooter}
        className="relative group w-[150px] md:w-[170px] h-[45px] md:h-[50px] rounded-full border-2 border-white text-white mt-6 md:mt-10 font-inter uppercase transition-all duration-300 hover:bg-white hover:text-[#205781]"
      >
        Book Now
      </button>
    </div>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
