import Image from "next/image";
import { ProductDetail } from "@/components/product/productDetails";
import burner from "@/public/imgs/burner.png";

export default function Burner() {
  return (
    <div className="bg-blue py-[10vh]">
      <ProductDetail
        image={burner}
        alt="filter"
        title="Filter"
        price="20.00 CAD"
        detail="Our sleek butane Burner made with durable stainless steel makes it the perfect match for Siphon Coffee Machines. With a capability of reaching 1200°C/2100°F max., our lightweight Burner is sure to brew a perfect cup of coffee."
      />

      <div className="grid grid-cols-2">
        <Image
          src={burner}
          alt="render"
          className="border border-[1px] border-brown"
        />
        <Image
          src={burner}
          alt="render"
          className="border border-[1px] border-brown"
        />
      </div>
    </div>
  );
}
