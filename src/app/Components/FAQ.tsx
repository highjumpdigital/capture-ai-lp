import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowUpward } from "react-icons/md";
import { constants, FaqData } from "./constants";

export const FAQ = () => {


  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq flex justify-center  px-[20px] lg:px-[100px] items-center">
      <div className="flex flex-col lg:flex-row gap-5  justify-between items-start w-full">
        <div className="">
          <div className=" text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] text-[#FF4206]">
            {constants.ask.frequentalyasked}
          </div>
          <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] text-black font-bold">
            {constants.ask.QUESTIONS}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {FaqData.map((item, index) => (
            <div
              key={index}
              className="max-w-[658px] w-full  hover:bg-[#FF420633] hover:border-[#FF4206] cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px]"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <div className="text-4 leading-4 font-bold flex justify-start items-center uppercase mt-[5px] ">
                  {item.title}
                </div>
                <div className="cursor-pointer">
                  {activeIndex === index ? (
                    <MdOutlineArrowUpward fill="#FF4206" />
                  ) : (
                    <MdArrowForward fill="#FF4206" />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out  ${
                  activeIndex === index ? "max-h-[500px] " : "max-h-0"
                }`}
              >
                <div className="text-sm text-gray-700 my-4 ">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
