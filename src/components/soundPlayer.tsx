import React, { useEffect } from "react";

function SoundPlayer({ isRendered }) {
  const playClickSound = () => {
    const audio = new Audio("/sounds/river.mp3");
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    if (!isRendered) return;
    playClickSound();
  }, [isRendered]);
}

export default SoundPlayer;
