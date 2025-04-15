import { useEffect } from "react";

function SoundPlayer({ isRendered }) {
  const playClickSound = () => {
    const audio = new Audio("/sounds/river.mp3");
    audio.loop = true;
    audio.play().catch((err) => console.error("Audio play failed:", err));
  };

  useEffect(() => {
    if (!isRendered) return;
    playClickSound();
  }, [isRendered]);

  return null;
}

export default SoundPlayer;
