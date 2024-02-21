import Link from "next/link";
import { FullButton } from "@/components/button/button";

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
      <div className="grid-col-1 grid sm:grid-cols-4 mb-[8vh]">
        <div className="mb-[4vh]">
          <h3>Shop</h3>
          <Link href="/products" className="text-xs">
            All Products
          </Link>
        </div>
        <div className="mb-[4vh]">
          <h3>How-To</h3>
          <Link href="/howTo" className="text-xs">
            Siphon Basics
          </Link>
        </div>
        <div className="mb-[4vh]">
          <h3>About</h3>
        </div>
        <div className="mb-[4vh]">
          <h3>Subscribe</h3>
          <FullButton
            text="EMAIL ADDRESS"
            link="/cart"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          />
        </div>
      </div>
      <div className="grid-col-1 grid sm:grid sm:grid-cols-4  mb-[8vh]">
        <div className="mb-[4vh]">
          <Link href="/blog" className="text-xs">
            <h3> What's New</h3>
          </Link>
        </div>
        <div className="mb-[4vh]">
          <Link href="/contact" className="text-xs">
            <h3> Contact Us</h3>
          </Link>
        </div>
      </div>
      <div className="md:flex justify-between mb-[8vh]"></div>

      <hr />
      <p className="mt-[3vh]">©Distill Brew Co.</p>
    </div>
  );
};

export default Footer;
