import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import star from "@/public/svg/star.svg";

type BlogProps = {
  title?: string;
  text?: string;
  link: string;
  image: StaticImageData;
  alt: string;
  stylingClasses?: string;
  amount?: number;
};

export const BlogPost = ({ title, text, link, image, alt }: BlogProps) => {
  return (
    <div className="flex border border-brown rounded-2xl mb-[3vh] p-[1vw] gap-[5vw] relative">
      <div className="">
        <p>{title}</p>
        <p>{text}</p>{" "}
        <Link href={link} className="items-end">
          Read more
        </Link>
      </div>
      <div className="relative overflow-visible mr-[-2rem]">
        <Image
          src={image}
          alt={alt}
          className="h-[25vh] md:w-[40vw] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export const Reviews = ({ amount, title, text, image, alt }: BlogProps) => {
  const numberOfStars = amount;
  return (
    <div className="border border-brown rounded-2xl p-[1vw] w-[40vw] md:w-[20vw] relative  flex flex-col items-center text-center">
      <div className="relative overflow-visible mt-[-3rem]">
        <Image
          src={image}
          alt={alt}
          className="h-[100px] w-[100px] object-cover rounded-2xl mb-[3vh]"
        />
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: numberOfStars } as number[], (_, index) => (
          <Image
            key={index}
            src={star.src}
            alt={`star-${index}`}
            width={20}
            height={20}
            className=""
          />
        ))}
      </div>
      <div className="mt-[1vh]">
        <p>{text}</p>
        <p className="text-xs mt-[3vh]">{title}</p>
      </div>
    </div>
  );
};
