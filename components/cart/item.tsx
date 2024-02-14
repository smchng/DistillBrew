import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";

type ItemProps = {
  image?: StaticImageData;
  price?: string;
  title: string;
  id?: string;
  type?: string;
  title2?: string;
  id2?: string;
  type2?: string;
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

export const Input = ({ title, id, type }: ItemProps) => {
  return (
    <label htmlFor="fname" className="flex flex-col text-brown text-sm">
      {title}
      <input
        type={type}
        id={id}
        name={id}
        className="bg-white border-none p-1 px-3 outline-none"
      />
    </label>
  );
};

export const InputShort = ({
  title,
  id,
  type,
  title2,
  id2,
  type2,
}: ItemProps) => {
  return (
    <div className="grid grid-cols-2 gap-[2vw] px-[2vw] pb-[2vw]">
      <Input title={title} id={id} type={type} />
      {title2 && <Input title={title2} id={id2 || ""} type={type2 || ""} />}
    </div>
  );
};

export const InputWide = ({ title, id, type }: ItemProps) => {
  return (
    <div className="px-[2vw] pb-[2vw]">
      <Input title={title} id={id} type={type} />
    </div>
  );
};

export const Rect = () => {
  return <div className="bg-white w-screen h-[2vh]"></div>;
};

export const Header = ({ title }: ItemProps) => {
  return (
    <div className="my-[2vw]">
      <h3 className="px-[5vw]  text-brown ">{title}</h3>
    </div>
  );
};
