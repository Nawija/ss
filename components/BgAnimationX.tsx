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
    setX(scrollYValue / 30);
    setRotate(scrollYValue / 100);
  }, [scrollYValue]);
  return (
    <motion.div
      className="absolute left-0 -z-30 h-40 w-40 lg:h-80 lg:w-80 border-4 border-dotted opacity-20"
      animate={{ x, rotate }}
      transition={{ type: "spring" }}
    />
  );
}
