import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

type BlogProps = {
  title?: string;
  text?: string;
  link: string;
  image: StaticImageData;
  alt: string;
  stylingClasses: string;
};

export const BlogPost = ({ title, text, link, image, alt }: BlogProps) => {
  return (
    <div className="flex bg-white rounded-2xl p-[1vw] gap-[5vw]">
      <div className="">
        <p>{title}</p>
        <p>{text}</p>{" "}
        <Link href={link} className="bottom-0 ">
          Read more
        </Link>
      </div>
      <div className="relative overflow-visible">
        <Image
          src={image}
          alt={alt}
          className="h-[25vh] w-[15vw] object-cover -right-2 "
        />
      </div>
    </div>
  );
};

export const Reviews = ({ link, text, image, alt }: BlogProps) => {
  return (
    <div className="bg-brown2 rounded-2xl p-[1vw] border border-white">
      <Image
        src={image}
        alt={alt}
        className="h-[25vh] w-[15vw] object-cover -right-2 "
      />
      <div>{/* <Star stylingClasses=""></Star> */}</div>
      <div className="">
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Star = ({ stylingClasses }: BlogProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 29 28"
      fill="none"
      className={stylingClasses}
    >
      <path
        d="M12.6839 1.93733C13.3987 0.387586 15.6013 0.387586 16.3161 1.93733L18.9685 7.68767C19.2598 8.31929 19.8584 8.75417 20.5491 8.83607L26.8377 9.58168C28.5324 9.78262 29.2131 11.8774 27.9601 13.0361L23.3108 17.3356C22.8001 17.8079 22.5715 18.5116 22.7071 19.1938L23.9412 25.4049C24.2738 27.0789 22.4919 28.3735 21.0027 27.5399L15.4769 24.4468C14.8699 24.1071 14.1301 24.1071 13.5231 24.4468L7.99733 27.5399C6.50811 28.3735 4.72619 27.0789 5.05879 25.4049L6.29294 19.1938C6.4285 18.5116 6.19987 17.8079 5.6892 17.3356L1.03992 13.0361C-0.213076 11.8774 0.467556 9.78262 2.16234 9.58168L8.45088 8.83607C9.1416 8.75417 9.74017 8.31929 10.0315 7.68767L12.6839 1.93733Z"
        fill="white"
      />
    </svg>
  );
};
