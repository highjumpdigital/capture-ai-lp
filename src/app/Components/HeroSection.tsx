import React from "react";
import PeopleGroup from "../assets/peoplephotos.svg";
import Image from "next/image";
import { FilledButton } from "./FilledButton";
import { MarqueeComponent } from "./MarqueeComponent";
import { constants } from "./constants";
import herosectionimage from"../assets/herosectionbgImage.png"
import DashBoardImage from "../assets/dashboard/pixelcut-export (1).png"

export const HeroSection = (): React.ReactElement => {
  return (
    <div className="heroSection relative" style={{
      backgroundImage: `url(${herosectionimage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="flex justify-center font-medium  Cairo text-[40px] md:text-[80px] lg:text-[119px]  leading-[40px] md:leading-[80px] lg:leading-[119px]  text-[#FF4206] items-center pt-[30px] md:pt-[100px]">
       {constants.herosection.CONVERSATIONS}
      </div>
      <div className="flex justify-center font-medium  Cairo text-[40px]  md:text-[80px] lg:text-[119px] leading-[40px] md:leading-[80px] lg:leading-[119px]  text-black items-center">
      {constants.herosection.thatconvert}

      </div>
      <div className="max-w-[848px] text-[16px]  Inter px-[20px]  md:text-[24px]  leading-[26px] md:leading-[36px] text-center mx-auto mt-8  text-black">
      {constants.herosection.chatbotengangement}

      </div>

      <div className="flex justify-center items-center gap-5   mt-[50px]">
        <div>
          <FilledButton
            buttonTitle={constants.buttons.getStarted}
            className="rounded-[8px] w-[141px] h-10 text-white text-4  font-bold bg-[#FF4206] leading-4 "
            onClick={() => {}}
          />
        </div>
        <div className="font-bold text-4 leading-4 text-[#FF4206]">
        <div 
          onClick={() => {
            document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="cursor-pointer"
        >
          {constants.herosection.viewSolution}
        </div>
        </div>
      </div>

      <div className="absolute bottom-0  hidden md:block rounded-tl-[21px] rounded-tr-[21px]  right-[30%] left-[30%]  border-l-[10px] border-r-[10px] border-t-[10px]  border-[rgba(136,140,143,0.9)] z-10">
        <Image src={DashBoardImage} alt="" className="h-[301px]" 
        
        height={500}
        />
      </div>
      <div>
        <div className="mt-[40px] flex flex-col justify-center items-center">
          <Image src={PeopleGroup} alt="PeopleGroup" />
          <div className="font-light text-[12px] leading-3 mt-[10px] text-black">
          {constants.herosection.leadsCapture}

          </div>
        </div>
      </div>
      <div className="mt-[45px]">
        <MarqueeComponent />
      </div>
    </div>
  );
};