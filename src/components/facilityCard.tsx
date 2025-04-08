import React from "react";
import { SiOrganicmaps } from "react-icons/si";
import { MdPets } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";

const items = [
  {
    id: 1,
    icon: <SiOrganicmaps />,
    name: "Organic Farming",
    desc: "Experience our sustainable farming practices with organic vegetables, fruits, and herbs grown right on our property.",
  },
  {
    id: 2,
    icon: <MdPets />,
    name: "Pet-Friendly",
    desc: "Bring your furry friends to enjoy wide open spaces, dedicated pet areas, and pet-friendly accommodations.",
  },
  {
    id: 3,
    icon: <FaSwimmingPool />,
    name: "Swimming Pool",
    desc: "Relax in our pristine swimming pool surrounded by nature, perfect for cooling off during warm afternoons.",
  },
  {
    id: 4,
    icon: <GiWheat />,
    name: "Farm Experiences",
    desc: "Participate in farm activities like harvesting, feeding animals, and learning about sustainable living.",
  },
];

const FacilityCard = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 pb-20 px-6 md:px-16 lg:px-24">
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
