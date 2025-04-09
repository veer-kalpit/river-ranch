"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import Masonry from "react-masonry-css";
import Image, { StaticImageData } from "next/image";

// Import Images
import Img1 from "../../public/gallery/img1.png";
import Img2 from "../../public/gallery/img2.png";
import Img3 from "../../public/gallery/img3.png";
import Img4 from "../../public/gallery/img4.png";
import Img5 from "../../public/gallery/img5.png";
import Img6 from "../../public/gallery/img6.png";
import Img7 from "../../public/gallery/img7.png";
import Img8 from "../../public/gallery/img8.png";
import Img9 from "../../public/gallery/img9.png";

// Image Type
interface ItemType {
  id: number;
  url: StaticImageData;
  title: string;
}

const items: ItemType[] = [
  { id: 1, url: Img1, title: "Image 1" },
  { id: 2, url: Img2, title: "Image 2" },
  { id: 3, url: Img3, title: "Image 3" },
  { id: 4, url: Img4, title: "Image 4" },
  { id: 5, url: Img5, title: "Image 5" },
  { id: 6, url: Img6, title: "Image 6" },
  { id: 7, url: Img7, title: "Image 7" },
  { id: 8, url: Img8, title: "Image 8" },
  { id: 9, url: Img9, title: "Image 9" },
];

// Animation Variants
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,

};

function UnsplashGrid() {
  const [heights, setHeights] = useState<number[]>([]);

  // Randomize heights every 5 seconds
  useEffect(() => {
    const randomHeights = () =>
      items.map(() => 300 + Math.floor(Math.random() * 150)); // between 300-450px

    setHeights(randomHeights());

    const interval = setInterval(() => {
      setHeights(randomHeights());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="bg-white z-[50] relative">
      <div className="container mx-auto px-4 py-20 lg:py-40">
        <h1 className="text-[#333333] font-inter font-light text-[16px] leading-[30%] uppercase text-center">
          Explore River Ranch
        </h1>
        <h1 className="text-[48px] leading-[65px] font-semibold font-cormorant mt-10 text-[#205781] text-center">
          Gallery
        </h1>

        <div className="mt-[100px]">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-4"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((item, index) => (
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                height={heights[index] || 150}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}

interface ImageItemProps {
  item: ItemType;
  index: number;
  height: number;
}

function ImageItem({ item, index, height }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="overflow-hidden rounded-md bg-white shadow-sm transition-all duration-700 ease-in-out"
      style={{ height }}
    >
      <Image
        src={item.url}
        alt={item.title}
        width={300}
        height={height}
        className="w-full h-full object-cover rounded-md"
      />
    </motion.div>
  );
}

export default UnsplashGrid;
