import { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  MapPin,
  Clock5,
  Phone,
  MessageCircleMore,
  Instagram,
} from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Logo from "../../public/logo.png"; // You can use this if needed
import PricingSection from "./pricingSection";

const Footer = forwardRef((props, ref) => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    checkIn: "",
    guests: "",
    request: "",
    slot: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const togglePricingModal = () => {
    setShowPricingModal(!showPricingModal);
  };

  const closePricingModal = () => {
    setShowPricingModal(false);
  };

const fetchBookings = () => {
  axios
    .get("/api/bookings")
    .then((response) => {
      console.log("Bookings data:", response.data); // Log the response data
      setBookings(response.data);
    })
    .catch((error) => console.error("Error fetching bookings:", error));
};


  useEffect(() => {
    fetchBookings();
  }, []);

  const isDateAvailable = (date) => {
    return !bookings.some(
      (booking) => new Date(booking.date).toDateString() === date.toDateString()
    );
  };

const tileClassName = ({ date, view }) => {
  if (view === "month") {
    const today = new Date(new Date().toDateString());
    if (date < today) return "bg-gray-300 text-gray-500 rounded-full"; // Disabled style

    const dateString = date.toLocaleDateString("en-CA");
    const bookingsOnDate = bookings.filter(
      (b) =>
        new Date(b.checkIn).toLocaleDateString("en-CA") === dateString
    );

    const hasMorningSlot = bookingsOnDate.some(
      (b) => b.slot === "morning"
    );
    const hasEveningSlot = bookingsOnDate.some(
      (b) => b.slot === "evening"
    );

    if (hasMorningSlot && hasEveningSlot) {
      return "bg-both-booked rounded-full";
    } else if (hasMorningSlot) {
      return "bg-morning-booked rounded-full";
    } else if (hasEveningSlot) {
      return "bg-evening-booked rounded-full";
    } else {
      return "bg-available rounded-full"; // Only if date is today or in future
    }
  }
};



const tileDisabled = ({ date, view }) => {
  if (view !== "month") return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return true; // Disable past dates

  const dateISO = date.toISOString().split("T")[0];
  const slots = bookings
    .filter((booking) => booking.date === dateISO)
    .map((booking) => booking.slot);

  const isFullyBooked = slots.includes("morning") && slots.includes("evening");

  return isFullyBooked;
};




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckInDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0);
    setSelectedDate(localDate);

    setFormData({
      ...formData,
      checkIn: localDate.toISOString().split("T")[0],
    });
    setShowCalendar(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, phone, checkIn, guests, slot } =
      formData;

    if (
      !fullname ||
      !email ||
      !phone ||
      !checkIn ||
      !guests ||
      !slot
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBooking = {
      fullname,
      email,
      phone,
      date: checkIn,
      checkIn,
      guests: Number(guests),
      slot,
    };

    axios
      .post("/api/bookings", newBooking)
      .then(() => {
        alert("Booking successful!");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          checkIn: "",
          guests: "",
          request: "",
          slot: "",
        });
        setSelectedDate(null);
        fetchBookings();
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        alert("Failed to create booking. Please try again.");
      });
  };

  return (
    <section ref={ref} id="contact" className="z-[50] relative">
      <div className="w-screen h-fit min-h-screen bg-[#205781] overflow-hidden relative">
        <div className="w-fit h-fit text-center space-y-3 mx-auto mt-10">
          <h6 className="font-inter font-extralight text-[#FFFFFF] text-[12px] tracking-[3.5px]">
            GET IN TOUCH WITH US
          </h6>
          <h1 className="font-cormorant text-white text-4xl md:text-5xl">
            Contact & Booking
          </h1>
        </div>

        <div className="w-full h-fit flex flex-col-reverse lg:flex-row gap-20 mt-10 md:mt-20 mx-auto px-5 lg:px-30">
          {/* Contact Info */}
          <div className="w-full h-fit space-y-8">
            <h1 className="font-cormorant text-white text-2xl">
              Contact Information
            </h1>
            <div className="space-y-8">
              <div className="flex gap-3 items-start">
                <MapPin size={16} color="white" className="mt-1.5" />
                <div>
                  <h1 className="font-cormorant text-white text-xl">
                    Location
                  </h1>
                  <h1 className="font-inter text-white text-sm">
                    CMG8+M5J, Shrirangapattana, Karnataka 571427
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={16} color="white" className="mt-1.5" />
                <div>
                  <h1 className="font-cormorant text-white text-xl">Phone</h1>
                  <h1 className="font-inter text-white text-sm">
                    +91 9686985795
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock5 size={16} color="white" className="mt-1.5" />
                <div>
                  <h1 className="font-cormorant text-white text-xl">
                    Booking hours
                  </h1>
                  <h1 className="font-inter text-white text-sm">
                    Monday - Sunday: 9:00 AM - 6:00 PM
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="font-cormorant text-white text-xl">
                  Contact Us
                </h1>
                <div className="flex gap-3 mt-3">
                  <a href="tel:+919686985795">
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                      <Phone size={16} color="white" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919686985795"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                      <MessageCircleMore size={16} color="white" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/river_ranch_mysuru?igsh=dDhjMzZoNGRxeHhi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                      <Instagram size={16} color="white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="w-full">
            <h1 className="font-cormorant text-white text-2xl mb-5">
              Request a Booking
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Input Fields */}
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  onClick={togglePricingModal}
                  className="border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Enter number of guests"
                />
              </div>
              <div>
                <label className="text-white text-sm font-inter">
                  Select Check-In Date
                </label>
                <input
                  type="text"
                  value={formData.checkIn || "Select a Date"}
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="border border-white text-white placeholder-white px-3 py-5 cursor-pointer mt-4"
                  readOnly
                />
                {showCalendar && (
                  <div className="mt-4">
                    <Calendar
                      value={selectedDate}
                      onChange={handleCheckInDateSelect}
                      minDate={new Date()}
                      className="rounded-lg shadow-md"
                      tileClassName={tileClassName}
                      tileDisabled={tileDisabled}
                    />
                  </div>
                )}
              </div>
             
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">
                  Preferred Slot
                </label>
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  className="border border-white bg-[#205781] text-white px-3 py-5"
                >
                  <option value="">Select a Slot</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-white text-sm font-inter">
                  Special Request
                </label>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  className="border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Any special requests?"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full sm:max-w-[665px] h-fit font-inter bg-white text-[#205781] text-sm flex justify-center items-center py-4 rounded-full cursor-pointer hover:bg-white/40 hover:text-white transition-all duration-300 ease-in-out mt-5"
              >
                BOOK NOW
              </button>
            </div>

            {/* Pricing Modal */}
            {showPricingModal && (
              <PricingSection closeModal={closePricingModal} />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[500px] md:h-[350px] mt-10 md:mt-20">
          <hr className="hidden md:block w-full border-[1px] border-white" />

          <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center gap-3 ">
            {/* Logo  */}
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-10 md:mt-0">
              <Image
                className="w-[150px] h-fit object-cover"
                src={Logo}
                alt="explore_background"
              />

              <h6 className="font-inter font-extralight text-[#FFFFFF] text-[10px]">
                Copyright © River Ranch.
              </h6>
      </div>

            {/* line  */}
            <div className="hidden md:block border border-white h-full"></div>

            {/* contacts  */}
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3">
              <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
                CMG8+M5J <br />
                Shrirangapattana <br />
                Karnataka 571427
              </h6>

              <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
                Riverranch.com
              </h6>

              <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
                +91 9686985795
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Footer.displayName = "Footer";
export default Footer;
