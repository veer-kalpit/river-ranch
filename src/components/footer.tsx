import React from "react";
import Image from "next/image";
import { MapPin, Clock5, Mail, Phone, Facebook, Instagram } from "lucide-react";
import Logo from "../../public/logo.png";

const Footer = () => {
  return (
    <section id="contact" className="z-[50] relative">

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
                <h1 className="font-cormorant text-white text-xl">Location</h1>
                <h1 className="font-inter text-white text-sm">
                  River Ranch, near Mysore <br /> Karnataka, India
                </h1>
              </div>
            </div>

            <div className="w-fit h-fit flex justify-center items-start gap-3">
              <Phone size={16} color="white" className="mt-1.5" />

              <div className="w-fit h-fit ">
                <h1 className="font-cormorant text-white text-xl">Phone</h1>
                <h1 className="font-inter text-white text-sm">
                  +91 9876 543 210
                </h1>
              </div>
            </div>

            <div className="w-fit h-fit flex justify-center items-start gap-3">
              <Mail size={16} color="white" className="mt-1.5" />

              <div className="w-fit h-fit ">
                <h1 className="font-cormorant text-white text-xl">Email</h1>
                <h1 className="font-inter text-white text-sm">
                  Info@riverranchmysuru.com
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
              <h1 className="font-cormorant text-white text-xl">Contact Us</h1>

              <div className="w-fit h-fit flex items-center gap-3 mt-3">
                <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                  <Phone size={16} color="white" />
                </div>
                <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                  <Facebook size={16} color="white" />
                </div>
                <div className="w-10 aspect-square rounded-full bg-[#FFFFFF4D] flex justify-center items-center">
                  <Instagram size={16} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="w-full h-fit space-y-8">
          <h1 className="w-full text-center sm:text-start font-cormorant text-white text-2xl">
            Request a Booking
          </h1>

          <form className="w-full h-fit space-y-8">
            {/* name and mail  */}
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
                  placeholder="John Doe"
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
                  type="text"
                  name="email"
                  id="email"
                  placeholder="johndoe123@gmail.com"
                />
              </div>
            </div>

            {/* phone  */}
            <div className="w-full sm:max-w-[400px] h-fit flex flex-col gap-4">
              <label className="font-inter text-white text-sm" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                type="text"
                name="phone"
                id="phone"
                placeholder="+91 9876 5432 210"
              />
            </div>

            {/* dates & guest  */}
            <div className="w-full h-fit flex flex-wrap xl:flex-nowrap gap-8">
              <div className="w-full sm:max-w-[200px] h-fit flex flex-col gap-4">
                <label
                  className="font-inter text-white text-sm"
                  htmlFor="check_in_date"
                >
                  Check-in Dates
                </label>
                <input
                  className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                  type="date"
                  name="check_in_date"
                  id="check_in_date"
                />
              </div>

              <div className="w-full sm:max-w-[200px] h-fit flex flex-col gap-4">
                <label
                  className="font-inter text-white text-sm"
                  htmlFor="check_out_date"
                >
                  Check-out Dates
                </label>
                <input
                  className="w-full font-inter text-xs text-white placeholder:text-white border border-white focus:outline-none px-3 py-5"
                  type="date"
                  name="check_out_date"
                  id="check_out_date"
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
                  type="text"
                  name="guests"
                  id="guests"
                />
              </div>
            </div>

            {/* textarea  */}
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
                placeholder="Tell us about special request or if you’re bringing pets."
              />
            </div>

            <button className="w-full sm:max-w-[665px] h-fit font-inter bg-white text-[#205781] text-sm flex justify-center items-center py-4 rounded-full cursor-pointer hover:bg-white/40 hover:text-white transition-all duration-300 ease-in-out">
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
              Copyright River ranch
            </h6>

            <h6 className="font-inter font-extralight text-[#FFFFFF] text-[10px]">
              Copyright Dotcreativemarket
            </h6>
          </div>

          {/* line  */}
          <div className="hidden md:block border border-white h-full"></div>

          {/* contacts  */}
          <div className="w-full h-fit flex flex-col justify-center items-center gap-3">
            <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
              9889 lorem ipsum <br /> street, Pellentesque, <br /> CA, uSA
            </h6>

            <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
              riverranch.com
            </h6>

            <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
              info@riverranch.com
            </h6>

            <h6 className="font-inter text-center text-[#FFFFFF] text-[12px]">
              0123 4567 89 10
            </h6>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
