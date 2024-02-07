import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Bean } from "./nav_svg";
import menu from "@/public/svg/menu.svg";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center fixed top-0 left-0 w-full p-[5vw] lg:p-[2vw] z-50">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/menu">
          <Bean
            fill={isHovered ? "#D4ADA0" : "white"}
            beanFill={isHovered ? "white" : "#391F06"}
            stylingClasses="z-50 absolute left-1/2 top-1/2 w-11 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </Link>
        <Image
          src={menu.src}
          alt="Menu SVG"
          width={menu.width}
          height={menu.height}
          className="animate-spin animate-spin-slow "
        />
      </div>
      <h3 className="text-white mx-auto font-semibold">DISTILL BREW CO.</h3>
    </div>
  );
};

export default Nav;
