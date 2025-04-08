"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Logo from "../../public/logo.png";
import Hamlogo from "../../public/hamLogo.png";
import Image from "next/image";
import { div } from "motion/react-client";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(logoRef.current, { opacity: 0, y: -60 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -40 });
    gsap.set(buttonRef.current, { opacity: 0, y: -60 });

    const tl = gsap.timeline({ delay: 0.3 });

    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    // Menu items animation
    tl.to(
      menuItemsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.8"
    );

    // Button animation
    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Create a style element for the hamburger menu
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @media (max-width: 767px) {
        .hamburger-menu-button {
          display: block !important;
        }
      }
      @media (min-width: 768px) {
        .hamburger-menu-button {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <nav className="w-full z-[50] py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase "
        >
          <Image
            src={Logo}
            alt="River Ranch Logo"
            className="h-[50px] w-[42.03821563720703px] lg:w-[81px] lg:h-[96px]"
          />
        </div>

        {/* Standalone Hamburger Menu with global CSS class */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger-menu-button  p-2 rounded-md  focus:outline-none"
          style={{
            color: "#000000",
            zIndex: 9999,
            display: "block",
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <div className="flex flex-row items-center justify-between w-full ">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-[60px]">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "#" },
            { label: "rooms", path: "#" },
            { label: "events", path: "#" },
            { label: "Yoga", path: "#" },
            { label: "Gallery", path: "#" },
            { label: "Contact", path: "#" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="nav-item text-[16px] font-light capitalize text-white text-inter  hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button - Hidden on smaller screens */}
        <div className="hidden md:block">
          <button
            ref={buttonRef}
            className="text-[16px] font-inter bg-transparent nav-item text-white border border-white hover:bg-white hover:text-black transition-colors uppercase rounded-2xl px-4 py-1 lg:px-6 lg:py-2"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu dropdown - also themed with white/blue */}
        {isOpen && (
          <div className="md:hidden items-center nav-item absolute top-0 right-0 h-full w-full bg-white/95 rounded-lg shadow-lg overflow-hidden z-50">
            <Image
              src={Hamlogo}
              alt="Logo"
              width={62}
              height={73.742}
              className="absolute top-8 left-8"
            />
            <div className="flex flex-col pt-50 p-10 space-y-10">
              {[
                { label: "About", path: "#" },
                { label: "rooms", path: "#" },
                { label: "events", path: "#" },
                { label: "Yoga", path: "#" },
                { label: "Gallery", path: "#" },
                { label: "Contact", path: "#" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-black nav-item text-lg font-semibold tracking-wider px-1 py-2 rounded-md transition-colors capitalize"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
