"use client";
import HeroImg from "@/public/images/seovileo-hero.jpg";
import { useInView } from "framer-motion";
import Image from "next/image";
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
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-8 text-center lg:left-[10%] lg:translate-x-0 lg:items-start lg:text-start">
        <small
          className="mb-2 ml-3 font-light uppercase tracking-[0.3rem] lg:text-sm lg:tracking-[0.5rem] lg:text-white/60"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Web Development
        </small>
        <h1
          className="text-3xl font-semibold lg:text-5xl"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Strony Internetowe Oparte Na Najnowszych Trendach Technologicznych
        </h1>
        <p
          className="mt-6 text-white/70"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Witaj na mojej stronie internetowej, gdzie jako jednoosobowy developer
          stawiam na najnowsze trendy technologiczne. Jako pasjonat
          programowania i projektowania, dedykuję się tworzeniu stron
          internetowych, które nie tylko odzwierciedlają moje umiejętności, ale
          również są zgodne z najnowszymi osiągnięciami w dziedzinie technologii
          internetowej. Tutaj znajdziesz moje projekty, które są rezultatem
          nieustannego poszukiwania nowości oraz dbałości o jakość wykonania.
        </p>
      </div>
    </section>
  );
}
