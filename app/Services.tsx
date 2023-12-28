"use client";

import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDesignServices, MdOutlineShoppingCart } from "react-icons/md";
import { PiBrowsersFill } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";

const uslugi = [
  {
    href: "/",
    title: "Strona Internetowa",
    price: "1200",
    icon: <PiBrowsersFill />,
    time: "0.2",
  },
  {
    href: "/",
    title: "Sklep Internetowy",
    price: "3200",
    icon: <MdOutlineShoppingCart />,
    time: "0.3",
  },
  {
    href: "/",
    title: "Optymalizacja SEO",
    price: "1700",
    icon: <TbSeo />,
    time: "0.4",
  },
  {
    href: "/",
    title: "Projekty Graficzne",
    price: "300",
    icon: <MdOutlineDesignServices />,
    time: "0.5",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="flex flex-col items-center justify-center py-12 md:pb-24">
      <p className="mb-6 text-2xl tracking-wide">Usługi</p>

      <div className="flex flex-col items-center justify-center space-x-4 md:flex-row">
        {uslugi.map((u, id) => (
          <div
            key={id}
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${u.time}s`,
            }}
            className="group relative mb-12 overflow-hidden border border-zinc-500/10 px-12 pb-24 pt-12 text-start shadow-lg shadow-stone-800 transition-transform hover:scale-105"
          >
            <span className="text-5xl text-white/20">{u.icon}</span>
            <h2 className="my-3 text-2xl">{u.title}</h2>
            <p className="text-2xl text-green-300">
              od {u.price}
              <small>zł</small>
            </p>
            <Link href={u.href}>
              <div className="absolute -bottom-6 -right-6 ml-auto mt-10 w-max rounded-full bg-gray-900/50 p-10 text-end text-xl">
                <FaArrowRight className="group-hover:text-white" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
