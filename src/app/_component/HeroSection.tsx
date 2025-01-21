import React from "react";
import Image from "next/image";
import { FilledButton } from "./FilledButton";
import { MarqueeComponent } from "./MarqueeComponent";
import { constants } from "../_common/constants";
import herosectionimage from"../assets/herosectionbgImage.png"
import DashBoardImage from "../assets/dashboard/pixelcut-export (1).png"
import PropleImage from "../assets/herosection-profile-photoes/all-leads.svg"

export const HeroSection = (): React.ReactElement => {
  return (
    <div className="heroSection relative" style={{
      backgroundImage: `url(${herosectionimage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="flex justify-center font-medium  Cairo text-[40px] md:text-[80px] lg:text-[119px]  leading-[40px] md:leading-[80px] lg:leading-[119px]  text-primary items-center pt-[30px] md:pt-[100px]">
       {constants.herosection.CONVERSATIONS}
      </div>
      <div className="flex justify-center font-bold  Cairo text-[40px]  md:text-[80px] lg:text-[119px] leading-[40px] md:leading-[80px] lg:leading-[119px]  text-black items-center">
      {constants.herosection.thatconvert}

      </div>
      <div className="max-w-[848px] text-[16px]  Inter px-[20px]  md:text-[24px]  leading-[26px] md:leading-[36px] text-center mx-auto mt-8  text-black">
      {constants.herosection.chatbotengangement}

      </div>

      <div className="flex justify-center items-center gap-5 mt-[50px]">
        <div>
          <FilledButton
            buttonTitle={constants.buttons.getStarted}
            className="rounded-[8px] w-[141px] h-10 text-white text-4  font-bold bg-primary leading-4 "
            onClick={() => {}}
          />
        </div>
        <div className="font-bold text-4 leading-4 text-primary">
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

      <div className="absolute bottom-0 hidden md:block rounded-tl-[14px] rounded-tr-[14px] 
        right-[10%] left-[10%] 
        min-[800px]:right-[12%] min-[800px]:left-[12%]
        min-[900px]:right-[15%] min-[900px]:left-[15%]
        min-[1000px]:right-[18%] min-[1000px]:left-[18%]
        min-[1100px]:right-[22%] min-[1100px]:left-[22%]
        min-[1200px]:right-[23%] min-[1200px]:left-[23%]
        min-[1300px]:right-[26%] min-[1300px]:left-[26%]
        min-[1400px]:right-[25%] min-[1400px]:left-[25%]
        min-[1500px]:right-[27%] min-[1500px]:left-[27%]
        min-[1600px]:right-[28%] min-[1600px]:left-[28%]
        min-[1700px]:right-[29%] min-[1700px]:left-[29%]
        min-[1800px]:right-[30%] min-[1800px]:left-[30%]
        min-[1900px]:right-[31%] min-[1900px]:left-[31%]
        min-[2000px]:right-[32%] min-[2000px]:left-[32%]
        border-l-[13px] border-r-[13px] border-t-[12px] border-[rgba(136,140,143,0.8)] z-10">
        <div className="flex justify-center items-start">
          <Image 
            src={DashBoardImage} 
            alt={constants.altText.dashboard} 
            className="
              min-[700px]:h-[301px] min-[700px]:w-auto
              min-[800px]:h-[301px] min-[800px]:w-auto
              min-[1000px]:h-[301px] min-[1000px]:w-auto
              min-[1200px]:h-[301px] min-[1200px]:w-auto
              min-[1400px]:h-[301px] min-[1400px]:w-auto
              -translate-x-[1px] -translate-y-[1px] scale-[1.01]
            "
            width={1000}
            height={301}
          />
        </div>
      </div>
      <div>
        <div className="mt-[40px] flex flex-col justify-center items-center">
          <Image 
            src={PropleImage} 
            alt={constants.altText.peopleGroup} 
            width={164}
            height={100}
          />
          <div className="font-light text-[12px] leading-3 mt-[10px] text-black">
            {constants.herosection.leadsCapture}
          </div>
        </div>
      </div>
      <div className="mt-[43px]">
        <MarqueeComponent />
      </div>
    </div>
  );
};