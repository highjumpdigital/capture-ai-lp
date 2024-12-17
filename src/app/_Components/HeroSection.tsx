import React from "react";
import HeroSectionImage from "../assets/CONVERSATIONS THAT CONVERT..png";
import PeopleGroup from "../assets/personGroup.png";
import HeroSectionDashboardImage from "../assets/image.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FilledButton } from "./FilledButton";
import { MarqueeComponent } from "./MarqueeComponent";
export const HeroSection = (): any => {
  return (
    <div className=" heroSection relative">
      <div className="flex justify-center font-medium  text-[40px] md:text-[80px] lg:text-[119px]  leading-[40px] md:leading-[80px] lg:leading-[119px]  text-[#FF4206] items-center pt-[100px]">
        CONVERSATIONS 
      </div>
      <div className="flex justify-center font-medium  text-[40px]  md:text-[80px] lg:text-[119px] leading-[40px] md:leading-[80px] lg:leading-[119px]  text-black items-center">
        THAT CONVERT.
      </div>
      <div className="max-w-[848px] text-[16px]  px-[20px]  md:text-[24px]  leading-[26px] md:leading-[36px] text-center mx-auto mt-8  text-black">
        Our 24/7 AI Chatbot boosts engagement, manages leads, and integrates
        seamlessly with your CRM for efficient interactions.
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
          VIEW SOLUTIONS
        </div>
      </div>
      <div className="absolute bottom-0  hidden md:block  right-[30%] left-[30%] herobackground z-10">
        <Image src={HeroSectionDashboardImage} alt="" />
      </div>
      <div>
        <div className="mt-[40px] flex flex-col justify-center items-center">
          <Image src={PeopleGroup} alt="PeopleGroup" />
          <div className="font-light text-[12px] leading-3 mt-[10px] text-black">
            5000+ LEADS CAPTURED FOR OUR PARTNERS
          </div>
        </div>
      </div>
      <div className="mt-[45px]">
        <MarqueeComponent />
      </div>
    </div>
  );
};
