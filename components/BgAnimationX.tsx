"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BgAnimationX() {
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setX(scrollYValue / 10);
    setRotate(scrollYValue / 10);
  }, [scrollYValue]);
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="absolute -z-30 h-80 w-80 border-4 border-dotted opacity-10"
        animate={{ x, rotate }}
        transition={{ type: "spring" }}
      />
    </div>
  );
}
