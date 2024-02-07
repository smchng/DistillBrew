import { useState } from "react";

type NavProps = {
  stylingClasses: string;
  fill?: string;
  beanFill: string;
};

export const Bean = ({ stylingClasses, fill, beanFill }: NavProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      fill="none"
      className={stylingClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle cx="32" cy="32" r="32" fill={fill} />
      <path
        d="M34.0059 26.2155C35.7735 20.9677 39.1151 16.3373 40.565 14.678C38.9375 15.8152 35.0376 18.9761 32.458 22.5224C29.2336 26.9553 30.0559 32.3679 28.9158 36.7207C27.7756 41.0734 22.8566 51.2255 19.3692 49.5357C15.8818 47.846 12.7681 38.053 19.0131 25.1643C25.2581 12.2755 36.6188 9.71383 41.6344 12.4711C46.6499 15.2283 51.1981 25.1713 45.1686 37.8374C39.1391 50.5036 31.4255 52.8703 28.3493 53.8869C25.273 54.9034 22.3433 52.2848 24.4507 49.4908C26.5581 46.6967 29.2183 42.3174 31.357 37.9035C33.4957 33.4896 31.7964 32.7752 34.0059 26.2155Z"
        stroke={beanFill}
        strokeWidth="2"
      />
    </svg>
  );
};
