import React from "react";

const TwinklingStars = ({ count = 40, maxSize = 6 }) => {
    const stars = Array.from({ length: count }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * maxSize + 1;
      const delay = Math.random() * 5;
  
      return (
        <svg
          key={i}
          className="absolute text-white opacity-20 animate-twinkle"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.1 6.5H21l-5.4 3.9L17.6 19 12 14.8 6.4 19l1.4-6.6L2 8.5h6.9L12 2z" />
        </svg>
      );
    });
  
    return <>{stars}</>;
  };
  
  
const AnimatedBackground = () => {
    return (
        <>
            {/* Base background color */}
            <div className="fixed inset-0 -z-20 bg-primaryBg" />

            {/* Animated layers above blue */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Stars */}
                <TwinklingStars count={60} />
                {/* Purple blobs */}
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-700 rounded-full opacity-30 blur-3xl animate-pulse" />
                <div className="absolute top-1/2 right-[-150px] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-20 blur-2xl animate-ping" />
                <div className="absolute bottom-[-100px] left-1/2 w-[500px] h-[500px] bg-purple-800 rounded-full opacity-20 blur-2xl animate-slowPulse" />

                {/* Waving Hand */}
                <div className="absolute top-6 right-6 text-4xl animate-wave origin-[70%_70%] select-none">
                    👋
                </div>
            </div>
        </>
    );
};

export default AnimatedBackground;
