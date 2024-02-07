import Image from "next/image";

import front from "@/public/imgs/outer.png";

export default function About() {
  const AboutItems = [
    {
      title: "Innovation",
      text: "At the core of our company values is a relentless pursuit of innovation in the realm of coffee brewing. We are committed to pushing the boundaries of traditional methods, consistently introducing cutting-edge technologies and design enhancements to elevate the siphon coffee experience.",
    },
    {
      title: "Innovation",
      text: "At the core of our company values is a relentless pursuit of innovation in the realm of coffee brewing. We are committed to pushing the boundaries of traditional methods, consistently introducing cutting-edge technologies and design enhancements to elevate the siphon coffee experience.",
    },
    {
      title: "Innovation",
      text: "At the core of our company values is a relentless pursuit of innovation in the realm of coffee brewing. We are committed to pushing the boundaries of traditional methods, consistently introducing cutting-edge technologies and design enhancements to elevate the siphon coffee experience.",
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
          <h1 className=" max-w-[50vw] text-white leading-none mb-[4vh]">
            We are coffee connoisseurs
          </h1>
          <p className=" max-w-[40vw] text-white leading-none">
            We strive to elevate the personal coffee making experience for all
            coffee enjoyers. Join us in savouring the art and precision of
            coffee making, as we redefine the boundaries of your coffee
            enjoyment.
          </p>
        </div>
      </section>
      <section className="p-[3vw] h-screen m-auto content-center ">
        <h3 className="text-[40px]">Our Mission</h3>
        <div className="flex mt-[8vh] space-x-[50px]">
          {AboutItems.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p className="leading-none mt-[3vh]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
