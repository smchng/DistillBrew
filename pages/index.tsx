import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/imgs/siphonInt2.png";
import siphon from "@/public/imgs/siphon.png";
import { FullButton } from "@/components/button/button";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        const parallaxElements = Array.from(
          parallaxRef.current.children
        ) as HTMLElement[];

        for (const element of parallaxElements) {
          const speed = parseFloat(element.getAttribute("data-speed") || "1");
          const translateY = scrollValue * speed;
          const Y = translateY * -1;
          element.style.transform = `translateY(${Y}px)`;
        }

        const lastImage = parallaxElements[parallaxElements.length - 1];
        const lastImageBottom = lastImage.offsetTop + lastImage.clientHeight;

        // Check if the bottom of the last image is visible
        if (window.innerHeight + scrollValue >= lastImageBottom) {
          setShowImages(true);
          document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
          setShowImages(false);
          document.body.style.overflow = "auto"; // Enable scrolling
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={"bg-grey"}>
      <section className="relative">
        <Image
          src={banner}
          alt="Outer Image"
          className="h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className=" max-w-[60vw] text-white">Every cup matters</h1>
          <p className=" max-w-[40vw] text-white max-w-[40vw]">
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
      <section className="h-screen object-cover overflow-hidden bg-brown3">
        <h2 className="text-white text-center pt-[5vh]">Siphon</h2>
        <div className="flex space-x-5 justify-center text-white">
          <Link href="howTo">LEARN MORE</Link>
          <Link href="products">SHOP</Link>
        </div>
        <div className="grid grid-cols-3" ref={parallaxRef}>
          <div
            className="object-cover  overflow-hidden relative"
            data-speed="0.7"
          >
            <Image
              src={siphon}
              alt="siphon machine"
              className="w-full h-full object-cover overflow-hidden drop-shadow-xl relative "
            />
          </div>
          <div
            className="object-cover overflow-hidden relative"
            data-speed="0.7"
          >
            <Image
              src={siphon}
              alt="siphon machine"
              className="w-full h-full object-cover overflow-hidden  drop-shadow-xl relative"
            />
          </div>
          <div
            className="object-cover overflow-hidden relative"
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
