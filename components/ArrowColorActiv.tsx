"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ArrowColorActiv() {
  const [y, setY] = useState(0);
  const [scrollYValue, setScrollYValue] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setY(scrollYValue - 1700);
  }, [scrollYValue]);
  return (
    <div>
      <motion.div
        className="my-6 h-screen w-px bg-yellow-500/50"
        animate={{ y }}
        transition={{ type: "spring" }}
      />
    </div>
  );
}
