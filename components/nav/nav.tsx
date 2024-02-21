import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Menu from "@/components/nav/menu";
import { Bean, Cart } from "./nav_svg";
import menu from "@/public/svg/menu.svg";
import cart from "@/public/svg/cart.svg";

const Nav = () => {
  const [isBeanHovered, setBeanHovered] = useState(false);
  const [isCartHovered, setCartHovered] = useState(false);

  const [isMenuPageVisible, setMenuPageVisibility] = useState(false);

  const handleToggleOverlay = () => {
    setMenuPageVisibility(!isMenuPageVisible);
  };

  const router = useRouter();

  const isTargetPage =
    router.pathname === "/" ||
    router.pathname === "/about" ||
    router.pathname === "/howTo";

  return (
    <div className="fixed z-50 h-screen bg-grey">
      {isMenuPageVisible && (
        <Menu onClose={() => setMenuPageVisibility(false)} />
      )}
      <div className="flex items-center fixed top-0 left-0 w-full p-[5vw] lg:p-[2vw]">
        <div
          className="relative"
          onMouseEnter={() => setBeanHovered(true)}
          onMouseLeave={() => setBeanHovered(false)}
          onClick={handleToggleOverlay}
        >
          <Bean
            fill={isBeanHovered ? "white" : "#391F06"}
            iconFill={isBeanHovered ? "#391F06" : "white"}
            stylingClasses1="cursor-pointer z-50 absolute left-1/2 top-1/2 w-11 -translate-x-1/2 -translate-y-1/2 transform"
            stylingClasses2="transition-colors"
          />

          <Image
            src={menu.src}
            alt="Menu SVG"
            width={menu.width}
            height={menu.height}
            className="animate-spin animate-spin-slow "
          />
        </div>

        <Link
          href="/"
          className={`${isMenuPageVisible ? "pl-[3vw]" : "mx-auto"}`}
        >
          <h3
            onClick={handleToggleOverlay}
            className={`font-semibold text-xs md:text-base ${
              isTargetPage ? "text-white" : "text-brown"
            }${isMenuPageVisible ? "text-brown" : ""}`}
          >
            DISTILL BREW CO.
          </h3>
        </Link>
      </div>
      <div className="fixed bottom-0 right-0 z-50 p-[1vw] lg:p-[2vw]">
        <div
          className="relative flex items-center"
          onMouseEnter={() => setCartHovered(true)}
          onMouseLeave={() => setCartHovered(false)}
        >
          <Link href="/cart">
            <Cart
              fill={isCartHovered ? "white" : "#391F06"}
              iconFill={isCartHovered ? "#391F06" : "white"}
              stylingClasses1=" z-50 absolute w-11 transform translate-x-8 -translate-y-1/2"
              stylingClasses2="transition-colors"
            />
          </Link>
          <Image
            src={cart.src}
            alt="Menu SVG"
            width={cart.width}
            height={cart.height}
            className="animate-spin animate-spin-slow "
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
