import Image from "next/image";
import { useState } from "react";
import { ProductDetail, ProductVid } from "@/components/product/productDetails";
import siphon from "@/public/imgs/siphon2.png";

export default function Machine() {
  return (
    <div className="bg-beige2 pt-[10vh]">
      <ProductDetail
        image={siphon}
        alt="siphon machine"
        title="Siphon"
        price="56.00 CAD"
        detail="Experience the art of coffee brewing with our state-of-the-art Siphon Coffee Machine. For beginner baristas to coffee connoisseurs, the Siphon Coffee Machine is perfect for anyone wanting to elevate their coffee game."
      />
      <div>
        <div className="grid grid-cols-2">
          <ProductVid title="/vid/water_2.webm" detail="video/webm" />
          <ProductVid title="/vid/coffee.webm" detail="video/webm" />
        </div>
      </div>
    </div>
  );
}
