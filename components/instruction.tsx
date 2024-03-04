import Image from "next/image";
import { StaticImageData } from "next/image";

type InstructionProp = {
  image?: StaticImageData;
  alt?: string;
  title?: string;
  text?: string;
  order?: number;
  active?: boolean;
  totalItems?: number;
  activeIndex?: number;
};

export const Intruction = ({
  image,
  alt,
  title,
  text,
  order,
}: InstructionProp) => {
  const resolvedImage = image !== undefined ? image : "";
  const resolvedAlt = alt !== undefined ? alt : "";
  return (
    <div>
      <div className="relative ">
        <Image
          src={resolvedImage}
          alt={resolvedAlt}
          className="h-screen object-cover"
        />
        <div className="absolute bottom-0 md:max-w-[50vw] text-white leading-none m-0 bottom-[30%] px-[8vw] ">
          <h3>{order}</h3>
          <h1 className="mb-[2vh]">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export const Dot = ({ active }: InstructionProp) => {
  return (
    <div
      className={`w-2 h-2 z-10 rounded-full ${
        active ? "bg-white" : "opacity-50 bg-white"
      }`}
    ></div>
  );
};
export const InstructionDots = ({
  totalItems = 0,
  activeIndex,
}: InstructionProp) => {
  return (
    <div className="fixed left-[3vw] top-1/2 transform -translate-y-1/2 flex flex-col gap-1 items-center">
      {Array.from({ length: totalItems }, (_, index) => (
        <Dot key={index} active={index === activeIndex} />
      ))}
    </div>
  );
};
