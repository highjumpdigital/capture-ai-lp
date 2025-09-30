import React from "react";
import WordPress from "../assets/platform/wordpress-svgrepo-com.svg"
import Shopify from "../assets/platform/shopify-svgrepo-com.svg"
import Woo from "../assets/platform/woocommerce-icon-svgrepo-com.svg"
import Wix from "../assets/platform/wix-svgrepo-com.svg"
import SquareSpace from "../assets/platform/squarespace-132-svgrepo-com.svg"
import Magneto from "../assets/platform/magento-svgrepo-com.svg"
import BigCommerse from "../assets/platform/bigcommerce-svgrepo-com.svg"
import Image from "next/image";
import { colors } from "../_styles/colors";
import { constants } from "../_common/constants";

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
      className="z-10 relative h-[95px] bg-black w-full xl:-mb-1"
      style={{
        background: `black !important`,
        backgroundImage: `radial-gradient(49.97% 105.43% at 50.03% 100%, ${colors.platform.gradient.start} 0%, ${colors.platform.gradient.end} 100%) !important`
      }}
    >
      <div className="max-w-full md:max-w-[1350px] xl:max-w-[1450px] mx-auto px-[20px] lg:px-[70px] justify-center md:justify-between items-center flex lg:flex-row gap-[35px] md:gap-[20px] h-full">
        <div className="flex justify-start items-center text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] leading-3 sm:leading-5 text-white/80 font-bold">
          {constants.platform.title}
        </div>

        {data.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt={constants.altText.image}
              height={34}
              width={33}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};
