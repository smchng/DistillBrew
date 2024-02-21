import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import star from "@/public/svg/star.svg";

type BlogProps = {
  title?: string;
  text?: string;
  image: StaticImageData;
  alt: string;
  stylingClasses?: string;
  amount?: number;
};

export const BlogPost = ({ title, text, image, alt }: BlogProps) => {
  return (
    <div className="grid grid-cols-2 border border-brown rounded-2xl mb-[3vh] p-[2vw] gap-[2vw] relative">
      <div className="flex flex-col">
        <p className="text-2xs sm:text-sm">{title}</p>
        <p className="text-2xs sm:text-xs">{text}</p>{" "}
        <Link href="/blogPost" className="mt-auto">
          Read more
        </Link>
      </div>

      <div className="relative overflow-visible lg:mr-[-4rem]">
        <Image
          src={image}
          alt={alt}
          className="h-full md:w-[40vw] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export const Reviews = ({ amount, title, text, image, alt }: BlogProps) => {
  const numberOfStars = amount;
  return (
    <div className="border border-brown rounded-2xl p-[1vw] w-[40vw] mr-[2vw] md:w-[25vw] relative flex flex-col items-center text-center">
      <div className="relative overflow-visible mt-[-3rem]">
        <Image
          src={image}
          alt={alt}
          className="h-[100px] w-[100px] object-cover rounded-2xl mb-[3vh]"
        />
      </div>
      <div className="flex space-x-1 mb-[1vh]">
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
      <div className="flex-grow flex flex-col">
        <p className="text-xs md:text-sm">{text}</p>
        <p className="text-xs mt-auto">{title}</p>
      </div>
    </div>
  );
};
