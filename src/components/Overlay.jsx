import React, { useEffect, useRef, useState } from "react";

// Animations gsap
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// resources
import frameImage from "/images/frame.png";
import backgroundVideo from "/bg.mp4";

// components
import Home from "./Home";

const Overlay = ({ setIsRendered }) => {
  // references
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const pageRef = useRef(null);

  // states
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return; // return if already animating
    setIsAnimating(true); // set animating to true

    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // set playback speed to 3x
      videoRef.current.play(); // play the video
    }
  };

  useGSAP(() => {
    if (!isAnimating) return;

    const tl = gsap.timeline();

    tl.to(buttonRef.current, { opacity: 0, duration: 1.5 }, 0)
      .to(frameRef.current, { scale: 6, opacity: 0, duration: 2.5 }, 0)
      .to(pageRef.current, {
        scale: 2,
        opacity: 0,
        zIndex: -1,
        duration: 0.35,
        onStart: () => {
          setIsRendered(true);
        },
      });

    // Explanation:
    //  - `0` = start all animations at the same time
  }, [isAnimating]);

  // pause the video when the component is mounted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <>
      <div
        ref={pageRef}
        className="overlay relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden z-10"
      >
        {/* background video  */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          muted
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0.3;
            }
          }}
        />

        <div className="w-full h-full relative flex items-center justify-center px-4 ">
          {/* frame  */}
          <img
            ref={frameRef}
            src={frameImage}
            alt="Frame"
            className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          />

          {/* explore button  */}
          <button
            ref={buttonRef}
            onClick={handleClick}
            type="button"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase
                        bg-[#988579] text-white px-4 py-2 cursor-pointer
                        text-sm sm:text-base md:text-lg 
                        rounded-lg border-2 border-white hover:bg-[#7a6b61] z-20"
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Overlay;
