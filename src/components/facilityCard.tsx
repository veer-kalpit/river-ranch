import React from "react";
import { FaWater } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { IoGolf } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

const items = [
  {
    id: 1,
    icon: <FaWater />,
    name: "Riverside Views",
    desc: "Just steps from the water, River Ranch offers the soothing embrace of the river—where nature heals and peace flows.",
  },
  {
    id: 2,
    icon: <MdDinnerDining />,
    name: "Delicious Dining",
    desc: "Our award-winning chefs craft a diverse range of cuisines, blending local flavors with global inspirations to create unforgettable dining experiences.",
  },
  {
    id: 3,
    icon: <IoGolf />,
    name: "Extraordinary Events",
    desc: "River Ranch is a premier event destination, offering stunning natural backdrops and versatile spaces perfect for weddings, celebrations, and corporate retreats.",
  },
  {
    id: 4,
    icon: <BsStars />,
    name: "Special Experiences",
    desc: "Immerse yourself in the tranquility of nature with yoga and sound healing sessions at River Ranch, where every breath and rhythm brings you closer to balance and inner peace.",
  },
];

const FacilityCard = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20 px-6 md:px-16 lg:px-24 relative z-20">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-xl py-10 px-6 border border-gray-200 flex flex-col "
        >
          <div className="mb-4 text-5xl ">{item.icon}</div>
          <h3 className="text-2xl font-semibold font-cormorant mb-3">
            {item.name}
          </h3>
          <p className="text-lg font-inter text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FacilityCard;
