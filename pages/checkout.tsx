import Image from "next/image";
import {
  CartItem,
  TotalItem,
  InputShort,
  InputWide,
  Rect,
  Header,
} from "@/components/cart/item";
import { FullButton } from "@/components/button/button";
import React, { useState } from "react";
import machine from "@/public/imgs/siphon2.png";

export default function Checkout() {
  const [isCustomerVisible, setCustomerVisible] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isPaymentVisible, setPaymentVisible] = useState(false);
  const [isItemVisible, setItemVisible] = useState(false);

  const handleCustomerToggle = () => {
    setCustomerVisible(!isCustomerVisible);
  };

  const handleContentToggle = () => {
    setContentVisible(!isContentVisible);
  };
  const handlePaymentToggle = () => {
    setPaymentVisible(!isPaymentVisible);
  };

  const handleItemToggle = () => {
    setItemVisible(!isItemVisible);
  };
  return (
    <div className="py-[15vh]">
      <div className="cursor-pointer text-brown" onClick={handleItemToggle}>
        <Header title="items" />
      </div>
      {isItemVisible && (
        <div>
          <div className="border-b border-white mx-[3vw]"></div>
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
          <div className="pb-[2vh] flex justify-center space-x-3">
            <div onClick={handleCustomerToggle}>
              <FullButton
                text="NEXT"
                //   link="/checkout"
                colour="bg-brown hover:bg-white"
                textColour="text-white  hover:text-brown"
              />
            </div>
          </div>
        </div>
      )}

      <div>
        <Rect />
        <div>
          <div
            className="cursor-pointer text-brown"
            onClick={handleCustomerToggle}
          >
            <Header title="customer information" />
          </div>
          {isCustomerVisible && (
            <div>
              <div className="border-b border-white mx-[3vw]"></div>
              <div className="p-[2vh]">
                <InputShort
                  title="first name"
                  type="text"
                  id="fname"
                  title2="last name"
                  type2="text"
                  id2="lname"
                />
                <InputWide title="email" type="text" id="email" />
              </div>
              <div className="pb-[2vh] flex justify-center space-x-3">
                <div onClick={handleItemToggle}>
                  {" "}
                  <FullButton
                    text="BACK"
                    // link="/products"
                    colour="border-brown hover:bg-brown"
                    textColour="text-brown hover:text-white"
                  />
                </div>
                <div onClick={handleContentToggle}>
                  <FullButton
                    text="NEXT"
                    //   link="/checkout"
                    colour="bg-brown hover:bg-white"
                    textColour="text-white  hover:text-brown"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Rect />
        <div>
          <div
            className="cursor-pointer text-brown"
            onClick={handleContentToggle}
          >
            <Header title="delivery information" />
          </div>
          {isContentVisible && (
            <div>
              <div className="border-b border-white mx-[3vw]"></div>
              <div className="p-[2vh]">
                <InputShort
                  title="first name"
                  type="text"
                  id="fname"
                  title2="last name"
                  type2="text"
                  id2="lname"
                />
                <InputWide title="address" type="text" id="address" />
                <InputShort
                  title="phone number"
                  type="text"
                  id="phoneNumber"
                  title2="zip code"
                  type2="text"
                  id2="zip"
                />
                <InputShort
                  title="city"
                  type="text"
                  id="city"
                  title2="country"
                  type2="text"
                  id2="country"
                />
              </div>{" "}
              <div className="pb-[2vh] flex justify-center space-x-3">
                <div onClick={handleCustomerToggle}>
                  {" "}
                  <FullButton
                    text="BACK"
                    // link="/products"
                    colour="border-brown hover:bg-brown"
                    textColour="text-brown hover:text-white"
                  />
                </div>
                <div onClick={handleItemToggle}>
                  <FullButton
                    text="NEXT"
                    //   link="/checkout"
                    colour="bg-brown hover:bg-white"
                    textColour="text-white  hover:text-brown"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Rect />
        <div>
          <div
            className="cursor-pointer text-brown"
            onClick={handlePaymentToggle}
          >
            <Header title="payment information" />
          </div>
          {isPaymentVisible && (
            <div>
              <div className="border-b border-white mx-[3vw]"></div>
              <div className="p-[2vh]">
                <InputWide title="name on card" type="text" id="cardName" />
                <InputWide title="card number" type="text" id="cardNumber" />
                <InputShort
                  title="expiry date"
                  type="text"
                  id="date"
                  title2="cvc/cvv"
                  type2="number"
                  id2="cvc"
                />
              </div>
              <div className="pb-[2vh] flex justify-center space-x-3">
                <div onClick={handleContentToggle}>
                  {" "}
                  <FullButton
                    text="BACK"
                    // link="/products"
                    colour="border-brown hover:bg-brown"
                    textColour="text-brown hover:text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Rect />
        {/* <div className=" flex justify-center">
          <FullButton
            text="PAY"
            link="/confirm"
            colour="bg-brown hover:bg-white"
            textColour="text-white  hover:text-brown"
          />
        </div> */}
      </div>
    </div>
  );
}
