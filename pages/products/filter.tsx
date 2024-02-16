import Image from "next/image";
import { ProductDetail } from "@/components/product/productDetails";
import filter from "@/public/imgs/filter.png";

export default function Filter() {
  return (
    <div className="bg-blue pt-[10vh]">
      <ProductDetail
        image={filter}
        alt="filter"
        title="Filter"
        price="20.00 CAD"
        detail="Enhance your coffee with our reusable, stainless steel Filter. Compatible with most Siphon Coffee Machines, our metal Filter is the key to brewing a smooth cup of coffee every time. "
      />

      <div className="grid grid-cols-2">
        <Image
          src={filter}
          alt="render"
          className="border border-[1px] border-brown"
        />
        <Image
          src={filter}
          alt="render"
          className="border border-[1px] border-brown"
        />
      </div>
    </div>
  );
}
