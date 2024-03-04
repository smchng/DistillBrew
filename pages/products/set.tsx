import Image from "next/image";
import { ProductDetail, ProductVid } from "@/components/product/productDetails";
import set from "@/public/imgs/fullset.png";

export default function Set() {
  return (
    <div className="bg-beige  pt-[10vh]">
      <ProductDetail
        image={set}
        alt="set"
        title="Set"
        price="120.00 CAD"
        detail="Experience the perfect blend of art and precision with our full Siphon Set. This visually stunning device combines modern design with a captivating brewing process, creating a rich and aromatic cup of coffee."
      />

      <div className="grid grid-cols-2">
        <ProductVid title="/vid/filter.webm" detail="video/webm" />
        <ProductVid title="/vid/mug.webm" detail="video/webm" />
      </div>
      <ProductVid title="/vid/water_2.webm" detail="video/webm" />
    </div>
  );
}
