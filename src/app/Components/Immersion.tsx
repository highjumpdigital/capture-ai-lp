import Image from "next/image";
import React from "react";

import ImmersionImage from "../assets/latestnewImage.png";
import { constants, Immersiondata } from "./constants";

export const Immersion = () => {
  return (
    <div className=" px-[20px] relative z-10  py-[100px] ">
      <div className="max-w-[1311px] mx-auto flex  flex-col lg:flex-row  gap-4 justify-between items-center">

      <div>
        <div className="  text-[34px]  lg:text-[64px]  leading-[44px] lg:leading-[64px] text-[#FF4206]">
          {constants.immersion.fullimmersion} <br />
          <span className="font-bold text-black">
            {" "}
            {constants.immersion.fullattention}
          </span>
        </div>

        <div className="flex justify-start items-center mt-[50px]">
          <Image src={ImmersionImage} alt="ImmersionImage" />
        </div>
      </div>
      <div className="">
        {Immersiondata.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[417px] min-h-[129px] w-full bg-[#FFFFFF33] border-[3px] border-[rgba(255,255,255,0.2)] border-solid rounded-[5px] bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgba(174,185,220,0.2)] z-10 flex gap-[50px] justify-between items-center mt-[10px] p-[20px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
            >
              <div className="h-20 w-20  flex justify-center items-center rouneded-[5px]  gifshadow bg-[white]">
                <Image src={item.img} alt="Image"  className="rounded-[5px]"  />
              </div>

              <div>
                <div className="font-bold text-[16px] leading-4 text-[#000000CC] uppercase max-w-[237px] ">
                  {item.title}
                </div>
                <div className="font-medium text-[14px] leading-[14px mt-4 text-[#000000CC] max-w-[237px] ">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};
