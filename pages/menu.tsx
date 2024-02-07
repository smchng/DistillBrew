import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import front from "@/public/imgs/outer.png";

export default function Home() {
  const MenuItem = [
    { id: 1, item: "Shop", link: "/products" },
    { id: 2, item: "About", link: "/about" },
    { id: 3, item: "How To", link: "/howTo" },
    { id: 4, item: "What's New", link: "/blog" },
    { id: 5, item: "Contact", link: "/contact" },
  ];

  const isMenuPage = true; // Set this based on your logic

  useEffect(() => {
    // Update the overflow property based on whether it's the menu page or not
    document.body.style.overflow = isMenuPage ? "hidden" : "auto";

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuPage]);

  return (
    <div className="grid grid-cols-2 ml-[5vw] h-[full]">
      <div className="flex flex-col justify-end mb-[8vh]">
        {MenuItem.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="text-base text-brown mb-[3vh] hover:text-mocha"
          >
            {item.item}
          </Link>
        ))}
      </div>
      <Image src={front} alt="Outer Image" className="h-[100vh] object-cover" />
    </div>
  );
}
