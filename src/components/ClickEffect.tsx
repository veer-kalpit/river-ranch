"use client";

import { useEffect } from "react";

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const isTouch = e.type === "touchstart";
      const x = isTouch
        ? (e as TouchEvent).touches[0].clientX
        : (e as MouseEvent).clientX;
      const y = isTouch
        ? (e as TouchEvent).touches[0].clientY
        : (e as MouseEvent).clientY;

      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return null;
}
