import React from "react";
import Image from "next/image";
import Cottage from "../../public/cottage.png";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";


const items = [
  {
    id: 1,
    name: "Riverside Cottage",
    src: Cottage,
    price: "7500",
    desc: "A peaceful cottage with panoramic river views, nestled beside our organic garden for maximum privacy.",
    guest: "4",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    src: Cottage,
    price: "8500",
    desc: "Experience breathtaking mountain views with cozy interiors and modern amenities for a serene getaway.",
    guest: "5",
  },
  {
    id: 3,
    name: "Forest Cabin",
    src: Cottage,
    price: "7000",
    desc: "Surrounded by lush greenery, this cabin offers a tranquil escape with all modern comforts.",
    guest: "3",
  },
];

const RoomsBook = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#F5F8FA]">
      <h3 className="text-[16px] font-light font-inter uppercase text-[#050E14] text-center">
        Stay By The Waters
      </h3>
      <h2 className="text-[48px] font-semibold font-cormorant text-[#205781] mt-[40px] text-center">
        Riverside Cottages
      </h2>
      <p className="font-inter text-[16px] font-normal text-center text-[#050E14] mt-[40px] ">
        Experience the perfect blend of rustic charm and modern comfort in our
        riverside cottages.
        <br /> Each accommodation offers unique water views and easy access to
        our natural surroundings.
      </p>
      <h3 className="font-inter text-[16px] font-normal text-center text-[#205781] mt-[40px] uppercase border-b-2 border-[#205781] pb-[13px]">
        Check Availability
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-[#FFFFFF] rounded-[16px] w-[528px] shadow-md"
          >
            <Image
              src={item.src}
              alt={item.name}
              className="rounded-[16px]"
              width={528}
              height={348}
            />
            <div className="flex flex-row justify-between w-full px-[24px] pt-[24px]">
              <h4 className="text-[32px] font-semibold font-cormorant text-black">
                {item.name}
              </h4>
              <p className="text-[16px] font-inter py-2 px-4 text-white text-center  bg-black rounded-[56px]">
                ${item.price}/Night
              </p>
            </div>

            <p className="text-[14px] font-normal px-[24px] font-inter text-[#050E14] mt-[16px]">
              {item.desc}
            </p>
            <div className="flex flex-row justify-between w-full mt-[16px] px-6 items-center">
              <p className="text-[18px] font-inter font-normal flex text-black">
                <span className="pr-[5px]">
                  <FaUsers />
                </span>
                {item.guest} Guests
              </p>
              <p className="text-[18px] font-inter font-normal flex text-black">
                <span className="pr-[5px]">
                  <MdOutlinePets />
                </span>
                Pet Friendly
              </p>
            </div>
            <div className="gap-4 flex flex-col mt-6">
              <p className="font-inter font-normal text-[16px] text-center h-[50px] py-[16px] border-2  border-[#0000004D] w-[480px] px-6 rounded-[24.82px] items-center">
                View Details
              </p>
              <p className="font-inter font-normal text-white bg-[#205781] text-[16px] text-center h-[50px] py-[16px] border-2 w-[480px] px-6 rounded-[24.82px] items-center ">
                Book Now
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsBook;
