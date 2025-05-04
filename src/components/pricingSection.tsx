import React, { useRef } from "react";

interface PricingSectionProps {
  closeModal: () => void;
}

export default function PricingSection({ closeModal }: PricingSectionProps) {
  const pageRef = useRef(null);

  const pricingData = [
    { guests: "0-10", price: "2000 per pax" },
    { guests: "10-20", price: "1500 per pax" },
    { guests: "20+", price: "1300 per pax" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeModal} // closes when clicking outside
      />

      {/* Modal */}
      <div className="relative z-[101] bg-white p-6 rounded-lg w-[90%] sm:w-[500px]">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-black text-2xl font-bold z-[102]"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div ref={pageRef} className="text-center">
          <h2 className="text-[32px] lg:text-[40px] font-cormorant text-[#205781] mt-4 mb-6">
            Pricing
          </h2>

          <div className="w-full">
            <div className="flex justify-between text-[20px] lg:text-[28px] font-cormorant text-[#333333] mb-4 px-2">
              <p className="text-center w-full">No. of Guests</p>
              <p className="text-center w-full">Price</p>
            </div>

            {pricingData.map(({ guests, price }, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#EDF7FF] py-4 rounded-md mb-3 text-[#333333]"
              >
                <p className="text-center w-full font-inter text-[16px] lg:text-[20px]">
                  {guests}
                </p>
                <p className="text-center w-full font-inter text-[16px] lg:text-[20px]">
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
