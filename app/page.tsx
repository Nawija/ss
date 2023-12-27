import Hero from "@/app/Hero";
import Image from "next/image";

import s1 from "@/public/images/portfolio/1.jpg";
import s2 from "@/public/images/portfolio/2.jpg";
import s3 from "@/public/images/portfolio/3.jpg";
import s4 from "@/public/images/portfolio/4.jpg";
import s5 from "@/public/images/portfolio/5.jpg";
import s6 from "@/public/images/portfolio/6.jpg";

const portfolioImg = [
  { img: s1, title: "Portfolio" },
  { img: s2, title: "Nazoltej" },
  { img: s3, title: "Emelab" },
  { img: s4, title: "Jarek Olszewski" },
  { img: s5, title: "Portfolio" },
  { img: s6, title: "Portfolio Xyz" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="z-10 mx-auto -mt-24 flex flex-col items-center justify-center overflow-x-hidden text-center">
        <h2 className="mb-6 text-2xl tracking-wide">Portfolio</h2>
        <div className="grid grid-cols-2 gap-2 px-2 text-start md:gap-4 lg:grid-cols-6 max-w-screen-2xl mx-auto">
          {portfolioImg.map((i, id) => (
            <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg bg-gray-800">
              <Image src={i.img} alt="..." style={{objectFit:"cover"}} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
                {i.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
