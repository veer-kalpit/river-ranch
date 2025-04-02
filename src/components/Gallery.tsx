"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  { id: 2, url: Img2, title: "Image 2" },
  { id: 3, url: Img3, title: "Image 3" },
  { id: 4, url: Img4, title: "Image 4" },
  { id: 5, url: Img5, title: "Image 5" },
  { id: 6, url: Img6, title: "Image 6" },
  { id: 7, url: Img7, title: "Image 7" },
  { id: 8, url: Img8, title: "Image 8" },
  { id: 9, url: Img9, title: "Image 9" },
];

function UnsplashGrid() {
  const [selected, setSelected] = useState<ItemType | null>(null);

  return (
    <>
      <div className="container mx-auto sm:p-4 px-0 ">
        <h1 className="text-[#333333] font-inter font-light text-[16px] leading-[30%] uppercase text-center ">
          Explore River Ranch
        </h1>
        <h1 className="text-[48px] leading-[65px] font-semibold font-cormorant mt-10 text-[#205781] text-center">
          Gallery
        </h1>
        <div className="columns-2 2xl:columns-3 gap-10 mt-[100px]">
          {items.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}

interface ImageItemProps {
  item: ItemType;
  index: number;
  setSelected: (item: ItemType | null) => void;
}

function ImageItem({ item, setSelected }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      className="inline-block group w-full rounded-md relative bg-white cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <motion.div whileHover={{ scale: 1.05 }}>
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

interface ModalProps {
  selected: ItemType | null;
  setSelected: (item: ItemType | null) => void;
}

function Modal({ selected, setSelected }: ModalProps) {
  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, setSelected]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-lg font-bold p-2 bg-gray-200 rounded-full"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            {/* Image Display */}
            <Image
              src={selected.url}
              alt={selected.title}
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-md"
            />

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UnsplashGrid;
