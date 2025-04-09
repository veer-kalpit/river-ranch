"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    url: "/yoga/yogaVid2.mp4",
    title: "Yoga Room 1",
    urlthumbnail: "/yoga/R.png",
  },
  {
    id: 2,
    url: "/yoga/yogaVid3.mp4",
    title: "Yoga Room 2",
    urlthumbnail: "/yoga/A.png",
  },
  {
    id: 5,
    url: "/yoga/yogaVid.mp4",
    title: "Yoga Video",
    urlthumbnail: "/yoga/N.png",
  },
  {
    id: 3,
    url: "/yoga/yogaVid4.mp4",
    title: "Yoga Room 3",
    urlthumbnail: "/yoga/C.png",
  },
  {
    id: 4,
    url: "/yoga/yogaVid5.mp4",
    title: "Yoga Room 4",
    urlthumbnail: "/yoga/H.png",
  },
];

type item = {
  id: number;
  url: string;
  urlthumbnail: string;
  title: string;
};

interface GalleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number;
}

function Gallery({ items, setIndex, index }: GalleryProps) {
  return (
    <div className="w-full px-5 max-w-screen overflow-hidden">
      <div className="flex gap-1 pb-10 overflow-x-auto no-scrollbar">
        {items.map((item: item, i: number) => {
          const isVideo = item.url.endsWith(".mp4");

          return (
            <motion.div
              key={item.id}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out origin-center
              ${index === i ? "w-[120px]" : "w-[50px]"}
            `}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIndex(i)}
            >
              {isVideo ? (
                <motion.video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-[120px] h-[212px] rounded-[20px] object-cover"
                >
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              ) : (
                <motion.img
                  src={item.url}
                  alt={item.title}
                  className="w-[120px] h-[212px] object-cover"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Index() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="relative px-6">
      <p className="font-inter font-normal text-[14px] leading-[25px] text-center mb-8 capitalize">
        Yoga is a holistic practice that harmonizes the body, mind, and soul,
        promoting inner peace and physical vitality. Through mindfulness,
        meditation, and movement, it offers a transformative healing experience,
        easing stress, improving well-being, and fostering self-awareness.
      </p>
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  );
}
