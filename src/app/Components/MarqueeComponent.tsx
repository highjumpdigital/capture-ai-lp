import React from "react";
import Marquee from "react-fast-marquee";
import { marquee1 } from "./constants";

export const MarqueeComponent = () => {
 
  return (
    <div className=" flex flex-col gap-4 text-[#FFFFFFCC] ">
      <Marquee speed={200}>
        <div className="flex gap-4">
          {marquee1.map((item, index) => {
            return (
              <div
                key={index}
                className={`  px-[10px] py-5  rounded-[5px] font-semibold text-4 leading-6    ${
                  index % 2 === 0 ? "bg-[#595959]" : "bg-[#F4F4F4] text-black "
                }  `}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>

      <Marquee direction="right" speed={200}>
        <div className="flex gap-4">
          {marquee1.map((item, index) => {
            return (
              <div
                key={index}
                className={`  px-[10px] py-5  rounded-[5px] font-semibold text-4 leading-6 ${
                  index % 2 === 0 ? "bg-[#595959]" : "bg-[#F4F4F4]  text-black"
                }  `}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>

      <Marquee direction="left" speed={200}>
        <div className="flex gap-4">
          {marquee1.map((item, index) => {
            return (
              <div
                key={index}
                className={`  px-[10px] py-5  rounded-[5px] font-semibold text-4 leading-6 ${
                  index % 2 === 0 ? "bg-[#595959]" : "bg-[#F4F4F4]  text-black"
                }  `}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </Marquee>
      <Marquee direction="right" speed={200}>
        <div className="flex gap-4">
          {marquee1.map((item, index) => {
            return (
              <div
                key={index}
                className={`  px-[10px] py-5  rounded-[5px] font-semibold text-4 leading-6 ${
                  index % 2 === 0 ? "bg-[#595959]" : "bg-[#F4F4F4]  text-black"
                }  `}
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