import HeroImg from "@/public/images/seovileo-hero.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[85vh] w-full">
        <div className="relative -z-10 h-full w-full">
          <Image
            src={HeroImg}
            fill
            style={{ objectFit: "cover" }}
            alt="seovileo-hero"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        </div>

        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-8 text-center lg:left-[10%] lg:translate-x-0 lg:items-start lg:text-start">
          <small className="mb-2 ml-3 font-light uppercase tracking-[0.5rem] lg:text-sm lg:text-white/60">
            developer
          </small>
          <h1 className="text-5xl lg:text-7xl">Seovileo</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem debitis molestiae voluptas accusantium doloremque
            ipsam, nobis veritatis dolorem deleniti molestias harum, adipisci
            nam neque reprehenderit explicabo quibusdam eos enim libero!
          </p>
        </div>
      </section>

      <section className="z-10 mx-auto -mt-24 flex flex-col items-center justify-center overflow-x-hidden text-center">
        <h2 className="mb-6 text-2xl tracking-wide">Portfolio</h2>
        <div className="grid grid-cols-2 gap-2 px-2 text-start md:gap-4 lg:grid-cols-5">
          <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg">
            <img
              className="inset-0 h-full w-full object-cover object-top"
              src="https://i.pinimg.com/564x/ca/71/bc/ca71bcf55a2612450636dc4e2c2871e9.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              Strony Internetowe
            </p>
          </div>
          <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg bg-gray-800">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://i.pinimg.com/564x/6f/a2/27/6fa227feb34adbe010a61f7e04115ba4.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              Sklepy Internetowe
            </p>
          </div>
          <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg bg-gray-500">
            <img
              className="absolute inset-0 h-full w-full object-cover object-top"
              src="https://i.pinimg.com/564x/c2/f7/c5/c2f7c5d9c9c25f8c898339d8c3c27bee.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              Elegarden
            </p>
          </div>
          <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg bg-gray-800">
            <img
              className="inset-0 h-full w-full object-cover object-top"
              src="https://i.pinimg.com/564x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              Lorem Looorem lore
            </p>
          </div>
          <div className="relative flex h-80 items-end justify-start overflow-hidden rounded-lg bg-gray-500">
            <img
              className="absolute inset-0 h-full w-full object-cover object-left-top"
              src="https://i.pinimg.com/564x/06/55/fe/0655feae2ad03812c8b0e6775b10bfeb.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-xl text-white">
              Lorem Looorem lore
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
