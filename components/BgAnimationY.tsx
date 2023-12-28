"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BgAnimationY() {
  const [y, setY] = useState(0);
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
    setY(scrollYValue / 5);
    setRotate(scrollYValue / 12);
  }, [scrollYValue]);
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="absolute right-52 -z-30 h-40 w-40 border-2 border-dotted opacity-30"
        animate={{ y, rotate }}
        transition={{ type: "spring" }}
      />
    </div>
  );
}
