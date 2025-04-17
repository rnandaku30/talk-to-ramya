import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);
    checkMobile(); // initial check

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40 h-72 w-72 bg-teal-500/5 rounded-full blur-3xl transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 144}px, ${position.y - 144}px)`,
        backgroundImage:
          "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 40%, transparent 80%)",
      }}
    />
  );
};

export default CursorGlow;
