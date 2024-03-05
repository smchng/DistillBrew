import Link from "next/link";
import Image from "next/image";
import { FullButton } from "@/components/button/button";
import arrow from "@/public/svg/arrow1.svg";
import { Input } from "@/components/cart/item";

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
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className="text-xs bg-brown rounded-full border border-2 border-white p-1 px-3 outline-none"
          />

          {/* <FullButton
            text="EMAIL ADDRESS"
            link="mailto:s.chng02@gmail.prettierrc.js.com"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          /> */}
        </div>
        <div className="sm:flex sm:space-x-[10vw] sm:justify-center w-full">
          <div className=" mt-[3vh]">
            <h3>Distill</h3>
            <Link href="/products">
              <p className="text-xs hover:text-mocha"> All Products</p>
            </Link>
            <Link href="/about">
              <p className="text-xs hover:text-mocha"> About</p>
            </Link>
            <Link href="/contact">
              <p className="text-xs hover:text-mocha">Contact Us</p>
            </Link>
            <Link href="/howTo">
              <p className="text-xs hover:text-mocha">Siphon Basics</p>
            </Link>
            <Link href="/blog">
              <p className="text-xs hover:text-mocha">What's New</p>
            </Link>
          </div>
          <div className=" mt-[3vh]">
            <h3>Help</h3>
            <Link href="/products">
              <p className="text-xs hover:text-mocha">Shipping</p>
            </Link>
            <Link href="/about">
              <p className="text-xs hover:text-mocha">Return</p>
            </Link>
            <Link href="/contact">
              <p className="text-xs hover:text-mocha">FAQ</p>
            </Link>
            <Link href="https://smchng.github.io/339_StyleGuide/">
              <p className="text-xs hover:text-mocha">Styleguide</p>
            </Link>
            <Link href="  https://github.com/smchng/DistillBrew">
              <p className="text-xs hover:text-mocha">Github</p>
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
