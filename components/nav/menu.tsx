import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import front from "@/public/imgs/outer.png";
interface MenuPageProps {
  onClose: () => void;
}

const Menu: React.FC<MenuPageProps> = ({ onClose }) => {
  const [isOverlayVisible, setOverlayVisibility] = useState(true);

  const handleOverlayClick = () => {
    setOverlayVisibility(false);
    onClose(); // Notify the parent component to close the menu page
  };
  const MenuItem = [
    { item: "Shop", link: "/products" },
    { item: "About", link: "/about" },
    { item: "How To", link: "/howTo" },
    { item: "What's New", link: "/blog" },
    { item: "Contact", link: "/contact" },
  ];

  return (
    <div
      className={`grid grid-cols-2 ml-[5vw] h-[full] ${
        isOverlayVisible
          ? "transform transition-transform translate-y-0"
          : "transform translate-y-full"
      }`}
    >
      <div className="flex flex-col justify-end mb-[8vh]">
        {/* Your menu content */}
        {MenuItem.map((item, index) => (
          <Link
            key={index}
            onClick={handleOverlayClick}
            href={item.link}
            className="text-base text-brown mb-[3vh] hover:text-mocha"
          >
            {item.item}
          </Link>
        ))}
      </div>
      <Image
        src={front}
        alt="Outer Image"
        className="h-[100vh] object-cover invisible sm:visible"
      />
    </div>
  );
};
export default Menu;
