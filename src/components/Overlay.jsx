import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import frameImage from "../assets/images/frame.png";
import backgroundVideo from "../assets/videos/bg.mp4";
import leaf1 from "../assets/images/himg.png"
import leaf2 from "../assets/images/himg1.png"
import { gsap } from "gsap";              

const Overlay = ({ onClick }) => {
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    
    if (headingRef.current) {
      // Make immediately visible with !important equivalent settings
      headingRef.current.style.opacity = "1";
      headingRef.current.style.visibility = "visible";
      headingRef.current.style.display = "block";
      headingRef.current.style.zIndex = "999";
      
      // Skip GSAP for initial setting and use direct DOM manipulation
      setTimeout(() => {
        if (headingRef && headingRef.current) {
          headingRef.current.style.opacity = "1";
        }
      }, 100);
    }
  }, []);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Create an invisible overlay to manage transition
    document.body.style.backgroundColor = "black";
    
    // Start playing the video but keep the overlay visible
    if (videoRef.current) {
      videoRef.current.style.zIndex = "50";
      videoRef.current.style.opacity = "1";
      videoRef.current.playbackRate = 3;
      videoRef.current.play();
    }

    // Animate the heading to fade out and move up
    gsap.to(headingRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.in"
    });

    // Make sure the frame is above everything
    if (frameRef.current) {
      // Clone the frame and position it fixed to ensure it's visible during animation
      const frameClone = frameRef.current.cloneNode(true);
      const frameRect = frameRef.current.getBoundingClientRect();
      
      frameClone.style.cssText = `
        position: fixed;
        top: ${frameRect.top}px;
        left: ${frameRect.left}px;
        width: ${frameRect.width}px;
        height: ${frameRect.height}px;
        margin: 0;
        z-index: 1000;
        transform-origin: center center;
        will-change: transform;
        backface-visibility: hidden;
      `;
      document.body.appendChild(frameClone);
      
      // Hide the original frame
      frameRef.current.style.opacity = "0";
      
      // Animate the cloned frame for better visibility
      gsap.to(frameClone, {
        duration: 2.5,
        scale: 20,
        opacity: 0,
        ease: "power2.inOut",
        force3D: true,
        onComplete: () => {
          // Create a direct navigation method that doesn't cause flash
          const homePage = "/home";
          
          // First load the next page
          const link = document.createElement('a');
          link.href = homePage;
          document.body.appendChild(link);
          
          // Then remove the cloned frame to clean up
          if (document.body.contains(frameClone)) {
            document.body.removeChild(frameClone);
          }
          
          // Navigate without refreshing
          navigate(homePage);
        },
      });
    }
  };

  return (
    <div className="overlay flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Video Background */}
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

     
     

      {/* FIXED: Moved heading to proper position ABOVE the frame */}
      <div className="relative w-full flex flex-col items-center mt-37 z-[999]">
        <h1 
          ref={headingRef}
          className="text-center text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 
                     tracking-wider font-semibold"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif, system-ui",
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          River Ranch
        </h1>
      </div>

      {/* Frame Container */}
      <div className="frameImg relative flex items-center justify-center pb-10   w-full px-4">
        <img
          ref={frameRef}
          src={frameImage}
          alt="Frame"
          style={{
            width: "90%", // Mobile default
            maxWidth: "670px", // Maximum size on larger screens
            display: "block",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            willChange: "transform",
            transformOrigin: "center center",
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
          className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
        />

        {!isAnimating && (
          
          <div onClick={handleClick} className="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-auto flex flex-col items-center justify-center">

            {/* Button with overlapping leaf images */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Button */}
              <button
                className="hero-heading relative z-10 w-auto px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5
                          bg-[#F5E8DF] text-[#3A665F] uppercase
                          text-sm sm:text-lg md:text-xl lg:text-2xl 
                          rounded-lg"
                style={{
                  cursor: "pointer",
                  boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                }}
              >
                Explore
              </button>
              
              {/* Leaf images container */}
              <div className="absolute bottom-0 flex  space-x-21 justify-between  z-20">
                <img 
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" 
                  src={leaf1} 
                  alt="Decorative leaf" 
                />
                <img 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" 
                  src={leaf2} 
                  alt="Decorative leaf" 
                />
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Overlay;
