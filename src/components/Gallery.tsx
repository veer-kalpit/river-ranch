"use client";
import React, { useRef } from "react";
import {  motion } from "framer-motion";
import { useInView } from "framer-motion";
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

// Define Image Type
interface ItemType {
  id: number;
  url: StaticImageData;
  title: string;
}

// Image List with Dynamic Width & Height
const items: ItemType[] = [
  { id: 1, url: Img1, title: "Image 1" },
  { id: 2, url: Img4, title: "Image 2" },
  { id: 3, url: Img7, title: "Image 3" },
  { id: 4, url: Img2, title: "Image 4" },
  { id: 5, url: Img5, title: "Image 5" },
  { id: 6, url: Img8, title: "Image 6" },
  { id: 7, url: Img3, title: "Image 7" },
  { id: 8, url: Img6, title: "Image 8" },
  { id: 9, url: Img9, title: "Image 9" },
];

function UnsplashGrid() {

  return (
    <section id="gallery" className="bg-white z-[50] relative">
      <div className="container mx-auto  px-0 py-20 lg:py-40">
        <h1 className="text-[#333333] font-inter font-light text-[16px] leading-[30%] uppercase text-center ">
          Explore River Ranch
        </h1>
        <h1 className="text-[48px] leading-[65px] font-semibold font-cormorant mt-10 text-[#205781] text-center">
          Gallery
        </h1>
        <div className=" columns-3 gap-4 mt-[100px] px-10 w-fit mx-auto">
          {items.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ImageItemProps {
  item: ItemType;
  index: number;
}

function ImageItem({ item }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      className="inline-block group w-full rounded-md relative bg-white cursor-pointer"
    >
      <motion.div>
        <Image
          src={item.url}
          alt={item.title}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-md"
        />
      </motion.div>
    </motion.figure>
  );
}



export default UnsplashGrid;
