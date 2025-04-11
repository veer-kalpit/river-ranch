"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

// Assets
import Logo from "../../public/logo.png";
import Hamlogo from "../../public/hamLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track whether mobile menu is open
  const mobileMenuRef = useRef(null); // Ref to the mobile menu div

  // Animate mobile menu open/close using GSAP
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      // Prevent background scroll when menu is open
      document.body.style.overflow = "hidden";

      // Animate menu appearing from top
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0, display: "none" },
        {
          y: 0,
          opacity: 1,
          display: "block",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      // Animate menu hiding upwards
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
          // Fully hide element after animation completes
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.display = "none";
          }
        },
      });

      // Re-enable background scrolling
      document.body.style.overflow = "";
    }

    // Cleanup: reset scroll in case of component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="w-full z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-6 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo (Left) */}
        <div>
          <Image
            src={Logo}
            alt="River Ranch Logo"
            className="w-[50px] h-auto lg:w-[81px] lg:h-[96px]"
          />
        </div>

        {/* Hamburger Icon for Mobile (Right side) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[9999]"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X) icon
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
            // Hamburger icon
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

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "About", href: "#about" },
            { label: "Highlights", href: "#spa" },
            { label: "Experiences", href: "#yoga" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white font-light text-[16px] capitalize hover:text-gray-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button (visible on Desktop only) */}
        <Link href={"#contact"} className="cursor-pointer hidden md:block">
          <button className="cursor-pointer w-fit border border-white rounded-full px-10 py-2 whitespace-nowrap text-white text-[14px]">
            BOOK NOW
          </button>
        </Link>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed md:hidden top-0 left-0 w-full h-full bg-white z-[60] flex flex-col p-8 pt-24"
        style={{ display: "none" }}
      >
        {/* Mobile Logo */}
        <Image
          src={Hamlogo}
          alt="Mobile Logo"
          width={62}
          height={74}
          className="mb-8"
        />

        {/* Mobile Links */}
        <div className="flex flex-col">
          {[
            { label: "About", href: "#about" },
            { label: "Highlights", href: "#spa" },
            { label: "Experiences", href: "#yoga" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-black text-lg font-semibold mb-6"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
