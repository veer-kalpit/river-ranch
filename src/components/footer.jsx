"use client";
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
import Logo from "../../public/logo.png";

export async function submitBooking(data) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbw-fgEsMbbBelKdVyK2MZhWfVpFBevF5PsFgc8jstBrT9gDHyUDvHNNTZy86Zmc0Gzf/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Booking failed");
  }

  return result;
}

const Footer = forwardRef((props, ref) => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    start: "",
    end: "",
    notes: "",
    request: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(null);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
const fetchBookings = () => {
  axios
    .get(
      "https://script.google.com/macros/s/AKfycbw-fgEsMbbBelKdVyK2MZhWfVpFBevF5PsFgc8jstBrT9gDHyUDvHNNTZy86Zmc0Gzf/exec"
    )
    .then((response) => {
      const bookings = response.data?.bookings;
      setBookings(Array.isArray(bookings) ? bookings : []);
    })
    .catch((error) => console.error("Error fetching bookings:", error));
};


  useEffect(() => {
    fetchBookings();
  }, []);

  const isDateAvailable = (date) => {
    return !bookings.some(
      (booking) =>
        new Date(booking.start).toDateString() <= date.toDateString() &&
        new Date(booking.end).toDateString() >= date.toDateString()
    );
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date < new Date()) return "past-date";
      return isDateAvailable(date) ? "available-date" : "booked-date";
    }
    return "";
  };

  const tileDisabled = ({ date, view }) => {
    return view === "month" && !isDateAvailable(date);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0);
    setSelectedDate(localDate);
    setFormData({
      ...formData,
      start: localDate.toISOString().split("T")[0],
    });
    setShowCheckInCalendar(false);
  };

  const handleCheckoutDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0);
    setSelectedCheckoutDate(localDate);
    setFormData({
      ...formData,
      end: localDate.toISOString().split("T")[0],
    });
    setShowCheckOutCalendar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, start, end, guests, request } = formData;

    if (new Date(end) <= new Date(start)) {
      alert("Checkout date must be after the check-in date.");
      return;
    }

    if (!isDateAvailable(new Date(start))) {
      alert(
        "Selected check-in date is already booked. Please choose another date."
      );
      return;
    }

    try {
      await submitBooking({
        name,
        email,
        phone,
        guests: Number(guests),
        notes: request,
        start,
        end,
      });

      alert("Booking successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        start: "",
        end: "",
        guests: "",
        request: "",
      });
      setSelectedDate(null);
      setSelectedCheckoutDate(null);
      fetchBookings();
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    }
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
                  <h1 className="text-white text-xl font-cormorant">
                    Location
                  </h1>
                  <p className="text-white text-sm font-inter">
                    CMG8+M5J, Shrirangapattana, Karnataka 571427
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={16} color="white" className="mt-1.5" />
                <div>
                  <h1 className="text-white text-xl font-cormorant">Phone</h1>
                  <p className="text-white text-sm font-inter">
                    +91 9686985795
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock5 size={16} color="white" className="mt-1.5" />
                <div>
                  <h1 className="text-white text-xl font-cormorant">
                    Booking hours
                  </h1>
                  <p className="text-white text-sm font-inter">
                    Monday - Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-white text-xl font-cormorant">
                  Contact Us
                </h1>
                <div className="flex gap-3 mt-3">
                  <a href="tel:+919686985795">
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center cursor-pointer">
                      <Phone size={16} color="white" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919686985795"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center cursor-pointer">
                      <MessageCircleMore size={16} color="white" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/river_ranch_mysuru?igsh=dDhjMzZoNGRxeHhi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center cursor-pointer">
                      <Instagram size={16} color="white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="w-full space-y-8">
            <h1 className="text-white text-2xl font-cormorant">
              Request a Booking
            </h1>

            <div className="w-full max-w-[400px]">
              <label className="text-white text-sm font-inter">
                Select Check-In Date
              </label>
              <input
                type="text"
                value={formData.start || "Select a Date"}
                onClick={() => {
                  setShowCheckInCalendar(!showCheckInCalendar);
                  setShowCheckOutCalendar(false); // Close check-out calendar if check-in is selected
                }}
                className="w-full border border-white text-white placeholder-white px-3 py-5 cursor-pointer mt-4"
                readOnly
              />
              {showCheckInCalendar && (
                <div className="mt-4">
                  <Calendar
                    value={selectedDate}
                    onChange={handleDateSelect}
                    tileClassName={tileClassName}
                    tileDisabled={tileDisabled}
                    minDate={new Date()}
                    view="month"
                    className="rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            <div className="w-full max-w-[400px]">
              <label className="text-white text-sm font-inter">
                Select Checkout Date
              </label>
              <input
                type="text"
                value={formData.end || "Select a Date"}
                onClick={() => {
                  setShowCheckOutCalendar(!showCheckOutCalendar);
                  setShowCheckInCalendar(false); // Close check-in calendar if check-out is selected
                }}
                className="w-full border border-white text-white placeholder-white px-3 py-5 cursor-pointer mt-4"
                readOnly
              />
              {showCheckOutCalendar && (
                <div className="mt-4">
                  <Calendar
                    value={selectedCheckoutDate}
                    onChange={handleCheckoutDateSelect}
                    tileClassName={tileClassName}
                    tileDisabled={tileDisabled}
                    minDate={new Date(formData.start || new Date())}
                    view="month"
                    className="rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-4 w-full sm:max-w-[315px]">
                  <label className="text-white text-sm font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-white text-white px-3 py-5"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full sm:max-w-[315px]">
                  <label className="text-white text-sm font-inter">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-white text-white px-3 py-5"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-white text-white px-3 py-5"
                  placeholder="Phone Number"
                />
              </div>

              <div className="flex flex-col gap-4 w-full sm:max-w-[200px]">
                <label className="text-white text-sm font-inter">Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Number of Guests"
                />
              </div>

              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Special Request
                </label>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  className="w-full border border-white text-white px-3 py-5"
                  placeholder="Any special requests?"
                />
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-full border-2 border-white text-white cursor-pointer hover:scale-[1.1] transition-all duration-150"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* footer end  */}
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
