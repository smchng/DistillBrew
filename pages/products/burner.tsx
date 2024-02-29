import Image from "next/image";
import { useState } from "react";
import { ProductDetail } from "@/components/product/productDetails";
import burner from "@/public/imgs/burner.png";

export default function Burner() {
  const [isEnlarged1, setIsEnlarged1] = useState(false);
  const [isEnlarged2, setIsEnlarged2] = useState(false);
  const [enlargedImage1, setEnlargedImage1] = useState<string | null>(null);
  const [enlargedImage2, setEnlargedImage2] = useState<string | null>(null);

  const handleImageClick1 = () => {
    setIsEnlarged1(true);
    setEnlargedImage1(burner.src || ""); // Access the src property
  };

  const handleCloseEnlarged1 = () => {
    setIsEnlarged1(false);
    setEnlargedImage1(null);
  };
  const handleImageClick2 = () => {
    setIsEnlarged2(true);
    setEnlargedImage2(burner.src || ""); // Access the src property
  };

  const handleCloseEnlarged2 = () => {
    setIsEnlarged2(false);
    setEnlargedImage2(null);
  };
  // const imageWidth = Math.min(
  //   (70 * window.innerWidth) / 100,
  //   window.innerWidth
  // );
  return (
    <div className="bg-beige2 pt-[10vh]">
      <ProductDetail
        image={burner}
        alt="burner"
        title="Burner"
        price="20.00 CAD"
        detail="Our sleek butane Burner made with durable stainless steel makes it the perfect match for Siphon Coffee Machines. With a capability of reaching 1200°C/2100°F max., our lightweight Burner is sure to brew a perfect cup of coffee."
      />

      <div className="grid grid-cols-2">
        <div className="relative">
          <video
            className="h-full w-auto overflow-hidden object-cover border border-[1px] border-brown"
            autoPlay
            muted
            loop
            onClick={() => handleImageClick2()}
          >
            <source src="/vid/coffee.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isEnlarged1 && (
            <div
              className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50 z-10"
              onClick={handleCloseEnlarged1}
            >
              <video
                className="h-full w-auto overflow-hidden object-cover border border-[1px] border-brown"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className="relative">
          <Image
            src={burner}
            alt="render"
            className={`border border-[1px] border-brown cursor-pointer `}
            onClick={() => handleImageClick2()}
          />
          {isEnlarged2 && (
            <div
              className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50 z-10"
              onClick={handleCloseEnlarged2}
            >
              <Image
                src={enlargedImage2 || ""}
                alt="render"
                width={300}
                height={200}
                className="border border-[1px] border-brown bg-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
