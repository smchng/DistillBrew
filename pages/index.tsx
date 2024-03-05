import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/imgs/siphonInt2.png";
import siphon from "@/public/imgs/siphon.png";
import arrow from "@/public/svg/Subtract.svg";
import { FullButton } from "@/components/button/button";

export default function Home() {
  return (
    <main className={"bg-grey"}>
      <section className="relative">
        <Image
          src={banner}
          alt="Outer Image"
          className="h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className=" text-white leading-none text-[40px] md:text-[50px]">
            Every cup matters
          </h1>
          <p className=" max-w-[80vw] md:max-w-[40vw] text-white max-w-[40vw]  pb-[3vh]  text-[18px] md:text-[20px]">
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
      <section className=" sm:h-[150vh] object-cover overflow-hidden bg-brown3">
        <h2 className="text-white text-center pt-[5vh]">Siphon</h2>
        <div className="flex space-x-5 justify-center text-white ">
          <span className="flex items-start space-x-2 hover:text-mocha">
            {" "}
            <Link href="/howTo">LEARN MORE</Link>
            {/* <Image
              src={arrow.src}
              alt="arrow"
              width={arrow.width}
              height={arrow.height}
            /> */}
          </span>
          <span className="flex items-start space-x-2 hover:text-mocha">
            <Link href="/products">SHOP</Link>
            {/* <Image
              src={arrow.src}
              alt="arrow"
              width={arrow.width}
              height={arrow.height}
            /> */}
          </span>
        </div>
        <div className="lg:grid lg:grid-cols-3">
          <div
            className="object-cover hidden md:block overflow-hidden relative"
            data-speed="0.7"
          >
            <Image
              src={siphon}
              alt="siphon machine"
              className="w-full h-full object-cover overflow-hidden drop-shadow-xl relative "
            />
          </div>
          <div
            className="object-cover overflow-hidden relative hidden md:block"
            data-speed="0.7"
          >
            <Image
              src={siphon}
              alt="siphon machine"
              className="w-full h-full object-cover overflow-hidden  drop-shadow-xl relative"
            />
          </div>
          <div
            className="object-cover overflow-hidden relative justify-center flex"
            data-speed="0.7"
          >
            <Image
              src={siphon}
              alt="siphon machine"
              className="w-full h-full object-cover overflow-hidden drop-shadow-xl relative"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
