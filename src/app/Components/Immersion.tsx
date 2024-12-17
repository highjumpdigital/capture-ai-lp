import Image from "next/image";
import React from "react";
import time from "../assets/GIF/time.gif";
import gear from "../assets/GIF/gear.gif";
import robot from "../assets/GIF/robot.gif";
import stock from "../assets/GIF/stock.gif";
import search from "../assets/GIF/search.gif";
import ImmersionImage from "../assets/latestnewImage.png";
import { constants, Immersiondata } from "./constants";

export const Immersion = () => {
  return (
    <div className=" px-[20px] xl:px-[100px] py-[100px] flex  flex-col lg:flex-row  gap-4 justify-between items-center">
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
      <div>
        {Immersiondata.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[417px] min-h-[129px] w-full bg-[#FFFFFF33] flex gap-[50px] justify-between items-center mt-[10px] immersionBgColor p-[20px]"
            >
              <div className="h-20 w-20  flex justify-center items-center  gifshadow bg-[white]">
                <Image src={item.img} alt="Image" />
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
  );
};
