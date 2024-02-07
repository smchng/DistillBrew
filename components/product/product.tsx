import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProductProp = {
  image: StaticImageData;
  alt: string;
  link: string;
  stylingClasses1: string;
  stylingClasses2?: string;
  name: string;
};

export const Product = ({
  image,
  alt,
  link,
  stylingClasses1,
  stylingClasses2,
  name,
}: ProductProp) => {
  const resolvedLink = link !== undefined ? link : "";
  return (
    <div className={stylingClasses1}>
      <Link href={link}>
        <Image src={image} alt={alt} className={stylingClasses2} />
      </Link>
      <p className="absolute bottom-0 p-[3vw]">{name}</p>
    </div>
  );
};
