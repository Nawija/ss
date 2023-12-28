import s1 from "@/public/images/portfolio/1.jpg";
import Image from "next/image";

export default function ImgAction() {
  return (
    <section className="relative h-96 w-full py-32 md:py-32">
      <Image src={s1} alt="..." fill style={{ objectFit: "cover" }} />
    </section>
  );
}
