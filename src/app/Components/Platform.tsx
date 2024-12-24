import React from "react";
import Image1 from "../assets/Vector (2).png";
import Image2 from "../assets/shopify-svgrepo-com.png";
import Image3 from "../assets/woocommerce-icon-svgrepo-com.png";
import Image4 from "../assets/wix-svgrepo-com.png";
import Image5 from "../assets/squarespace-132-svgrepo-com.png";
import Image6 from "../assets/magento-svgrepo-com.png";
import Image7 from "../assets/bigcommerce-svgrepo-com.png";
import Image from "next/image";
export const Platform = () => {
  const data = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
    {
      img: Image3,
    },
    {
      img: Image4,
    },
    {
      img: Image5,
    },
    {
      img: Image6,
    },
    {
      img: Image7,
    },
  ];

  return (
    <div
      className="z-10 px-[20px] relative lg:px-[100px] justify-center md:justify-between items-center flex lg:flex-row gap-[20px] h-[95px]"
      style={{
        background: `linear-gradient(0deg, #000000, #000000),
                     radial-gradient(49.97% 105.43% at 50.03% 100%, rgba(176, 179, 183, 0.4) 0%, rgba(176, 179, 183, 0) 100%)`,
      }}
    >
      <div className="flex justify-start items-center text-[12px] sm:text-[16px] leading-6 text-white font-bold">
        AVAILABLE ON ALL PLATFORMS:
      </div>

      {data.map((item, index) => (
        <div key={index}>
          <Image
            src={item.img}
            alt="image"
            height={24}
            width={24}
          />
        </div>
      ))}
    </div>
  );
};
