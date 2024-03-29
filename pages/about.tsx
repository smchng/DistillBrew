import Image from "next/image";

import front from "@/public/imgs/outer.png";

export default function About() {
  const AboutItems = [
    {
      title: "Innovation",
      text: "At the core of our company values is a relentless pursuit of innovation in the realm of coffee brewing. We are committed to pushing the boundaries of traditional methods, consistently introducing cutting-edge technologies and design enhancements to elevate the siphon coffee experience.",
    },
    {
      title: "Quality Craftsmanship",
      text: "We take pride in the meticulous craftsmanship and elegant design that define our siphon coffee machines. Each product is a testament to the artistry involved in creating a device that not only produces exceptional coffee but also serves as a visual masterpiece in any kitchen. ",
    },
    {
      title: "Customer Empowerment",
      text: "We believe in empowering our customers to become true coffee connoisseurs. Through comprehensive education, user-friendly interfaces, and exceptional customer support, we aim to demystify the siphon brewing process.",
    },
  ];
  return (
    <div>
      <section className="relative">
        <Image
          src={front}
          alt="Outer Image"
          className="h-[100vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-[3vw]">
          <h1 className=" md:max-w-[50vw] text-white leading-none mb-[4vh] text-[40px] md:text-lg">
            We are coffee connoisseurs
          </h1>
          <p className=" md:max-w-[40vw] text-white leading-none">
            We strive to elevate the personal coffee making experience for all
            coffee enjoyers. Join us in savouring the art and precision of
            coffee making, as we redefine the boundaries of your coffee
            enjoyment.
          </p>
        </div>
      </section>
      <section className="p-[3vw] pb-[30vh] m-auto content-center ">
        <h3 className="text-[40px] md:text-lg">Our Mission</h3>
        <div className="md:flex mt-[8vh] md:space-x-[50px]">
          {AboutItems.map((item, index) => (
            <div key={index}>
              <h3 className="mt-[8vh] md:mt-0">{item.title}</h3>
              <p className="leading-none mt-[3vh]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
