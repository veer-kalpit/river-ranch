"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

import Logo from "../../public/logo.png";
import Hamlogo from "../../public/hamLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // GSAP entrance animation
  useEffect(() => {
    gsap.set(logoRef.current, { opacity: 0, y: -60 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -40 });
    gsap.set(buttonRef.current, { opacity: 0, y: -60 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
    });
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

    return () => tl.kill();
  }, []);

  // Scroll lock on mobile open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="w-full z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-6 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div ref={logoRef}>
          <Image
            src={Logo}
            alt="River Ranch Logo"
            className="w-[50px] h-auto lg:w-[81px] lg:h-[96px]"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[9999]"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            "Home",
            "About",
            "Rooms",
            "Events",
            "Yoga",
            "Gallery",
            "Contact",
          ].map((label, index) => (
            <Link
              key={index}
              ref={(el) => (menuItemsRef.current[index] = el)}
              href="#"
              className="text-white font-light text-[16px] capitalize hover:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Book Now Button */}
        <div ref={buttonRef} className="hidden md:block">
          <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition uppercase text-sm">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu (Always Rendered, Show/Hide via class) */}
      <div
        ref={mobileMenuRef}
        className={`fixed md:hidden top-0 left-0 w-full h-full bg-white z-[60] flex flex-col p-8 pt-24 transition-all duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Image
          src={Hamlogo}
          alt="Mobile Logo"
          width={62}
          height={74}
          className="mb-8"
        />
        {["About", "Rooms", "Events", "Yoga", "Gallery", "Contact"].map(
          (label, index) => (
            <Link
              key={index}
              href="#"
              className="text-black text-lg font-semibold mb-6"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
