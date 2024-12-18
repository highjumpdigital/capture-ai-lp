import React from "react";
import HeroSectionImage from "../assets/CONVERSATIONS THAT CONVERT..png";
import PeopleGroup from "../assets/personGroup.png";
import HeroSectionDashboardImage from "../assets/dashboardiamge.png";
import Image from "next/image";
import { FilledButton } from "./FilledButton";
import { MarqueeComponent } from "./MarqueeComponent";
import { constants } from "./constants";
export const HeroSection = (): any => {
  return (
    <div className=" heroSection relative">
      <div className="flex justify-center font-medium  text-[40px] md:text-[80px] lg:text-[119px]  leading-[40px] md:leading-[80px] lg:leading-[119px]  text-[#FF4206] items-center pt-[100px]">
       {constants.herosection.CONVERSATIONS}
      </div>
      <div className="flex justify-center font-medium  text-[40px]  md:text-[80px] lg:text-[119px] leading-[40px] md:leading-[80px] lg:leading-[119px]  text-black items-center">
      {constants.herosection.thatconvert}

      </div>
      <div className="max-w-[848px] text-[16px]  px-[20px]  md:text-[24px]  leading-[26px] md:leading-[36px] text-center mx-auto mt-8  text-black">
      {constants.herosection.chatbotengangement}

      </div>

      <div className="flex justify-center items-center gap-5   mt-[50px]">
        <div>
          <FilledButton
            buttonTitle="GET STARTED"
            className="rounded-[8px] w-[141px] h-10 text-white text-4  font-bold bg-[#FF4206] leading-4 "
            onClick={() => {}}
          />
        </div>
        <div className="font-bold text-4 leading-4 text-[#FF4206]">
        {constants.herosection.viewSolution}

        </div>
      </div>
      <div className="rounded-[40px]">

      <div className="absolute bottom-0  hidden md:block rounded-[10px]  right-[30%] left-[30%]  herosectionDashboardImage z-10">
        <Image src={HeroSectionDashboardImage} alt="" className="" 
        
        height={500}
        />
      </div>
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
