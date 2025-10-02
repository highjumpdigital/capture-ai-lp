import React from "react";
import Marquee from "react-fast-marquee";
import { marquee1, marquee2, marquee3, marquee4 } from "../_common/constants";

export const MarqueeComponent = () => {
  // Duplicate arrays to ensure continuous coverage on large screens
  const extendedMarquee1 = [...marquee1, ...marquee1, ...marquee1];
  const extendedMarquee2 = [...marquee2, ...marquee2, ...marquee2];
  const extendedMarquee3 = [...marquee3, ...marquee3, ...marquee3];
  const extendedMarquee4 = [...marquee4, ...marquee4, ...marquee4];

  return (
    <div className=" flex flex-col gap-3 text-marquee-text ">
      <Marquee speed={40} gradient={false}>
        <div className="flex opacity-25 ml-4 ">
          {extendedMarquee1.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-[10px] py-5 rounded-[5px] font-semibold text-4 leading-6 Inter ${index % 2 === 0 ? "bg-marquee-darkBg" : "bg-marquee-lightBg text-black "
                  }`}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>

      <Marquee direction="right" speed={40} gradient={false}>
        <div className="flex opacity-50  ml-4 gap-4">
          {extendedMarquee2.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-[10px] py-5 rounded-[5px] font-semibold text-4 leading-6 Inter ${index % 2 === 0 ? "bg-marquee-darkBg" : "bg-marquee-lightBg text-black"
                  }`}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>

      <Marquee direction="left" speed={40} gradient={false}>
        <div className="flex opacity-75 ml-4">
          {extendedMarquee3.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-[10px] py-5 rounded-[5px] font-semibold text-4 leading-6 Inter ${index % 2 === 0 ? "bg-marquee-darkBg" : "bg-marquee-lightBg text-black"
                  }`}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>
      <Marquee direction="right" speed={40} gradient={false}>
        <div className="flex ml-4">
          {extendedMarquee4.map((item, index) => {
            return (
              <div
                key={index}
                className={`px-[10px] py-5 rounded-[5px] font-semibold text-4 leading-6 Inter ${index % 2 === 0 ? "bg-marquee-darkBg" : "bg-marquee-lightBg text-black"
                  }`}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};
