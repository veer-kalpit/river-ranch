"use client";
import React, { useState, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Import your images
import Img1 from "../../public/gallery/img1.png";
import Img2 from "../../public/gallery/img2.png";
import Img3 from "../../public/gallery/img3.png";
import Img4 from "../../public/gallery/img4.png";
import Img5 from "../../public/gallery/img5.png";
import Img6 from "../../public/gallery/img6.png";
import Img7 from "../../public/gallery/img7.png";
import Img8 from "../../public/gallery/img8.png";
import Img9 from "../../public/gallery/img9.png";

// Image type
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

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 3,
};

function UnsplashGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-white z-[50] relative">
      <div className="container mx-auto px-4 py-20 lg:py-40">
        <h1 className="text-[#333333] font-inter font-light text-[16px] uppercase text-center">
          Explore River Ranch
        </h1>
        <h1 className="text-[48px] leading-[65px] font-semibold font-cormorant mt-10 text-[#205781] text-center">
          Gallery
        </h1>

        <div className="p-4 lg:p-40">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((item, index) => (
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
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
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}

function ImageItem({ item, index, hoveredId, setHoveredId }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isHovered = hoveredId === item.id;
  const isOtherHovered = hoveredId !== null && hoveredId !== item.id;

  const sizeClass = isHovered
    ? "w-full scale-[1.20]"
    : isOtherHovered
    ? "w-full scale-[0.8] opacity-10"
    : "w-full";

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className={`relative transition-all duration-500 ease-in-out cursor-pointer`}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div
        className={`overflow-hidden rounded-md ${sizeClass} transition-all duration-500 ease-in-out`}
      >
        <Image
          src={item.url}
          alt={item.title}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </motion.div>
  );
}

export default UnsplashGrid;
