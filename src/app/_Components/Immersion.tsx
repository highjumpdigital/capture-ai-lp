import Image from "next/image";
import React from "react";
import ImmersionImage from "../assets/Immersion.png";
import Clock from "../assets/41 Clock.png";
import setting from "../assets/29 Settings 1.png";
import Audiance from "../assets/44 Target audience 1.png";
import Rectangle from "../assets/Rectangle 64.png";
import Chatbot from "../assets/16 Chat bot 1.png";

export const Immersion = () => {
  const data = [
    {
      img: Clock,
      title: "ROUND-THE-CLOCK ENGAGEMENT",
      description:
        "Your AI Chatbot is available 24/7, ensuring every potential lead is captured.",
    },
    {
      img: setting,
      title: "Customised with Your Business Info",
      description:
        "Equipped with your business’s details, your AI Chatbot answers all lead queries comprehensively.",
    },
    {
      img: Audiance,
      title: "Efficient Lead Management",
      description:
        "Expertly captures and channels inquiries, boosting engagement and user experience.",
    },
    {
      img: Rectangle,
      title: "Higher Conversion Potential ",
      description:
        "Personalised interactions foster deeper understanding and nurturing of prospects.",
    },
    {
      img: Chatbot,
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
            <div className="max-w-[417px] w-full bg-[#FFFFFF33] flex gap-[50px] justify-between items-center mt-[10px] immersionBgColor p-[20px]">
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
