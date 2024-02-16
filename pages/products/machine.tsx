import Image from "next/image";
import { ProductDetail } from "@/components/product/productDetails";
import siphon from "@/public/imgs/siphon2.png";

export default function Machine() {
  return (
    <div className="bg-beige2 py-[10vh]">
      <ProductDetail
        image={siphon}
        alt="siphon machine"
        title="Siphon"
        price="56.00 CAD"
        detail="Experience the art of coffee brewing with our state-of-the-art Siphon Coffee Machine. For beginner baristas to coffee connoisseurs, the Siphon Coffee Machine is perfect for anyone wanting to elevate their coffee game."
      />
      <div>
        <div className="grid grid-cols-2">
          <Image
            src={siphon}
            alt="render"
            className="border border-[1px] border-brown"
          />
          <Image
            src={siphon}
            alt="render"
            className="border border-[1px] border-brown"
          />
        </div>
        <Image
          src={siphon}
          alt="render"
          className="border border-[1px] border-brown"
        />
      </div>
    </div>
  );
}
