"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Cottage from "../../../../public/cottage.png";

const rooms = [
  {
    id: 1,
    name: "Riverside Cottage",
    src: Cottage,
    price: "7500",
    desc: "A peaceful cottage with panoramic river views, nestled beside our organic garden for maximum privacy.",
    guest: "4",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    src: Cottage,
    price: "8500",
    desc: "Experience breathtaking mountain views with cozy interiors and modern amenities for a serene getaway.",
    guest: "5",
  },
  {
    id: 3,
    name: "Forest Cabin",
    src: Cottage,
    price: "7000",
    desc: "Surrounded by lush greenery, this cabin offers a tranquil escape with all modern comforts.",
    guest: "3",
  },
];

export default function RoomDetails({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const isBooking = searchParams.get("book");

  const room = rooms.find((room) => room.id === Number(params.id));

  if (!room) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center bg-[#F5F8FA] py-10 px-4 md:px-10">
      <h2 className="text-3xl md:text-[48px] font-semibold font-cormorant text-[#205781] text-center">
        {room.name}
      </h2>
      <Image
        src={room.src}
        alt={room.name}
        width={600}
        height={400}
        className="rounded-lg mt-6"
      />
      <p className="text-lg md:text-[16px] text-center text-[#050E14] mt-4 max-w-xl">
        {room.desc}
      </p>
      <p className="text-xl font-semibold text-black mt-4">
        Price: ${room.price} / Night
      </p>
      <p className="text-lg text-black mt-2">Guests: {room.guest}</p>

      {isBooking ? (
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full text-lg">
          Proceed to Booking
        </button>
      ) : (
        <a href={`/rooms/${params.id}?book=true`}>
          <button className="mt-6 bg-[#205781] text-white px-6 py-3 rounded-full text-lg">
            Book Now
          </button>
        </a>
      )}
    </div>
  );
}
