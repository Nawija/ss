"use client";

import s1 from "@/public/images/portfolio/1.jpg";
import s2 from "@/public/images/portfolio/2.jpg";
import s3 from "@/public/images/portfolio/3.jpg";
import s4 from "@/public/images/portfolio/4.jpg";
import s5 from "@/public/images/portfolio/5.jpg";
import s6 from "@/public/images/portfolio/6.jpg";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const portfolioImg = [
  { img: s1, title: "Portfolio", time:"0.1" },
  { img: s2, title: "Nazoltej", time:"0.2" },
  { img: s3, title: "Emelab", time:"0.3" },
  { img: s4, title: "Jarek Olszewski", time:"0.4" },
  { img: s5, title: "Portfolio", time:"0.5" },
  { img: s6, title: "Portfolio Xyz", time:"0.6" },
];

export default function Realization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="z-10 mx-auto -mt-24 flex flex-col items-center justify-center overflow-x-hidden pb-12 text-center md:pb-24">
      <h2 className="mb-6 text-2xl tracking-wide">Realizacje</h2>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-2 px-3 text-start md:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {portfolioImg.map((i, id) => (
          <Link
            href="/"
            key={id}
            className="group relative h-64 w-full overflow-hidden rounded-lg md:h-80"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${i.time}s`,
            }}
          >
            <Image
              src={i.img}
              alt="..."
              height={300}
              width={200}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              {i.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
