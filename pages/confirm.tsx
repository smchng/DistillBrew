import Link from "next/link";
import { CartItem, TotalItem, Header } from "@/components/cart/item";
import machine from "@/public/imgs/siphon2.png";

export default function Confirm() {
  return (
    <div className="py-[15vh]">
      <div className="text-brown">
        <Header title="order confirmation" />
      </div>
      <div>
        <div className="border-b border-white mx-[3vw]"></div>
        <div>
          <CartItem image={machine} title="Siphon Machine" price="$145" />
          <CartItem image={machine} title="Siphon Machine" price="$145" />
          <CartItem image={machine} title="Siphon Machine" price="$145" />
        </div>
        <div className="flex justify-center sm:justify-end sm:pr-[5vw]">
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
        <div className="flex gap-1 bg-white my-[3vh] pl-[3vw] py-[2vh] ">
          <div className="flex w-full">
            <div>
              <h3 className="pb-[3vh]">customer information</h3>
              <p className="text-sm leading-none font-bold">Samantha Chung</p>
              <p>samchung@gmail.com</p>
            </div>
            <div className="ml-auto px-[5vw]">
              <Link href="/checkout" className="text-sm text-light">
                Edit
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
                Edit
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
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
