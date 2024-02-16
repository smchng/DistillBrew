import Image from "next/image";
import { ProductDetail } from "@/components/product/productDetails";
import set from "@/public/imgs/fullset.png";

export default function Filter() {
  return (
    <div className="bg-beige">
      <ProductDetail
        image={set}
        alt="set"
        title="Set"
        price="120.00 CAD"
        detail="Experience the perfect blend of art and precision with our full Siphon Set. This visually stunning device combines modern design with a captivating brewing process, creating a rich and aromatic cup of coffee."
      />

      <div className="flex">
        <Image src={set} alt="render" />
        <Image src={set} alt="render" />
      </div>
    </div>
  );
}
