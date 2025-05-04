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

const Footer = forwardRef((props, ref) => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    request: "",
    slot: "", // Added slot field
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // State to show calendar for checkIn
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false); // State to show calendar for checkOut

  // Create reusable fetch function
  const fetchBookings = () => {
    axios
      .get("/api/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  // useEffect on mount
  useEffect(() => {
    fetchBookings();
  }, []);

  // Check if the selected date is available
  const isDateAvailable = (date) => {
    return !bookings.some(
      (booking) => new Date(booking.date).toDateString() === date.toDateString()
    );
  };

  // Assign class for tile based on availability
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      // Cross out past dates
      if (date < new Date()) {
        return "past-date"; // Apply a CSS class to cross out past dates
      }
      return isDateAvailable(date) ? "available-date" : "booked-date";
    }
    return "";
  };

  // Disable selection of booked dates
  const tileDisabled = ({ date, view }) => {
    return view === "month" && !isDateAvailable(date);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle check-in date selection
  const handleCheckInDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0); // Set the time to noon to avoid timezone issues
    setSelectedDate(localDate);

    setFormData({
      ...formData,
      checkIn: localDate.toISOString().split("T")[0], // Save only the date part (YYYY-MM-DD)
    });
    setShowCalendar(false); // Close calendar on date select
  };

  // Handle check-out date selection
  const handleCheckOutDateSelect = (date) => {
    const localDate = new Date(date);
    localDate.setHours(12, 0, 0, 0);
    setSelectedCheckOutDate(localDate);
    setFormData({
      ...formData,
      checkOut: localDate.toISOString().split("T")[0], // Save only the date part (YYYY-MM-DD)
    });
    setShowCheckOutCalendar(false); // Close calendar for checkOut on date select
  };

  // Submit booking
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, phone, checkIn, checkOut, guests, slot } =
      formData;

    if (
      !fullname ||
      !email ||
      !phone ||
      !checkIn ||
      !checkOut ||
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
  date: checkIn,  // Use checkIn as date (or combine checkIn and checkOut if needed)
  checkIn,
  checkOut,
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
          checkOut: "",
          guests: "",
          request: "",
          slot: "", // Reset slot after submission
        });
        setSelectedDate(null);
        setSelectedCheckOutDate(null);
        fetchBookings(); // Refetch bookings to update the list
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        alert("Failed to create booking. Please try again.");
      });
  };

  return (
    <section ref={ref} id="contact" className="z-[50] relative">
      <div className="w-screen h-fit min-h-screen bg-[#205781] overflow-hidden relative ">
        {/* headings  */}
        <div className="w-fit h-fit text-center space-y-3 mx-auto mt-10">
          <h6 className="font-inter font-extralight text-[#FFFFFF] text-[12px] tracking-[3.5px]">
            GET IN TOUCH WITH US
          </h6>
          <h1 className="font-cormorant text-white text-4xl md:text-5xl">
            Contact & Booking
          </h1>
        </div>

        {/* socialization  */}
        <div className="w-full h-fit flex flex-col-reverse lg:flex-row gap-20 mt-10 md:mt-20 mx-auto px-5 lg:px-30">
          {/* social links  */}
          <div className="w-full h-fit space-y-8">
            <h1 className="font-cormorant text-white text-2xl">
              Contact Information
            </h1>

            <div className="w-fit h-fit space-y-8">
              <div className="w-fit h-fit flex justify-center items-start gap-3">
                <MapPin size={16} color="white" className="mt-1.5" />

                <div className="w-fit h-fit ">
                  <h1 className="font-cormorant text-white text-xl">
                    Location
                  </h1>
                  <h1 className="font-inter text-white text-sm">
                    CMG8+M5J, Shrirangapattana, Karnataka 571427
                  </h1>
                </div>
              </div>

              <div className="w-fit h-fit flex justify-center items-start gap-3">
                <Phone size={16} color="white" className="mt-1.5" />

                <div className="w-fit h-fit ">
                  <h1 className="font-cormorant text-white text-xl">Phone</h1>
                  <h1 className="font-inter text-white text-sm">
                    +91 9686985795
                  </h1>
                </div>
              </div>
              <div className="w-fit h-fit flex justify-center items-start gap-3">
                <Clock5 size={16} color="white" className="mt-1.5" />

                <div className="w-fit h-fit ">
                  <h1 className="font-cormorant text-white text-xl">
                    Booking hours
                  </h1>
                  <h1 className="font-inter text-white text-sm">
                    Monday - Sunday: 9:00 AM - 6:00 PM
                  </h1>
                </div>
              </div>

              <div className="w-fit h-fit">
                <h1 className="font-cormorant text-white text-xl">
                  Contact Us
                </h1>

                <div className="w-fit h-fit flex items-center gap-3 mt-3">
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
          <div className="w-full">
            <h1 className=" font-cormorant text-white text-2xl mb-5">
              Request a Booking
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Guest Input  */}

              {/* Guests */}
              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Enter number of guests"
                />
              </div>

              {/* Check-In Date Input */}
              <div className="w-full max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Select Check-In Date
                </label>

                <input
                  type="text"
                  value={formData.checkIn || "Select a Date"}
                  onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar visibility
                  className="w-full border border-white text-white placeholder-white px-3 py-5 cursor-pointer mt-4"
                  readOnly
                  placeholder="Click to select a date"
                />
                {showCalendar && (
                  <div className="mt-4">
                    <Calendar
                      value={selectedDate}
                      onChange={handleCheckInDateSelect} // Using handleCheckInDateSelect function to handle date selection
                      tileClassName={tileClassName}
                      tileDisabled={tileDisabled}
                      minDate={new Date()} // Disable past dates
                      view="month" // Show only one month
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* Check-Out Date Input */}
              <div className="w-full max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Select Check-Out Date
                </label>

                <input
                  type="text"
                  value={formData.checkOut || "Select a Date"}
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)} // Toggle calendar visibility
                  className="w-full border border-white text-white placeholder-white px-3 py-5 cursor-pointer mt-4"
                  readOnly
                  placeholder="Click to select a date"
                />
                {showCheckOutCalendar && (
                  <div className="mt-4">
                    <Calendar
                      value={selectedCheckOutDate}
                      onChange={handleCheckOutDateSelect} // Using handleCheckOutDateSelect function to handle date selection
                      tileClassName={tileClassName}
                      tileDisabled={tileDisabled}
                      minDate={selectedDate || new Date()} // Disable past dates and check-in dates
                      view="month" // Show only one month
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* Slot Selection */}
              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Preferred Slot
                </label>
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  className="w-full border border-white bg-[#205781] text-white px-3 py-5"
                >
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              {/* Special Request (Notes) */}
              <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
                <label className="text-white text-sm font-inter">
                  Special Request
                </label>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  className="w-full border border-white text-white placeholder-white px-3 py-5"
                  placeholder="Any special requests?"
                />
              </div>

              {/* Submit Button */}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full sm:max-w-[400px] px-6 py-4 bg-[#205781] text-white text-lg font-inter rounded-lg"
            >
              Book Now
            </button>
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
