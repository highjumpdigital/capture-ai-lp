import Image from "next/image";
import React from "react";
import time from "../assets/GIF/time.gif";
import gear from "../assets/GIF/gear.gif";
import robot from "../assets/GIF/robot.gif";
import stock from "../assets/GIF/stock.gif";
import search from "../assets/GIF/search.gif";
import ImmersionImage from "../assets/Immersion.png";

export const Immersion = () => {
  const data = [
    {
      img: time,
      title: "ROUND-THE-CLOCK ENGAGEMENT",
      description:
        "Your AI Chatbot is available 24/7, ensuring every potential lead is captured.",
    },
    {
      img: gear,
      title: "Customised with Your Business Info",
      description:
        "Equipped with your business’s details, your AI Chatbot answers all lead queries comprehensively.",
    },
    {
      img: robot,
      title: "Efficient Lead Management",
      description:
        "Expertly captures and channels inquiries, boosting engagement and user experience.",
    },
    {
      img: stock,
      title: "Higher Conversion Potential ",
      description:
        "Personalised interactions foster deeper understanding and nurturing of prospects.",
    },
    {
      img: search,
      title: "full screen sales agent",
      description:
        "choose from a discreet chat bot, or integrate our system directly into your platform.",
    },
  ];
  return (
    <div className="px-[100px] mt-[100px] flex justify-between items-center">
      <div>
        <div className="text-[64px] leading-[64px] text-[#FF4206]">
          FULL IMMERSION. <br />
          <span className="font-bold text-black">FULL ATTENTION.</span>
        </div>

        <div className="flex justify-start items-center">
          <Image src={ImmersionImage} alt="ImmersionImage" />
        </div>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index} className="max-w-[417px] w-full bg-[#FFFFFF33] flex gap-[50px] justify-between items-center mt-[10px] immersionBgColor p-[20px]">
              <div className="h-20 w-20  flex justify-center items-center rounded-[5px] bg-[white]">
                <Image src={item.img} alt="Image" />
              </div>

              <div> 
                <div className="font-bold text-[16px] leading-4 text-[#000000CC] uppercase max-w-[237px] ">{item.title}</div>
                <div className="font-medium text-[14px] leading-[14px mt-4 text-[#000000CC] max-w-[237px] ">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
