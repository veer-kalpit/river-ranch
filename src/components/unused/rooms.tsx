"use client";
import React, { SetStateAction } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { LuCookingPot } from "react-icons/lu";

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
};

const items = [
  {
    id: 1,
    url: "https://river-ranch.mdbstech.in/assets/img/6.jpg?v=3",
    title: "Junior Suite",
    tags: ["Clean", "Comfort"],
  },
  {
    id: 2,
    url: "https://river-ranch.mdbstech.in/assets/img/7.jpg?v=3",
    title: "Family Room",
    description: "Hotel ut nisan the duru",
    tags: ["Clean", "Comfort"],
  },
  {
    id: 3,
    url: "https://river-ranch.mdbstech.in/assets/img/8.jpg?v=3",
    title: "Double Room ",
    description: "Hotel ut nisan the duru",
    tags: ["Clean", "Comfort"],
  },
  {
    id: 4,
    url: "https://river-ranch.mdbstech.in/theme/img/rooms/4.jpg?v=3",
    title: "Deluxe Room",
    description: "Hotel ut nisan the duru",
    tags: ["Clean", "Comfort"],
  },
  {
    id: 5,
    url: "https://river-ranch.mdbstech.in/theme/img/rooms/7.jpg?v=3",
    title: "Superior Room",
    description: "Hotel ut nisan the duru",
    tags: ["Clean", "Comfort"],
  },
];

type item = {
  id: number;
  url: string;
  title: string;
  description?: string;
  tags?: string[];
};
interface GaleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}
function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <div className="w-fit mx-auto gap-1 flex pb-20 pt-10 ">

      {items.slice(0, 5).map((item: item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl relative ${
              index === i ? "w-[450px] " : "w-[50px]"
            } h-[400px] flex-shrink-0  transition-[width] ease-in-linear duration-500 origin-center  `}
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            onMouseEnter={() => {
              setIndex(i);
            }}
          >
            <motion.img
              className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
              src={item.url}
              alt={item.title}
            />

            <AnimatePresence mode="wait">
              {index === i && (
                <motion.article
                  variants={article}
                  initial="hidden"
                  animate="show"
                  className="absolute flex rounded-xl flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden 
                 bg-gradient-to-t dark:from-gray-900/60 from-gray-100/60  from-20% to-transparent to-80%  w-full"
                >
                  <motion.h1
                    variants={article}
                    className="text-[30px] font-jaini font-bold text-white"
                  >
                    {item?.title}
                  </motion.h1>
                  <motion.p
                    variants={article}
                    className="leading-[120%] text-white flex flex-row gap-2 text-[20px]"
                  >
                    <LiaBedSolid /><PiBathtubLight />
                    <MdOutlineLocalLaundryService /><LuCookingPot />
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Index() {
  const [index, setIndex] = useState(2);

  return (
    <div className="relative h-[60vh] items-center bg-[#f8f5f0]">
      <div>
        <h1 className="font-jaini text-[50px] text-center">Rooms & Suites</h1>
      </div>
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  );
}






