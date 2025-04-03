"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaUsers} from "react-icons/fa";
import { MdOutlinePets, MdOutlineCalendarToday } from "react-icons/md";

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    id: number;
    name: string;
    src: StaticImageData;
    price: string;
    desc: string;
    guest: string;
    amenities: string[];
    minStay: string;
  } | null;
}

const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  isOpen,
  onClose,
  room,
}) => {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Image Section */}
        <Image
          src={room.src}
          alt={room.name}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-black">{room.name}</h2>
          <p className="text-black mt-2">{room.desc}</p>

          {/* Details Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-black">Details</h3>
              <p className="flex items-center text-black mt-2">
                <FaUsers className="mr-2 text-black" /> {room.guest} guests
                Maximum
              </p>
              <p className="flex items-center text-black mt-2">
                <MdOutlinePets className="mr-2 text-black" /> Pet Friendly
              </p>
              <p className="flex items-center text-black mt-2">
                <MdOutlineCalendarToday className="mr-2 text-black" />{" "}
                {room.minStay} minimum stay
              </p>
            </div>

            {/* Amenities Section */}
            <div>
              <h3 className="text-lg font-semibold text-black">Amenities</h3>
              <ul className="mt-2 grid grid-cols-2 gap-x-2.5 gap-y-2 text-black list-disc ">
                {room.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-black pr-2">•</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            type="button"
            className="mt-6 bg-[#205781] text-white px-6 py-3 rounded-full w-full text-lg hover:bg-[#1a4768] transition"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailModal;
