import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowUpward } from "react-icons/md";
import { constants, FaqData } from "./constants";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" flex justify-center   items-center">
      <div id="faq" style={{ backgroundImage: `url('/background/faqimage.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="  faq flex justify-center pt-[20px] lg:pt-[80px]  px-[20px] lg:px-[100px] items-start max">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-start w-full max-w-[1311px] mx-auto">
          {/* Left Section */}
          <div className="sticky top-">
            <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] text-[#FF4206]">
              {constants.ask.frequentalyasked}
            </div>
            <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] text-black font-bold">
              {constants.ask.QUESTIONS}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-2">
            {FaqData.map((item, index) => (
              <div
                key={index}
                className="max-w-[658px] w-full hover:bg-[#FF420633] hover:border-[#FF4206] cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px] bg-[#F2F5F7]"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center sm:items-end">
                  <div className="text-4 text-black leading-4 font-bold flex justify-start items-center uppercase Cairo sm:mt-[5px] ">
                    {item.title}
                  </div>
                  <div className="cursor-pointer mt-1">
                    {activeIndex === index ? (
                      <MdOutlineArrowUpward fill="#FF4206" />
                    ) : (
                      <MdArrowForward fill="#FF4206" />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-[500px] " : "max-h-0"
                  }`}
                >
                  <div className=" text-[#000000CC] my-4 font-['Inter'] text-[16px] font-normal leading-[16px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
