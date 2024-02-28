import { Product } from "@/components/product/product";
import { FullButton } from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

import set from "@/public/imgs/fullset.png";
import machine from "@/public/imgs/siphon.png";
import burner from "@/public/imgs/burner.png";
import filter from "@/public/imgs/filter.png";

export default function Products() {
  return (
    <div>
      <div className="bg-beige2 relative object-cover overflow-hidden pt-[10vh] flex items-center h-screen lg:h-auto">
        <Link href="/products/set">
          <Image
            src={set}
            alt="Outer Image"
            className="w-auto h-[50vh] md:h-screen object-cover overflow-hidden relative left-[40vw] hover:scale-95 transition-transform duration-300 ease-in-out"
          />
        </Link>

        <div className="absolute max-w-[40vw] pl-[10vw] ">
          <h2 className=" font-bold">
            Siphon <br />
            Set
          </h2>
          <FullButton
            text="SHOP"
            link="/products/set"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          />
        </div>
      </div>

      <div className="sm:flex">
        <div className=" flex-1">
          <Product
            image={machine}
            alt="Outer Image"
            link="/products/machine"
            stylingClasses1="bg-beige1 object-cover overflow-hidden relative"
            stylingClasses2="w-full h-full object-cover overflow-hidden top-[50vh] drop-shadow-lg relative"
            name="Machine - $145"
          />
        </div>
        <div className="flex-1 flex flex-col gap-0">
          <div className="flex-1">
            <Product
              image={filter}
              alt="Outer Image"
              link="/products/filter"
              stylingClasses1="w-full h-full bg-blue relative flex items-center"
              stylingClasses2=" drop-shadow-lg"
              name="Filter - $24"
            />
          </div>
          <div className="flex-1">
            <Product
              image={burner}
              alt="Outer Image"
              link="/products/burner"
              stylingClasses1="w-full h-full bg-matcha2 relative flex items-center"
              stylingClasses2=" drop-shadow-lg"
              name="Burner - $50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2>Products</h2>
      <div class="product-container">
        <div class="main-products">
          <img class="set" src="assets/siphon.webp" alt="siphons" />
          <p class="product-title">Siphon - Set</p>
        </div>
        <div class="sub-products">
          <div class="machine product-left">
            <img src="assets/siphon2.webp" alt="siphons" />
            <p class="product-title">Machine</p>
          </div>
          <div class="product-right">
            <div class="paddle">
              <img src="assets/Rectangle 20.png" alt="siphons" />
              <p class="product-title">Paddle</p>
            </div>
            <div class="filter">
              <img src="assets/Rectangle 21.png" alt="siphons" />
              <p class="product-title">Filter</p>
            </div>
          </div>
        </div>
      </div> */
}
