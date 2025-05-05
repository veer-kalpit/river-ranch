import { forwardRef} from "react";
import Image from "next/image";
import {
  MapPin,
  Clock5,
  Phone,
  MessageCircleMore,
  Instagram,
  Book,
} from "lucide-react";

import Logo from "../../public/logo.png";
import BookingForm from "./bookingForm";
const Footer = forwardRef((props, ref) => {
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
            <BookingForm />
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
