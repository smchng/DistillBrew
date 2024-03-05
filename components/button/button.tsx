import Link from "next/link";
import React, { useState } from "react";

type ButtonProp = {
  text?: string;
  link?: string;
  colour?: string;
  textColour?: string;
};

export const FullButton = ({ text, link, colour, textColour }: ButtonProp) => {
  const resolvedLink = link !== undefined ? link : "";
  return (
    <Link
      href={resolvedLink}
      className={`${colour}  ${textColour} cursor-pointer text-2xs border rounded-full border-[1.5px] px-[3vw] pt-[1vh] inline-block transition-colors`}
    >
      <p className="text-xs font-bold leading "> {text}</p>
    </Link>
  );
};

export const SubButton = ({ text, colour, textColour }: ButtonProp) => {
  return (
    <div
      className={`${colour}  ${textColour} cursor-pointer text-2xs border rounded-full border-[1.5px] px-[3vw] pt-[1vh] inline-block transition-colors`}
    >
      <p className="text-xs font-bold leading "> {text}</p>
    </div>
  );
};

export const Toggle = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="mt-2 border border-brown rounded-full border-[1.5px] px-5 leading-none inline-block">
      <button className="text-brown text-xs " onClick={handleDecrease}>
        -
      </button>
      <span className="text-xs px-[15px]">{quantity}</span>
      <button className="text-brown text-xs" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
