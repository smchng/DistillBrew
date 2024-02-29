import Image from "next/image";
import front from "@/public/imgs/outer.png";
import { BlogPost, Reviews } from "@/components/blog/blog";
export default function blogPost() {
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
  return (
    <div className="py-[20vh] px-[5vw]">
      <h2 className="text-brown md:text-lg text-[30px]">
        Denman location opening soon
      </h2>
      <p className="pb-[2vh]">Posted: February 12, 2024</p>

      <Image
        src={front}
        alt="location"
        className="object-cover max-w-[80vw] h-[60vh] rounded-2xl "
      />
      <p className="text-xs md:text-base py-[8vh] max-w-[80vw]">
        We are happy to announce that our first in-person location is slated to
        open in Summer 2024! Since 2018, we have been dedicated to helping
        create incredible brewing experiences around the world, but it’s time to
        bring these experiences straight to you. We cannot wait for this new
        endeavour and we are looking forward to serving the Vancouver community.
        Keep an eye out on our socials in the coming weeks for an opening date.
      </p>
      <div className="">
        <div>
          <h2 className="text-brown pt-[8vh] pb-[4vh] md:text-lg text-[30px]">
            What's brewing
          </h2>
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
    </div>
  );
}
