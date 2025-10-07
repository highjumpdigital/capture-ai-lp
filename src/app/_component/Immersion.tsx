import Image from "next/image";
import React from "react";
import { constants, Immersiondata } from "../_common/constants";
import ImmersionImage from "../assets/Chatbot preview.svg";

export const Immersion = () => {
  return (
    <div className=" px-[20px] relative z-10  pt-8 pb-[20px] sm:py-[100px] " style={{ backgroundColor: constants.immersionCard.bgColor }}>
      <div className="max-w-[1311px] mx-auto flex  flex-col lg:flex-row  gap-4 justify-between items-center">

      <div>
        <div className="text-center lg:text-left text-[34px]  lg:text-[64px] mt-[10px] ml-[-3px]  leading-[30px] ml-[-2px]lg:leading-[64px] text-[#FF4206] ">
          {constants.immersion.fullimmersion} <br /> <br /> 
          <span className="font-bold text-black  "
        
          >
            {" "}
            {constants.immersion.fullattention}
          </span>
        </div>

        <div className="flex justify-start items-center mt-[50px]">
          {/* <Image src={ImmersionImage} alt="ImmersionImage" /> */}
          <video src="/full_immersion.mp4" autoPlay muted loop playsInline className="w-full max-w-[790px] h-[530px] object-cover rounded-[14px]"/>
        </div>
      </div>
      <div className="">
        {Immersiondata.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[400px] min-h-[127px] w-full bg-[#FFFFFF33] border-2 border-[rgba(240,242,246)] border-solid rounded-[5px]  z-10 flex gap-[35px] justify-between items-center mt-[8px] p-[18px] transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-[72px] w-[72px] flex justify-center items-center rouneded-[5px] gifshadow bg-[white]">
                <Image src={item.img} alt="Image" className="rounded-[5px]" height={36} width={36} unoptimized />
              </div>

              <div>
                <div className="font-bold text-[13px] sm:text-[14px] md:text-[15px] leading-4 text-black uppercase max-w-[230px] ">
                  {item.title}
                </div>
                <div className="font-medium font-['Inter'] text-[12px] sm:text-[13px] md:text-[14px] leading-[12px] sm:leading-[13px] md:leading-[14px] mt-2 sm:mt-3 text-black max-w-[230px] text-left underline-offset-[from-font] decoration-skip-ink-none">
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
