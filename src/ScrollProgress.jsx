import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-1 bg-[#27272a]">
      <div
        className="h-full bg-gradient-to-r from-white via-white/70 to-white/50
 transition-all duration-200"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
