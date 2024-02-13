import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";

type ItemProps = {
  image?: StaticImageData;
  title: string;
  price: string;
};

export const CartItem = ({ image, title, price }: ItemProps) => {
  const resolvedImage = image !== undefined ? image : "";
  const [isVisible, setIsVisible] = useState(true);

  const handleRemoveClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="flex gap-1 bg-white my-[3vh] pl-[3vw] py-[2vh] ">
          <div className="overflow-hidden rounded-lg bg-beige2 w-[100px] h-[100px]">
            <Image src={resolvedImage} alt="cart item" />
          </div>
          <div className="flex items-end px-[5vw] w-full">
            <div>
              <p className="text-sm leading-none">{title}</p>
              <a
                className="text-brown text-[10px] cursor-pointer"
                onClick={handleRemoveClick}
              >
                REMOVE
              </a>
            </div>
            <div className="ml-auto">
              <h4 className="font-bold">{price} CAD</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const TotalItem = ({ title, price }: ItemProps) => {
  return (
    <div className="text-right grid grid-cols-2 mx-auto gap-[5vw]">
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
