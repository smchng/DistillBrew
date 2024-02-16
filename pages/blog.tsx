import Image from "next/image";
import front from "@/public/imgs/outer.png";
import { BlogPost, Reviews } from "@/components/blog/blog";
// import Marquee from "react-marquee-line";

export default function Blog() {
  const BlogItems = [
    {
      title: "TITLE",
      text: "textetxetxtex",
      link: "/about",
      image: front,
      alt: "img",
    },
    {
      title: "TITLE",
      text: "textetxetxtex",
      link: "/about",
      image: front,
      alt: "img",
    },
    {
      title: "TITLE",
      text: "textetxetxtex",
      link: "/about",
      image: front,
      alt: "img",
    },
  ];

  const ReviewItems = [
    {
      text: "“Best purchase of my life. A true game-changer.”",
      link: "",
      image: front,
      alt: "img",
      title: "Freddie",
    },
  ];
  return (
    <div className="py-[20vh]">
      <div className="relative">
        <Image
          src={front}
          alt="location"
          className="object-cover w-full h-full"
        />
        <h3 className="absolute bottom-0 left-0 p-8 text-white max-w-[60vw] leading-none">
          Denman location opening soon
        </h3>
      </div>

      <div className="px-[5vw]">
        <div>
          <h2 className="text-brown py-[8vh]">What's brewing</h2>
        </div>
        <div className="md:flex md:space-x-[3vw]">
          {BlogItems.map((item, index) => (
            <BlogPost
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              alt={item.alt}
              link={item.link}
            ></BlogPost>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-brown py-[10vh] text-center">
            Hear from our customers
          </h2>
        </div>
        <div className="flex space-x-3">
          {ReviewItems.map((item, index) => (
            <Reviews
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              alt={item.alt}
              link={item.link}
              amount={5}
            ></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
}
