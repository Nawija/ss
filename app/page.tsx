import Image from "next/image";

import HeroImg from "@/public/images/seovileo-hero.jpg";

export default function Home() {
    return (
        <>
            <section className="relative h-[85vh] w-full">
                <div className="relative h-full w-full -z-10">
                    <Image
                        src={HeroImg}
                        layout="fill"
                        objectFit="cover"
                        alt="seovileo-hero"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                </div>

                <div className="absolute top-1/2 left-1/2 lg:left-[10%] lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 text-center lg:text-start flex items-center lg:items-start flex-col justify-center w-full px-10">
                    <small className="tracking-[0.5rem] ml-3 uppercase lg:text-sm text-white/60 font-light mb-2">
                        developer
                    </small>
                    <h1 className="text-5xl lg:text-7xl">Seovileo</h1>
                    <p className="max-w-2xl mt-6 text-white/70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem debitis molestiae voluptas accusantium
                        doloremque ipsam, nobis veritatis dolorem deleniti
                        molestias harum, adipisci nam neque reprehenderit
                        explicabo quibusdam eos enim libero!
                    </p>
                </div>
            </section>

            <section className="text-center -mt-24 z-10 overflow-x-hidden mx-auto flex items-center justify-center flex-col">
                <h2 className="text-2xl mb-6 tracking-wide">Portfolio</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 text-start px-2">
                    <div className="relative h-80 rounded-lg overflow-hidden flex items-end justify-start">
                        <img
                            className="object-cover object-top inset-0 w-full h-full"
                            src="https://i.pinimg.com/564x/ca/71/bc/ca71bcf55a2612450636dc4e2c2871e9.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        <p className="text-xl max-w-36 z-10 text-white absolute left-2 bottom-2">
                            Strony Internetowe
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg flex items-end justify-start bg-gray-800 overflow-hidden">
                        <img
                            className="object-cover absolute inset-0 w-full h-full"
                            src="https://i.pinimg.com/564x/6f/a2/27/6fa227feb34adbe010a61f7e04115ba4.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        <p className="text-xl max-w-36 z-10 text-white absolute left-2 bottom-2">
                            Sklepy Internetowe
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg flex items-end justify-start bg-gray-500 overflow-hidden">
                        <img
                            className="object-cover absolute inset-0 w-full h-full object-top"
                            src="https://i.pinimg.com/564x/c2/f7/c5/c2f7c5d9c9c25f8c898339d8c3c27bee.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        <p className="text-xl max-w-36 z-10 text-white absolute left-2 bottom-2">
                            Elegarden
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg flex items-end justify-start bg-gray-800 overflow-hidden">
                        <img
                            className="object-cover object-top inset-0 w-full h-full"
                            src="https://i.pinimg.com/564x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        <p className="text-xl max-w-36 z-10 text-white absolute left-2 bottom-2">
                            Lorem Looorem lore
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg flex items-end justify-start bg-gray-500 overflow-hidden">
                        <img
                            className="object-cover absolute object-left-top inset-0 w-full h-full"
                            src="https://i.pinimg.com/564x/06/55/fe/0655feae2ad03812c8b0e6775b10bfeb.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                        <p className="text-xl max-w-36 z-10 text-white absolute left-2 bottom-2">
                            Lorem Looorem lore
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
