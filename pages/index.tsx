import Image from "next/image";
import front from "@/public/imgs/outer.png";
import siphon from "@/public/imgs/siphon.png"
import { FullButton } from "@/components/button/button";

export default function Home() {
  return (
    <main className={"bg-grey"}>
      <section className="relative">
        <Image
          src={front}
          alt="Outer Image"
          className="h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className=" max-w-[60vw] text-white">Every cup matters</h1>
          <p className=" max-w-[40vw] text-white">
            At Distill Brew Co., it’s not just a cup of coffee. You deserve a
            high-quality coffee experience every day. We can help you there.
          </p>
          <FullButton
            text="SHOP NOW"
            link="/products"
            colour="hover:bg-brown"
            textColour="text-white"
          />
        </div>
      </section>
      <section className="h-screen bg-black flex">
        <Image
          src={siphon}
          alt="siphon machine"
          className="object-cover"
        />
        <Image
          src={siphon}
          alt="siphon machine"
          className="object-cover"
        />
        <Image
          src={siphon}
          alt="siphon machine"
          className="object-cover"
        />
      </section>
    </main>
  );
}
