import Image from "next/image";
import { Intruction, InstructionDots } from "@/components/instruction";
import { SubButton } from "@/components/button/button";
import React, { useState, useEffect, useRef } from "react";
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
      text: "Insert a cloth filter into the top chamber of the siphon machine. Ensure that it is locked into place and clean for every use.",
    },
    {
      image: front,
      alt: "cafe front",
      title: "Water",
      text: "Fill the bottom chamber with water. For every 7 grams of coffee, add 100mL of water. To brew a single cup of coffee, we suggest using 25 grams of coffee with 350mL of water. After adding the water, insert the top chamber into the bottom, ensuring it is firmly sealed together. ",
    },
    {
      image: chair,
      alt: "cafe interior",
      title: "Boil",
      text: "Place the burner under the bottom chamber and turn the burner on high to bring the water to a boil. Make sure the fire is 5-10mm away from the bottom glass. As the water heats up, it will rise to the top chamber.",
    },
    {
      image: shelf,
      alt: "bar or siphons",
      title: "Coffee",
      text: "Add the coffee grounds to the water in the top chamber. For a single cup, use 25 grams of coffee grounds. Stir the water with a wooden stirrer to saturate the grinds. Allow the coffee to brew for around 90 seconds.",
    },
    {
      image: bench,
      alt: "front of cafe",
      title: "Enjoy",
      text: "Turn off the burner and allow the coffee to be filter down into the bottom chamber. Detach the top chamber from the bottom chamber and pour out the coffee. Sit down and enjoy your perfectly brewed coffee.",
    },
  ];
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      window.scrollTo({
        top: nextSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const hasBanner = true; // Set this to true if you have a banner, false otherwise
  const totalItemsWithoutBanner = instructionItem.length;
  const totalItemsWithBanner = hasBanner
    ? totalItemsWithoutBanner + 1
    : totalItemsWithoutBanner;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotScroll = () => {
    const section = nextSectionRef.current;
    if (section) {
      const scrollPosition = window.scrollY;
      let itemIndex = 0;

      // Find the index of the section currently in view
      for (let i = 0; i < totalItemsWithBanner; i++) {
        const currentSection = nextSectionRef.current.children[
          i
        ] as HTMLElement;

        // Check if currentSection is defined before accessing its properties
        if (
          currentSection &&
          currentSection.offsetTop <= scrollPosition &&
          currentSection.offsetTop + currentSection.clientHeight >
            scrollPosition
        ) {
          itemIndex = i;
          break;
        }
      }

      setActiveIndex(itemIndex);
    }
  };

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleDotScroll);
    return () => {
      window.removeEventListener("scroll", handleDotScroll);
    };
  }, []);
  return (
    <div>
      <div className="relative">
        <Image
          src={dSiphon}
          alt="Outer Image"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <div
            onClick={handleScroll}
            className="absolute max-w-[80vw] lg:max-w-[25vw] text-white leading-none text-center"
          >
            <h1 className="pb-[2vh]">Learn the art of siphon brewing</h1>
            <SubButton
              text="BEGIN YOUR JOURNEY"
              colour="hover:bg-brown"
              textColour="text-white"
            />
          </div>
        </div>
      </div>
      <div ref={nextSectionRef}>
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
      <InstructionDots
        totalItems={totalItemsWithBanner}
        activeIndex={activeIndex}
      />
    </div>
  );
}
