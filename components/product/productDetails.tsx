import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { FullButton, Toggle } from "@/components/button/button";

type ProductProp = {
  image?: StaticImageData;
  alt?: string;
  title?: string;
  price?: string;
  detail?: string;
};

export const ProductDetail = ({
  image,
  alt,
  title,
  price,
  detail,
}: ProductProp) => {
  const resolvedImage = image !== undefined ? image : "";
  const resolvedAlt = alt !== undefined ? alt : "";
  return (
    <div>
      <Link href="/products">
        <p className="p-[3vw] mt-[10vh]">back</p>
      </Link>
      <div className="flex items-center justify-center md:max-w-[80vw] m-auto mb-[10vh]">
        <div className="grid sm:grid-cols-2 px-[5vw]">
          <div className="w-[90%] ">
            <Image src={resolvedImage} alt={resolvedAlt} />
          </div>
          <div className="bottom-0 m-auto">
            <div className="mb-[1vw]">
              <p className="text-[25px]">{title}</p>
              <p className="font-bold">{price}</p>
            </div>
            <p className="sm:max-w-[80%] text-2xs md:text-xs">{detail}</p>
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
    </div>
  );
};

export const ProductVid = ({ title, detail }: ProductProp) => {
  const [isEnlarged1, setIsEnlarged1] = useState(false);
  const [enlargedImage1, setEnlargedImage1] = useState<string | null>(null);

  const handleImageClick1 = () => {
    setIsEnlarged1(true);
  };

  const handleCloseEnlarged1 = () => {
    setIsEnlarged1(false);
    setEnlargedImage1(null);
  };
  return (
    <div className="relative">
      <video
        className="h-full w-auto overflow-hidden object-cover border border-[1px] border-brown"
        autoPlay
        muted
        loop
        onClick={() => handleImageClick1()}
      >
        <source src={title} type={detail} />
        Your browser does not support the video tag.
      </video>
      {isEnlarged1 && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50 z-10"
          onClick={handleCloseEnlarged1}
        >
          <video
            className="h-[70vh] w-auto overflow-hidden object-cover border border-[1px] border-brown bg-beige1"
            autoPlay
            muted
            loop
          >
            <source src={title} type={detail} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};
