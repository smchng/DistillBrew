import Image from "next/image";
import { Intruction } from "@/components/instruction";
import { FullButton } from "@/components/button/button";

import dSiphon from "@/public/imgs/3dSiphon.png";
import siphon from "@/public/imgs/siphonInt.png";
import bench from "@/public/imgs/bench.png";
import chair from "@/public/imgs/chair.png";
import front from "@/public/imgs/front.png";
import shelf from "@/public/imgs/shelf.png";

export default function Home() {
  const instructionItem = [
    {
      image: siphon,
      alt: "bar or siphons",
      title: "Filter",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: front,
      alt: "cafe front",
      title: "Water",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: chair,
      alt: "cafe interior",
      title: "Boil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: shelf,
      alt: "bar or siphons",
      title: "Coffee",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: bench,
      alt: "front of cafe",
      title: "Enjoy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Image
          src={dSiphon}
          alt="Outer Image"
          className="h-screen object-cover"
        />
        <div className="relative flex items-center justify-center h-full">
          <div className="absolute max-w-[40vw] text-white leading-none text-center">
            <h1>Learn the art of siphon brewing</h1>
            <FullButton text="SHOP NOW" link="/about" />
          </div>
        </div>
      </div>
      {instructionItem.map((item, index) => (
        <Intruction
          key={index}
          order={index + 1}
          image={item.image}
          alt={item.alt}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}
