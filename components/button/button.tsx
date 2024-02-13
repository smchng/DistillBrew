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
    <div
      className={`${colour} mt-2 border rounded-full border-[1.5px] px-5 pb-1 leading-none inline-block transition-colors`}
    >
      <Link href={resolvedLink} className={textColour}>
        {text}
      </Link>
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
    <div className="mt-2 border border-brown rounded-full border-[1.5px] px-5 pt-1 leading-none inline-flex items-center">
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
