"use client";
import HeroImg from "@/public/images/seovileo-hero.jpg";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative h-[85vh] w-full overflow-hidden " ref={ref}>
      <div className="relative -z-10 h-full w-full">
        <Image
          src={HeroImg}
          fill
          style={{ objectFit: "cover", filter: "contrast(110%)" }}
          alt="seovileo-hero"
          className="rotateImg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-8 text-center lg:left-[10%] lg:translate-x-0 lg:items-start lg:text-start">
        <small
          className="mb-2 ml-3 font-light uppercase tracking-[0.3rem] lg:text-sm lg:tracking-[0.5rem] lg:text-white/60"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          developer seovileo
        </small>
        <h1
          className="text-5xl lg:text-7xl"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Seovileo
        </h1>
        <p
          className="mt-6 max-w-2xl text-white/70"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem debitis molestiae voluptas accusantium doloremque
          ipsam, nobis veritatis dolorem deleniti molestias harum, adipisci nam
          neque reprehenderit explicabo quibusdam eos enim libero!
        </p>
      </div>
    </section>
  );
}
