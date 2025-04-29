import React, { forwardRef, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock5,
  Mail,
  Phone,
  MessageCircleMore,
  Instagram,
} from "lucide-react";
import Logo from "../../public/logo.png";

const Footer = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, phone, checkIn, checkOut, guests, request } =
      formData;

    const message = ` Booking Inquiry 

 Full Name: ${fullname}
 Email: ${email}
 Phone: ${phone}
Check-in Date: ${checkIn}
Check-out Date: ${checkOut}
Number of Guests: ${guests}
Special Requests: ${request || "None"}

Please confirm the booking.`;

    const phoneNumber = "919686985795";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
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
                {/* Check Availability Button */}
                <div className="w-full h-fit flex justify-center items-center mb-8">
                  <a
                    href="https://calendar.google.com/calendar/embed?src=79b59a57e2562661d8d01589c4c727e6ba1e09f35e6996c140136b04983c4560%40group.calendar.google.com&ctz=UTC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full h-fit font-inter border-1 text-white text-sm flex justify-center items-center py-4 px-8 rounded-full cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#154c6a] hover:to-[#205781] mt-10">
                      Check Availability
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* form  */}
          <div className="w-full h-fit space-y-8">
            <h1 className="w-full text-center sm:text-start font-cormorant text-white text-2xl">
              Request a Booking
            </h1>

            <form onSubmit={handleSubmit} className="w-full h-fit space-y-8">
              {/* Name & Email */}
              <div className="w-full h-fit flex flex-wrap xl:flex-nowrap gap-8">
                <div className="w-full sm:max-w-[315px] h-fit flex flex-col gap-4">
                  <label
                    className="font-inter text-white text-sm"
                    htmlFor="fullname"
                  >
                    FULL NAME
                  </label>
                  <input
                    className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Your Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full sm:max-w-[315px] h-fit flex flex-col gap-4">
                  <label
                    className="font-inter text-white text-sm"
                    htmlFor="email"
                  >
                    EMAIL
                  </label>
                  <input
                    className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Emain address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full sm:max-w-[400px] h-fit flex flex-col gap-4">
                <label
                  className="font-inter text-white text-sm"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Contact No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Dates & Guests */}
              <div className="w-full h-fit flex flex-wrap xl:flex-nowrap gap-8">
                <div className="w-full sm:max-w-[200px] h-fit flex flex-col gap-4">
                  <label
                    className="font-inter text-white text-sm"
                    htmlFor="checkIn"
                  >
                    Check-in Date
                  </label>
                  <input
                    className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full sm:max-w-[200px] h-fit flex flex-col gap-4">
                  <label
                    className="font-inter text-white text-sm"
                    htmlFor="guests"
                  >
                    Guests
                  </label>
                  <input
                    className="w-full font-inter text-xs text-white border border-white focus:outline-none px-3 py-5"
                    type="number"
                    name="guests"
                    id="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="w-full sm:max-w-[665px] h-fit flex flex-col gap-4">
                <label
                  className="font-inter text-white text-sm"
                  htmlFor="request"
                >
                  Special Requests
                </label>
                <textarea
                  className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none resize-none px-3 py-5"
                  name="request"
                  id="request"
                  rows={8}
                  placeholder="Tell us about special requests or if you're bringing pets."
                  value={formData.request}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:max-w-[665px] h-fit font-inter bg-white text-[#205781] text-sm flex justify-center items-center py-4 rounded-full cursor-pointer hover:bg-white/40 hover:text-white transition-all duration-300 ease-in-out"
              >
                BOOK NOW
              </button>
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

export default Footer;
