"use client";
import useCanvasCursor from "@/utils/useCanvasCursor";
const CanvasCursor = () => {
  useCanvasCursor();
  return (
    <canvas
      className="cursor pointer-events-none fixed inset-0 z-[99999999]"
      id="canvas"
    />
  );
};
export default CanvasCursor;
