import Image from "next/image";
import front from "@/public/imgs/outer.png";
import { BlogPost, Reviews } from "@/components/blog/blog";

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
      text: "textetxetxtex",
      link: "",
      image: front,
      alt: "img",
    },
  ];
  return (
    <div className="">
      <div className="relative my-[25vh]">
        <Image src={front} alt="location" className=" object-cover " />
        <h2 className="absolute bottom-0 py-[8vw] px-[12vw] text-white max-w-[60vw] leading-none">
          Denman location opening soon
        </h2>
      </div>
      <div>
        <div>
          <h2 className="text-brown my-[3vh]">What's the haps</h2>
        </div>
        <div className="flex space-x-3">
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
          <h2 className="text-brown my-[3vh] text-center">
            Hear from our customers
          </h2>
        </div>
        <div className="flex space-x-3">
          {ReviewItems.map((item, index) => (
            <Reviews
              key={index}
              text={item.text}
              image={item.image}
              alt={item.alt}
              link={item.link}
            ></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
}
