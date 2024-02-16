import Image from "next/image";
import {
  CartItem,
  TotalItem,
  InputShort,
  InputWide,
  Rect,
  Header,
} from "@/components/cart/item";
import { FullButton, SubButton } from "@/components/button/button";
import React, { useState, useRef, RefObject } from "react";
import machine from "@/public/imgs/siphon2.png";
import arrow from "@/public/svg/arrow.svg";

export default function Checkout() {
  const [isCustomerVisible, setCustomerVisible] = useState(true);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handleCustomerToggle = () => {
    setCustomerVisible(!isCustomerVisible);
  };

  const handleContentToggle = () => {
    setContentVisible(!isContentVisible);
  };
  const handlePaymentToggle = () => {
    setPaymentVisible(!isPaymentVisible);
  };

  const customerNext = () => {
    setCustomerVisible(!isCustomerVisible);
    setContentVisible(!isContentVisible);
    handleScrollToSection("delivery");
  };
  const customerBack = () => {
    setCustomerVisible(!isCustomerVisible);
    setContentVisible(!isContentVisible);
    handleScrollToSection("customer");
  };

  const deliveryNext = () => {
    setContentVisible(!isContentVisible);
    setPaymentVisible(!isPaymentVisible);
    handleScrollToSection("pay");
  };

  const sectionRef: RefObject<HTMLDivElement> = useRef(null);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-[15vh]">
      <div className="text-brown">
        <Header title="items" />
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
      </div>
      <div>
        <Rect />
        <section ref={sectionRef} id="customer">
          <div
            className="cursor-pointer text-brown flex justify-between"
            onClick={handleCustomerToggle}
          >
            <Header title="customer information" />
            <Image
              src={arrow.src}
              alt="arrow"
              width={25}
              height={25}
              className={`mr-[4vw] ${isCustomerVisible ? "" : "rotate-180"}`}
            />
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
                <div onClick={customerNext}>
                  <SubButton
                    text="NEXT"
                    colour="bg-brown hover:bg-white"
                    textColour="text-white  hover:text-brown"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        <Rect />
        <section ref={sectionRef} id="delivery">
          <div
            className="cursor-pointer text-brown flex justify-between"
            onClick={handleContentToggle}
          >
            <Header title="delivery information" />

            <Image
              src={arrow.src}
              alt="arrow"
              width={25}
              height={25}
              className={`mr-[4vw] ${isContentVisible ? "" : "rotate-180"}`}
            />
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
                <div onClick={customerBack}>
                  {" "}
                  <SubButton
                    text="BACK"
                    colour="border-brown hover:bg-brown"
                    textColour="text-brown hover:text-white"
                  />
                </div>
                <div onClick={deliveryNext}>
                  <SubButton
                    text="NEXT"
                    colour="bg-brown hover:bg-white"
                    textColour="text-white  hover:text-brown"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        <Rect />
        <section ref={sectionRef} id="pay">
          <div
            className="cursor-pointer text-brown flex justify-between"
            onClick={handlePaymentToggle}
          >
            <Header title="payment information" />
            <Image
              src={arrow.src}
              alt="arrow"
              width={25}
              height={25}
              className={`mr-[4vw] ${isPaymentVisible ? "" : "rotate-180"}`}
            />
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
                <div>
                  {" "}
                  <FullButton
                    text="PAY"
                    link="/confirm"
                    colour="bg-brown hover:bg-white"
                    textColour="text-white  hover:text-brown"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
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
