import React from "react";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePets, MdOutlineHotel } from "react-icons/md";

const BookingInfo = () => {
  return (
    <div className="flex flex-col gap-20 z-[50] relative">
      {/* Heading & Description */}
      <div>
        <h3 className="text-[48px] font-semibold font-cormorant text-left">
          Booking Information
        </h3>
        <p className="mt-6 font-inter text-[16px] leading-[25px] w-[361px] text-left">
          River Ranch operates on a pre-booking basis only. We don&apos;t accept
          walk-ins to ensure we can provide the best possible experience for our
          guests. Advance reservations allow us to prepare your accommodations
          perfectly and plan for your specific needs.
        </p>
      </div>

      {/* Booking Details List */}
      <div>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-5 font-inter text-[16px] leading-[25px] items-center">
            <CiCalendar className="text-[24px] text-[#205781]" />
            Minimum 2-night stay required on weekends
          </li>
          <li className="flex gap-5 font-inter text-[16px] leading-[25px] items-center">
            <MdOutlineHotel className="text-[24px] text-[#205781]" />
            Check-in: 2:00 PM, Check-out: 11:00 AM
          </li>
          <li className="flex gap-5 font-inter text-[16px] leading-[25px] items-center">
            <MdOutlinePets className="text-[24px] text-[#205781]" />
            Pet fees apply for pet-friendly accommodations.
          </li>
        </ul>

        {/* Booking Button */}
        <button
          type="button"
          className="bg-[#205781] text-center py-4 rounded-[50px] mt-10 text-white w-full max-w-[480px] 
                     hover:bg-[#1a4868] transition-all duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingInfo;
