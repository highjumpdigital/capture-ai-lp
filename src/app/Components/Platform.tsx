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
    <div className="platformbg  px-[20px] lg:px-[100px] justify-center items-center flex gap-[100px] h-[95px]">
      <div className="flex justify-start items-center text-4 leading-6 text-[#FFFFFFCC]  font-bold">
        AVAILABLE ON ALL PLATFORMS:
      </div>

      <div className="flex gap-[100px] justify-between items-center">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item.img} alt="image"
              height={24}
              width={24}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
