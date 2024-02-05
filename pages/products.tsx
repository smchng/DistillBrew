import Image from "next/image";

import front from "@/public/imgs/outer.png";
import machine from "@/public/imgs/siphon.webp";

export default function Products() {
  return (
    <div>
      <div>
        <Image
          src={front}
          alt="Outer Image"
          className="h-screen object-cover"
        />
      </div>
      <div className="flex">
        <div className=" flex-1">
          <Image
            src={machine}
            alt="Outer Image"
            className="bg-peach w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <Image src={machine} alt="Outer Image" className="" />
          <Image src={machine} alt="Outer Image" className="" />
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
