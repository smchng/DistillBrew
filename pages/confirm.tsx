import Link from "next/link";
import { CartItemFinal, TotalItem, Header } from "@/components/cart/item";
import machine from "@/public/imgs/siphon2.png";

export default function Confirm() {
  return (
    <div className="py-[15vh]">
      <div className="text-brown pl-[3vh] md:pl-[10vh]">
        <h2>Order Confirmed!</h2>
      </div>
      <p className="pl-[5vw]">
        Thank you for your order. Your order confirmation has been sent to your
        email.
      </p>
      <div>
        <div className="border-b border-white mx-[3vw]"></div>

        <div className="flex gap-1 bg-white my-[3vh] pl-[3vw] py-[2vh] ">
          <div className="flex w-full">
            <div>
              <h3 className="pb-[3vh]">customer information</h3>
              <p className="text-sm leading-none font-bold">Samantha Chung</p>
              <p>samchung@gmail.com</p>
            </div>
            <div className="ml-auto px-[5vw]">
              <Link href="/checkout" className="text-sm text-light">
                <p>Edit</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-1 bg-white my-[3vh] pl-[3vw] py-[2vh] ">
          <div className="flex w-full">
            <div>
              <h3 className="pb-[3vh]">delivery information</h3>
              <p className="text-sm leading-none font-bold">Samantha Chung</p>
              <p>1234 University Drive</p>
              <p> Burnaby, BC V5A 1S6</p> <p> Canada 604 555 1002</p>
            </div>
            <div className="ml-auto px-[5vw]">
              <Link href="/checkout" className="text-sm text-light">
                <p>Edit</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-1 bg-white my-[3vh] pl-[3vw] py-[2vh] ">
          <div className="flex w-full">
            <div>
              <h3 className="pb-[3vh]">payment method</h3>
              <p className="text-sm leading-none font-bold">Samantha Chung</p>
              <p>VISA **** **** **** **92</p> <p>10/28</p>
              <p> 456</p>
            </div>
            <div className="ml-auto px-[5vw]">
              <Link href="/checkout" className="text-sm text-light">
                <p>Edit</p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="pl-[3vw]">items</h3>
          <CartItemFinal image={machine} title="Siphon Machine" price="$145" />
          <CartItemFinal image={machine} title="Siphon Machine" price="$145" />
          <CartItemFinal image={machine} title="Siphon Machine" price="$145" />
        </div>
      </div>
      <div className=" justify-center flex hover:text-mocha">
        <Link href="/">
          <p>back to home</p>
        </Link>
      </div>
    </div>
  );
}
