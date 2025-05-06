"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const allSlots = [
  "09:00 am - 12:00 pm",
  "12:00 pm - 03:00 pm",
  "03:00 pm - 06:00 pm",
  "06:00 pm - 09:00 pm",
];

const pricingData = [
  { min: 1, max: 10, pricePerGuest: 2000 },
  { min: 11, max: 20, pricePerGuest: 1500 },
  { min: 21, max: Infinity, pricePerGuest: 1300 },
];

const calculateTotalPrice = (guestCount) => {
  const guests = parseInt(guestCount, 10);
  if (isNaN(guests) || guests <= 0) return 0;

  const tier = pricingData.find(
    (range) => guests >= range.min && guests <= range.max
  );

  return tier ? guests * tier.pricePerGuest : 0;
};


const bookingForm = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    checkIn: "",
    guests: "",
    request: "",
    slot: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]); // Fixed: state for available slots
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const fetchBookings = () => {
    axios
      .get("/api/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const isSlotAvailable = (date, slot) => {
    const dateString = date.toLocaleDateString("en-CA");
    const bookingsOnDate = bookings.filter(
      (b) => new Date(b.checkIn).toLocaleDateString("en-CA") === dateString
    );
    const bookedSlots = bookingsOnDate.map((b) => b.slot);
    return !bookedSlots.includes(slot);
  };

  const handleCheckInDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0);
    setSelectedDate(localDate);

    const availableSlotsForDate = allSlots.filter((slot) =>
      isSlotAvailable(localDate, slot)
    );
    setAvailableSlots(availableSlotsForDate);

    setFormData({
      ...formData,
      checkIn: localDate.toISOString().split("T")[0],
      slot: "",
    });

    setShowCalendar(false);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const today = new Date(new Date().toDateString());
      if (date < today) return "bg-gray-300 text-gray-500 rounded-full";

      const dateString = date.toLocaleDateString("en-CA");
      const bookingsOnDate = bookings.filter(
        (b) => new Date(b.checkIn).toLocaleDateString("en-CA") === dateString
      );
      const bookedSlots = bookingsOnDate.map((b) => b.slot);
      const fullyBooked = allSlots.every((slot) => bookedSlots.includes(slot));

      if (fullyBooked) {
        return "bg-fully-booked rounded-full";
      }

      return "bg-available rounded-full";
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

    return slots.length === allSlots.length;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname,  phone, checkIn, guests, slot } = formData;
    if (!fullname  || !phone || !checkIn || !guests || !slot) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBooking = {
      fullname,
      phone,
      date: checkIn,
      checkIn,
      guests,
      slot,
    };

    axios
      .post("/api/bookings", newBooking)
      .then(() => {
        alert("Booking successful!");

        const message = `New Booking 
Name: ${fullname}
Phone: ${phone}
Date: ${checkIn}
Guests: ${guests}
Slot: ${slot}
Request: ${formData.request || "None"}`;

        const whatsappURL = `https://wa.me/919686985795?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappURL, "_blank");

        setFormData({
          fullname: "",
          phone: "",
          checkIn: "",
          guests: "",
          request: "",
          slot: "",
        });
        setSelectedDate(null);
        fetchBookings();
        setCurrentStep(4);
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        alert("Failed to create booking. Please try again.");
      });
  };
  return (
    <div>
      <div className="w-full">
        <h1 className="font-cormorant text-white text-2xl mb-5">
          Request a Booking
        </h1>

        {/* Step 1: Date & Slot */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-inter flex flex-col">
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
                    onChange={handleCheckInDateSelect}
                    value={selectedDate}
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
                {availableSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Personal Info */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <div className="flex flex-col gap-4 sm:col-span-2">
              <label className="text-white text-sm font-inter">
                Number of Guests
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min={1}
                  className="border border-white text-white bg-[#205781] px-3 py-5 w-1/2"
                  placeholder="Enter number of guests"
                />
                <span className="text-white font-inter text-sm">
                  Total Price: ₹{calculateTotalPrice(formData.guests)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Special Request & Submit */}
        {currentStep === 3 && (
          <>
            <div className="flex flex-col gap-4 w-full mt-4">
              <label className="text-white text-sm font-inter">
                Special Request (Optional)
              </label>
              <textarea
                name="request"
                value={formData.request}
                onChange={handleChange}
                className="border w-full border-white text-white placeholder-white px-3 py-5"
                placeholder="Any special requests?"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full sm:max-w-[665px] h-fit font-inter bg-white text-[#205781] text-sm flex justify-center items-center py-4 rounded-full cursor-pointer hover:bg-white/40 hover:text-white transition-all duration-300 ease-in-out mt-5"
            >
              BOOK NOW
            </button>
          </>
        )}
        {/* Step 4: Thank You */}
        {currentStep === 4 && (
          <div className="w-full text-center mt-10">
            <h2 className="text-white text-3xl font-cormorant mb-4">
              Thank You!
            </h2>
            <p className="text-white text-lg font-inter">
              Your booking has been successfully submitted. We’ll contact you
              shortly!
            </p>
            <button
              onClick={() => setCurrentStep(1)}
              className="mt-6 px-6 py-3 bg-white text-[#205781] font-inter rounded-full hover:bg-white/40 hover:text-white transition-all"
            >
              Make Another Booking
            </button>
          </div>
        )}

        {/* Step Navigation Buttons */}
        <div className="mt-6 flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="text-white border border-white px-5 py-2 rounded-full"
            >
              Back
            </button>
          )}
          {currentStep < 3 && (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="text-white bg-blue-500 px-5 py-2 rounded-full"
              disabled={
                (currentStep === 1 && (!formData.checkIn || !formData.slot)) ||
                (currentStep === 2 &&
                  (!formData.fullname || !formData.phone || !formData.guests))
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default bookingForm;
