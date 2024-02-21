import Image from "next/image";
import front from "@/public/imgs/outer.png";
import { BlogPost, Reviews } from "@/components/blog/blog";
import Marquee from "react-fast-marquee";

export default function Blog() {
  const BlogItems = [
    {
      title: "NEW LOCATION",
      text: "In-store cafe opening on Denman",

      image: front,
      alt: "img",
    },
    {
      title: "INNOVATIVE DESIGN",
      text: "In the dynamic world of eCommerce, staying ahead of the curve is essential.",

      image: front,
      alt: "img",
    },
    {
      title: "A NEW BEGINNING",
      text: "Introducing Siphon ExCommerce-the revolutionary platform that's changing the way online businesses operate.",

      image: front,
      alt: "img",
    },
  ];

  const ReviewItems = [
    {
      text: "“Best purchase of my life. A true game-changer.”",

      image: front,
      alt: "img",
      title: "Freddy",
    },
    {
      text: "“Distill Brew’s Siphon has truly elevated my mornings.”",

      image: front,
      alt: "img",
      title: "Marianne",
    },
    {
      text: "“I’m guaranteed a perfect cup of coffee every day with my Siphon.”",

      image: front,
      alt: "img",
      title: "Alex",
    },
  ];
  return (
    <div className="py-[20vh]">
      <div className="relative h-screen">
        <Image
          src={front}
          alt="location"
          className="object-cover w-full h-full"
        />
        <h3 className="absolute bottom-0 left-0 p-8 text-white sm:max-w-[60vw] leading-none text-lg">
          Denman location opening soon
        </h3>
      </div>

      <div className="px-[5vw]">
        <div>
          <h2 className="text-brown py-[8vh]  text-[40px]">What's brewing</h2>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-[3vw]">
          {BlogItems.map((item, index) => (
            <BlogPost
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              alt={item.alt}
            ></BlogPost>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-brown py-[10vh] text-center text-[40px]">
            Hear from our customers
          </h2>
        </div>
        <Marquee className="overflow-visible p-16" autoFill>
          <div className="flex">
            {ReviewItems.map((item, index) => (
              <Reviews
                key={index}
                title={item.title}
                text={item.text}
                image={item.image}
                alt={item.alt}
                amount={5}
              ></Reviews>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
