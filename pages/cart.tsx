import Image from "next/image";
import { CartItem, TotalItem } from "@/components/cart/item";
import { FullButton } from "@/components/button/button";

import machine from "@/public/imgs/siphon2.png";

export default function Cart() {
  return (
    <div className="pt-[15vh]">
      <h3 className="px-[5vw] text-brown">Cart</h3>
      <div>
        <CartItem image={machine} title="Siphon Machine" price="$145" />
        <CartItem image={machine} title="Siphon Machine" price="$145" />
        <CartItem image={machine} title="Siphon Machine" price="$145" />
      </div>
      <div className="justify-end">
        <div className="flex flex-col ">
          <TotalItem title="subtotal" price="$360 CAD" />
          <TotalItem title="tax" price="$50 CAD" />
          <TotalItem title="shipping" price="$16 CAD" />

          <div className="text-right grid grid-cols-2 mx-auto gap-[5vw] my-[3vh]">
            <p>total</p>
            <p className="font-bold">$391 CAD</p>
          </div>
        </div>
      </div>
      <div>
        <FullButton
          text="CONTINUE SHOPPING"
          link="/products"
          colour="border-brown hover:bg-brown"
          textColour="text-brown hover:text-white"
        />
        <FullButton
          text="CHECKOUT"
          link="/checkout"
          colour="bg-brown hover:bg-white"
          textColour="text-white  hover:text-brown"
        />
      </div>
    </div>
  );
}
