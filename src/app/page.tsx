"use client";

import Home from "@/components/Home";
import Overlay from "@/components/Overlay";
import { useState } from "react";

export default function LandingPage() {
  const [isRendered, setIsRendered] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const handleRenderComplete = () => {
    setTimeout(() => {
      setHideOverlay(true);
    }, 0.5 * 1000); // 0.5 seconds
  };
  return (
    <div className="App w-screen h-screen relative overflow-hidden">
      {!hideOverlay && <Overlay setIsRendered={setIsRendered} />}
      <Home isRendered={isRendered} onRenderComplete={handleRenderComplete} />
    </div>
  );
}
