import Link from "next/link";
import Image from "next/image";
import { FullButton } from "@/components/button/button";
import arrow from "@/public/svg/arrow1.svg";

const Footer = () => {
  const footerContent = [
    {
      title: "Shop",
      page: "All Products, Siphon Machine, Siphon Components, Coffee",
      link: "/products",
    },
  ];
  return (
    <div className="bg-brown text-white p-[5vw]">
      {" "}
      <div className="sm:flex">
        <div className="mb-[4vh] w-full">
          <h3>Subscribe</h3>
          <FullButton
            text="EMAIL ADDRESS"
            link="mailto:s.chng02@gmail.prettierrc.js.com"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          />
        </div>
        <div className="sm:flex sm:space-x-[10vw] sm:justify-center w-full">
          <div className=" mt-[3vh]">
            <p className="font-bold">Distill</p>
            <Link href="/products">
              <p className="text-xs"> All Products</p>
            </Link>
            <Link href="/about">
              <p className="text-xs"> About</p>
            </Link>
            <Link href="/contact">
              <p className="text-xs">Contact Us</p>
            </Link>
            <Link href="/howTo">
              <p className="text-xs">Siphon Basics</p>
            </Link>
            <Link href="/blog">
              <p className="text-xs">What's New</p>
            </Link>
          </div>
          <div className=" mt-[3vh]">
            <p className="font-bold">Help</p>
            <Link href="/products">
              <p className="text-xs">Shipping</p>
            </Link>
            <Link href="/about">
              <p className="text-xs">Return</p>
            </Link>
            <Link href="/contact">
              <p className="text-xs">FAQ</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between mb-[8vh]"></div>
      <hr />
      <p className="mt-[3vh]">© 2024 Distill Brew Co.</p>
    </div>
  );
};

export default Footer;
