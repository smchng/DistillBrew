import Link from "next/link";

type ButtonProp = {
  text: string;
  link?: string;
};

export const FullButton = ({ text, link }: ButtonProp) => {
  const resolvedLink = link !== undefined ? link : "";
  return (
    <div className="mt-2 hover:bg-brown border border-white rounded-full border-[1.5px] px-5 pb-1 leading-none inline-block">
      <Link href={resolvedLink} className="text-white">
        {text}
      </Link>
    </div>
  );
};

export const PlaceholderButton = ({ text }: ButtonProp) => {
  return (
    <div className="mt-2 hover:bg-brown border border-white rounded-full border-[1.5px] px-5 pb-1 leading-none inline-block">
      {text}
    </div>
  );
};
