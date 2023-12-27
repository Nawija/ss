import Hero from "@/app/Hero";
import Image from "next/image";

import s1 from "@/public/images/portfolio/1.jpg";
import s2 from "@/public/images/portfolio/2.jpg";
import s3 from "@/public/images/portfolio/3.jpg";
import s4 from "@/public/images/portfolio/4.jpg";
import s5 from "@/public/images/portfolio/5.jpg";
import s6 from "@/public/images/portfolio/6.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDesignServices, MdOutlineShoppingCart } from "react-icons/md";
import { PiBrowsersFill } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";

const portfolioImg = [
  { img: s1, title: "Portfolio" },
  { img: s2, title: "Nazoltej" },
  { img: s3, title: "Emelab" },
  { img: s4, title: "Jarek Olszewski" },
  { img: s5, title: "Portfolio" },
  { img: s6, title: "Portfolio Xyz" },
];

const uslugi = [
  {
    href: "/",
    title: "Strona Internetowa",
    price: "1200",
    icon: <PiBrowsersFill />,
  },
  {
    href: "/",
    title: "Sklep Internetowy",
    price: "3200",
    icon: <MdOutlineShoppingCart />,
  },
  {
    href: "/",
    title: "Optymalizacja SEO",
    price: "1700",
    icon: <TbSeo />,
  },
  {
    href: "/",
    title: "Projekty Graficzne",
    price: "300",
    icon: <MdOutlineDesignServices />,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="z-10 mx-auto -mt-24 flex flex-col items-center justify-center overflow-x-hidden pb-12 text-center md:pb-24">
        <h2 className="mb-6 text-2xl tracking-wide">Realizacje</h2>
        <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-2 px-2 text-start md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {portfolioImg.map((i, id) => (
            <Link
              href="/"
              key={id}
              className="group relative h-80 w-full overflow-hidden rounded-lg"
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

      <section className="flex flex-col items-center justify-center py-12 md:py-24">
        <p className="mb-6 text-2xl tracking-wide">Usługi</p>

        <div className="flex flex-col items-center justify-center space-x-4 md:flex-row">
          {uslugi.map((u, id) => (
            <div
              key={id}
              className="relative mb-12 rounded-xl bg-gradient-to-tl from-stone-700 via-stone-900 to-black px-12 pb-24 pt-12 text-start shadow-lg shadow-stone-800"
            >
              <span className="text-4xl text-white/20">{u.icon}</span>
              <h2 className="mb-4 mt-2 text-2xl">{u.title}</h2>
              <p>
                od {u.price}
                <small>zł</small>
              </p>
              <Link href={u.href}>
                <div className="absolute -bottom-6 -right-6 ml-auto mt-10 w-max rounded-full bg-black p-10 text-end text-xl">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-screen-xl flex-col items-start justify-center px-4 py-12 md:flex-row md:py-24">
        <div className="top-16 mb-12 w-full text-center text-2xl md:sticky md:mb-0 md:w-1/2 md:text-start md:text-3xl">
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:pl-12">
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              1
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              2
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              3
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              4
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              5
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-96 w-full py-12 md:py-24">
        <Image src={s1} alt="..." fill style={{ objectFit: "cover" }} />
      </section>
      <section className="mx-auto flex max-w-screen-xl flex-col items-start justify-center px-4 py-12 md:flex-row">
        <div className="top-16 mb-12 w-full text-center text-3xl md:sticky md:order-1 md:mb-0 md:w-1/2 md:text-start">
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:pr-12">
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              1
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              2
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              3
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              4
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="my-6 h-24 w-px bg-yellow-500/50" />
          <div className="flex items-center justify-center">
            <div className="from mr-6 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-10">
              5
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
