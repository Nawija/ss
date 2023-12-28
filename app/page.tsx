import Hero from "@/app/Hero";

import ImgAction from "@/app/ImgAction";
import Realization from "@/app/Realization";
import Services from "@/app/Services";
import BgAnimationX from "@/components/BgAnimationX";
import BgAnimationY from "@/components/BgAnimationY";





export default function Home() {
  return (
    <>
      <Hero />
      <Realization />
      <Services />
      <div className="sticky top-12 -z-20 w-full">
        <div
          className={`absolute -top-96 left-12 h-96 w-96 rounded-full bg-sky-500 p-96 opacity-[0.07] blur-3xl`}
        />
        <div
          className={`absolute right-12 top-40 h-96 w-96 rounded-full bg-red-500 p-96 opacity-5 blur-3xl`}
        />
      </div>

      

      <BgAnimationX />

      <section className="mx-auto flex max-w-screen-xl flex-col items-start justify-center px-4 py-12 md:flex-row md:py-24">
        <div className="top-16 mb-32 h-full w-full px-4 text-center text-3xl md:sticky md:mb-0 md:w-1/2 md:text-start md:text-3xl">
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

      <ImgAction />

      <BgAnimationY />
      <section className="mx-auto flex max-w-screen-xl flex-col items-start justify-center px-4 py-24 md:flex-row">
        <div className="top-16 mb-32 w-full text-center text-3xl md:sticky md:order-1 md:mb-0 md:w-1/2 md:text-start">
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
