import React from "react";
import WordPress from "../assets/platform/wordpress-svgrepo-com.svg"
import Shopify from "../assets/platform/shopify-svgrepo-com.svg"
import Woo from "../assets/platform/woocommerce-icon-svgrepo-com.svg"
import Wix from "../assets/platform/wix-svgrepo-com.svg"
import SquareSpace from "../assets/platform/squarespace-132-svgrepo-com.svg"
import Magneto from "../assets/platform/magento-svgrepo-com.svg"
import BigCommerse from "../assets/platform/bigcommerce-svgrepo-com.svg"
import Image from "next/image";
export const Platform = () => {
  const data = [
    {
      img: WordPress,
    },
    {
      img: Shopify,
    },
    {
      img: Woo,
    },
    {
      img: Wix,
    },
    {
      img: SquareSpace,
    },
    {
      img: Magneto,
    },
    {
      img: BigCommerse,
    },
  ];

  return (
    <div
      className="z-10 px-[20px] relative lg:px-[100px] justify-center md:justify-between items-center flex lg:flex-row gap-[20px] h-[95px] bg-black"
      style={{
        background: `black !important`,
        backgroundImage: `radial-gradient(49.97% 105.43% at 50.03% 100%, rgba(176, 179, 183, 0.4) 0%, rgba(176, 179, 183, 0) 100%) !important`
      }}
    >
      <div className="flex justify-start items-center text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] leading-3 sm:leading-5 text-white font-bold">
        AVAILABLE ON ALL PLATFORMS:
      </div>

      {data.map((item, index) => (
        <div key={index}>
          <Image
            src={item.img}
            alt="image"
            height={34}
            width={33}
          />
        </div>
      ))}
    </div>
  );
};
