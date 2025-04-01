"use client";

import { motion, MotionProps, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/lib";

const items = [
  {
    id: 1,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/1.jpg?v=3",
    title: "Room Cleaning",
    pricing: "50",
    descriptions: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
  {
    id: 2,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/1.jpg?v=3",
    title: "Room Cleaning",
    pricing: "50",
    descriptions: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
  {
    id: 3,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/1.jpg?v=3",
    title: "Room Cleaning",
    pricing: "50",
    descriptions: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
  {
    id: 4,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/2.jpg?v=3",
    title: "Drinks Included",
    pricing: "30",
    descriptions: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
  {
    id: 5,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/3.jpg?v=3",
    title: "Room Breakfast",
    pricing: "30",
    descriptions: [
      "HOTEL ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
  {
    id: 6,
    url: "https://river-ranch.mdbstech.in/theme/img/pricing/4.jpg?v=3",
    title: "Safe & Secure",
    pricing: "15",
    descriptions: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
  },
];

const slideAnimation: MotionProps = {
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: false },
};

const MotionCard = ({ item }: { item: (typeof items)[0] }) => (
  <motion.div
    {...slideAnimation}
    className="group relative flex flex-col h-[600px] w-[400px] overflow-hidden"
  >
    <motion.img
      className="w-full h-full object-cover"
      src={item.url}
      alt={item.title}
    />
    <div className="bg-white p-10 items-center">
      <h3 className="font-jaini text-2xl">{item.title}</h3>
      <h4>
        <span className="font-jaini text-[50px]">${item.pricing}</span> / month
      </h4>
      <ul>
        {item.descriptions.map((desc, index) => (
          <li
            key={`${item.id}-${index}`}
            className="font-amatic text-[20px] font-medium"
          >
            {index < 2
              ? "✅"
              : index === item.descriptions.length - 1
              ? "❌"
              : ""}{" "}
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: mainRef });
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateCarouselWidth = throttle(() => {
      const parent = carouselRef.current?.parentElement;
      const newPosition =
        (carouselRef.current?.scrollWidth ?? 0) -
        window.innerWidth +
        (parent?.offsetLeft ?? 0) * 2;
      setCarouselWidth(-newPosition);
    }, 200);

    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);

    return () => window.removeEventListener("resize", updateCarouselWidth);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [carouselWidth, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={mainRef} className="bg-[#222222] flex h-[150vh]">
      <motion.div
        className="w-[800px] sticky top-0 flex flex-col justify-center p-10 text-white"
        style={{ y }}
      >
        <h1 className="text-3xl font-bold">Extra Service</h1>
        <p className="mt-4 text-lg">
          The best prices for your relaxing vacation. The utanislen quam
          nestibulum ac quame odion elementum sceisue the aucan
        </p>
        <p className="mt-2 text-lg">
          Orci varius natoque penatibus et magnis disney parturient monte
          nascete ridiculus mus nellen etesque habitant morbine.
        </p>
        <p className="mt-4 text-lg">
          For More information{" "}
          <span className="font-semibold">+919686985795</span>
        </p>
      </motion.div>

      <div className="w-[1000px] h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        <motion.div ref={carouselRef} className="flex gap-5" style={{ x }}>
          {items.map((item) => (
            <MotionCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
