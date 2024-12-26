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
              className="max-w-[400px] min-h-[110px] w-full bg-[#FFFFFF33] border-2 border-[rgba(240,242,246)] border-solid rounded-[5px]  z-10 flex gap-[35px] justify-between items-center mt-[8px] p-[18px] transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-[72px] w-[72px] flex justify-center items-center rouneded-[5px] gifshadow bg-[white]">
                <Image src={item.img} alt="Image"  className="rounded-[5px]" height={36} width={36}  />
              </div>

              <div>
                <div className="font-bold text-[15px] leading-4 text-black uppercase max-w-[230px] ">
                  {item.title}
                </div>
                <div className="font-medium text-[13px] leading-[14px] mt-3 text-black max-w-[230px] ">
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
