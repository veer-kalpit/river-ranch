import { useEffect } from "react";

function SoundPlayer({ isRendered }) {
  const playClickSound = () => {
    const audio = new Audio("/sounds/river.mp3");
    audio.loop = true;
    audio.play().catch((err) => console.error("Audio play failed:", err));
  };

  useEffect(() => {
    if (!isRendered) return;
    const checkScreen = () => {
      if (window.innerWidth > 640) {
        playClickSound();
      }
    };

    window.addEventListener("resize", checkScreen);
    checkScreen(); // Check on initial load
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [isRendered]);

  return null;
}

export default SoundPlayer;
