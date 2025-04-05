"use client";

import React from "react";
import Image from "next/image";

// image sources
import Warehouse_1 from "../../public/ware_house_1.jpeg";
import Warehouse_2 from "../../public/ware_house_2.png";
import Warehouse_3 from "../../public/ware_house_3.jpeg";
import Splash_1 from "../../public/splash_1.png";
import Splash from "../../public/splash.png";
import Splash_2 from "../../public/splash_2.png";
import Splash_3 from "../../public/splash_3.png";
import Sunset from "../../public/sunset.jpeg";

const Discover = () => {
  return (
    <div className="w-screen h-fit min-h-screen bg-white overflow-hidden">
      <div className="relative w-full h-screen min-h-fit flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 py-10 md:gap-30 md:py-30 md:px-10">
        <div className="w-fit h-fit space-y-5 mr-[12%] sm:mr-[40%] md:mr-0 ">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              DINNING
            </h6>

            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              A Unique, Theatrical Experience Where Each Table Is Its Own Foodie
              Experience.
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
          <div className="w-[200px] h-[220px] md:w-[230px] md:h-[250px] relative">
            <Image
              className="w-full h-full object-cover shadow-lg relative z-10"
              src={Warehouse_2}
              alt="beach"
            />
          </div>

          <div className="w-fit h-fit space-y-8 ">
            <p className="font-inter w-[220px] text-[#333333] text-xs leading-[18px]">
              A Dining Experience Where Every Bite Is A Work Of Art. We Offer
              Several Spaces In Which You Can Enjoy The Best Of The Sea, Good
              Company, Savoir Vivre And The Joy Of Feeling Loved. Isn&apos;t
              That The True Mediterranean Way?
            </p>

            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        <div className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] relative -mt-3 ml-auto mr-[5%] md:mt-0 min-[768px]:ml-0 min-[768px]:mr-0 ">
          <Image
            className="w-full h-full rounded-full object-cover shadow-lg relative z-10"
            src={Warehouse_1}
            alt="ware house"
          />
        </div>

        <Image
          className=" w-[600px] h-fit absolute top-[0%] right-[0%] z-0"
          src={Splash}
          alt="Splash"
        />
      </div>

      <div className="w-full h-screen min-h-fit flex flex-wrap justify-center items-center gap-20 py-10 relative md:gap-30">
        <div className="w-fit h-fit space-y-8 px-5 sm:mr-auto md:ml-[5%] lg:px-0 lg:ml-0 lg:mr-0">
          <Image
            className="w-[600px] h-[250px] sm:h-[350px] object-cover shadow-lg relative z-10"
            src={Warehouse_3}
            alt="Warehouse_3"
          />

          {/* Text area 2  */}
          <div className="w-fit h-fit space-y-8 ml-12">
            {/* paragraph 1  */}
            <p className="font-inter w-[220px] text-[#333333] text-xs leading-[18px]">
              We Offer Three Different Culinary Spaces That Are An Honest And
              Original Ode To Our Sea. A Diner’s Life Begins When He Enters A
              Restaurant And Ends With A Satisfied Sigh.
            </p>

            {/* button 1 */}
            <button className="cursor-pointer w-[60px] font-inter text-[#205781] text-[12px] text-left">
              DISCOVER
              <hr className="w-full mt-0.5" />
            </button>
          </div>
        </div>

        <div className="w-fit h-fit space-y-16 relative ml-auto mr-[5%] z-10 lg:ml-0 lg:mr-0">
          <div className="w-fit h-fit">
            <h6 className="font-inter font-extralight text-[#333333] text-[10px] mb-6 tracking-[3.5px]">
              OUR RESTAURENT
            </h6>

            <h1 className="font-cormorant max-w-[300px] text-[#205781] text-3xl sm:text-4xl leading-9">
              Where The Chefs And Gardeners Work Together To Create A Unique
              Dining Experience
            </h1>
          </div>

          <Image
            className="w-[150px] h-[250px] md:min-w-[180px] md:h-[280px] rounded-full object-cover shadow-lg z-10 ml-auto mr-[15%] lg:ml-0 lg:mr-0"
            src={Sunset}
            alt="Sunset"
          />
        </div>

        <Image
          className="w-[220px] h-fit absolute top-[50%] right-0 z-0"
          src={Splash_3}
          alt="Splash_3"
        />
      </div>
    </div>
  );
};

export default Discover;
