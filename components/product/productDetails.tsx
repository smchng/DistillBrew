import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FullButton, Toggle } from "@/components/button/button";

type ProductProp = {
  image: StaticImageData;
  alt: string;
  title: string;
  price: string;
  detail: string;
};

export const ProductDetail = ({
  image,
  alt,
  title,
  price,
  detail,
}: ProductProp) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-2  ">
        <div className="w-[90%]">
          <Image src={image} alt={alt} />
        </div>
        <div className="bottom-0 m-auto">
          <div className="mb-[1vw]">
            <p className="text-[25px]">{title}</p>
            <p className="font-bold">{price}</p>
          </div>
          <p className="max-w-[80%]">{detail}</p>
          <div className="my-[1vw]">
            <p className="text-2xs">QUANTITY</p>
            <Toggle />
          </div>
          <FullButton
            text="ADD TO CART"
            link="/cart"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          />
        </div>
      </div>
    </div>
  );
};
