import Image from "next/image";
import { useState } from "react";
import { ProductDetail, ProductVid } from "@/components/product/productDetails";
import burner from "@/public/imgs/burner.png";

export default function Burner() {
  return (
    <div className="bg-beige2 pt-[10vh]">
      <ProductDetail
        image={burner}
        alt="burner"
        title="Burner"
        price="20.00 CAD"
        detail="Our sleek butane Burner made with durable stainless steel makes it the perfect match for Siphon Coffee Machines. With a capability of reaching 1200°C/2100°F max., our lightweight Burner is sure to brew a perfect cup of coffee."
      />
      <ProductVid title="/vid/burner.webm" detail="video/webm" />
    </div>
  );
}
