import Image from "next/image";
import { StaticImageData } from "next/image";

type ProductProp = {
  image: StaticImageData;
  alt: string;
  title: string;
  text: string;
  order: number;
};

export const Intruction = ({ image, alt, title, text, order }: ProductProp) => {
  return (
    <div>
      <div className="relative ">
        <Image src={image} alt={alt} className="h-screen object-cover" />
        <div className="absolute bottom-0 md:max-w-[35vw] text-white leading-none m-0 right-[8vw] bottom-[30%]">
          <h3>{order}</h3>
          <h1 className="mb-[2vh]">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
