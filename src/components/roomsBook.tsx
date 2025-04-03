"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Cottage from "../../public/cottage.png";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import RoomDetailModal from "@/components/RoomDetailModal";

const items = [
  {
    id: 1,
    name: "Riverside Cottage",
    src: Cottage,
    price: "7500",
    desc: "A peaceful cottage with panoramic river views, nestled beside our organic garden for maximum privacy.",
    guest: "4",
    minStay: "2 Nights",
    amenities: [
      "Queen bed",
      "Private Deck",
      "Breakfast Included",
      "Luxury Bathroom",
      "Fireplace",
      "Fishing Access",
    ],
  },
  {
    id: 2,
    name: "Mountain Retreat",
    src: Cottage,
    price: "8500",
    desc: "Experience breathtaking mountain views with cozy interiors and modern amenities for a serene getaway.",
    guest: "5",
    minStay: "2 Nights",
    amenities: [
      "Queen bed",
      "Private Deck",
      "Breakfast Included",
      "Luxury Bathroom",
      "Fireplace",
      "Fishing Access",
    ],
  },
  {
    id: 3,
    name: "Forest Cabin",
    src: Cottage,
    price: "7000",
    desc: "Surrounded by lush greenery, this cabin offers a tranquil escape with all modern comforts.",
    guest: "3",
    minStay: "2 Nights",
    amenities: [
      "Queen bed",
      "Private Deck",
      "Breakfast Included",
      "Luxury Bathroom",
      "Fireplace",
      "Fishing Access",
    ],
  },
];

const RoomsBook = () => {
  const [selectedRoom, setSelectedRoom] = useState<{
    id: number;
    name: string;
    src: StaticImageData;
    price: string;
    desc: string;
    guest: string;
    amenities: string[];
    minStay: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (room: { id: number; name: string; src: StaticImageData; price: string; desc: string; guest: string; amenities: string[]; minStay: string }) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center bg-[#F5F8FA] py-10 px-4 md:px-10">
      <h3 className="text-lg md:text-[16px] font-light font-inter uppercase text-[#050E14] text-center">
        Stay By The Waters
      </h3>
      <h2 className="text-3xl md:text-[48px] font-semibold font-cormorant text-[#205781] mt-4 md:mt-[40px] text-center">
        Riverside Cottages
      </h2>
      <p className="font-inter text-base md:text-[16px] text-center text-[#050E14] mt-4 md:mt-[40px] max-w-xl">
        Experience the perfect blend of rustic charm and modern comfort in our
        riverside cottages. Each accommodation offers unique water views and
        easy access to our natural surroundings.
      </p>
      <h3 className="font-inter text-base md:text-[16px] uppercase border-b-2 border-[#205781] pb-3 mt-6 md:mt-[40px] text-[#205781] text-center">
        Check Availability
      </h3>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[1300px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md w-full max-w-[528px]"
          >
            <Image
              src={item.src}
              alt={item.name}
              className="rounded-xl"
              width={528}
              height={348}
              layout="responsive"
            />
            <div className="flex flex-row justify-between w-full px-6 pt-6">
              <h4 className="text-2xl md:text-[32px] font-semibold font-cormorant text-black">
                {item.name}
              </h4>
              <p className="text-base md:text-[16px] font-inter py-2 px-4 text-white bg-black rounded-full">
                ${item.price}/Night
              </p>
            </div>

            <p className="text-sm md:text-[14px] font-inter text-[#050E14] mt-4 px-6">
              {item.desc}
            </p>
            <div className="flex flex-row justify-between w-full mt-4 px-6 items-center">
              <p className="text-lg font-inter flex items-center text-black">
                <FaUsers className="mr-2" />
                {item.guest} Guests
              </p>
              <p className="text-lg font-inter flex items-center text-black">
                <MdOutlinePets className="mr-2" />
                Pet Friendly
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-6 w-full p-6">
              <button
                type="button"
                onClick={() => openModal(item)}
                className="font-inter font-normal text-base md:text-[16px] text-center h-12 border-2 border-[#0000004D] rounded-full"
              >
                View Details
              </button>
              {/* <a href={`/rooms/${item.id}?book=true`}> */}
                <button
                  type="button"
                  className="font-inter font-normal text-white bg-[#205781] text-base md:text-[16px] text-center h-12 rounded-full w-full"
                >
                  Book Now
                </button>
              {/* </a> */}
            </div>
          </div>
        ))}
      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={selectedRoom}
      />
    </div>
  );
};

export default RoomsBook;
