// faq.tsx
import React, { useState, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowUpward } from "react-icons/md";
import { constants, FaqData } from "../_common/constants";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (isTransitioning) return;
    
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setIsTransitioning(true);
      setNextIndex(index);
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    if (isTransitioning && activeIndex === null) {
      const timer = setTimeout(() => {
        setActiveIndex(nextIndex);
        setNextIndex(null);
        setIsTransitioning(false);
      }, 300); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, activeIndex, nextIndex]);

  return (
    <div className="flex justify-center items-center">
      <div
        id="faq"
        style={{
          backgroundImage: `url('/background/faqimage.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="faq flex justify-center px-[20px] relative z-10 pt-8 pb-[20px] sm:py-[100px] items-start max"
      >
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center sm:items-start sm:justify-between w-full max-w-[1311px] mx-auto">
          {/* Left Section */}
          <div className="sticky top- w-full lg:w-auto text-center sm:text-start sm:ml-[-3px]">
            <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] text-[#FF4206] text-center lg:text-start">
              {constants.ask.frequentalyasked}
            </div>
            <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] mt-2 lg:mt-0 text-black font-bold text-center lg:text-start">
              {constants.ask.QUESTIONS}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-2 items-center w-full lg:w-auto">
            {FaqData.map((item, index) => (
              <div
                key={index}
                className="max-w-[658px] w-full hover:bg-[#FF420633] hover:border-[#FF4206] cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px] bg-[#F2F5F7]"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center sm:items-end relative">
                  <div
                    className={`text-[14px] sm:text-[16px] text-black leading-4 sm:leading-5 font-bold flex justify-start items-center uppercase Cairo max-w-[280px] sm:max-w-[780px] ${
                      index === 0 || index === 3 ? "mt-[7px] sm:mt-[5px]" : "sm:mt-[5px]"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div className="cursor-pointer mt-1 absolute top-[10%] right-0">
                    {activeIndex === index ? (
                      <MdOutlineArrowUpward fill="#FF4206" />
                    ) : (
                      <MdArrowForward fill="#FF4206" />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-[#000000CC] my-4 font-['Inter'] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] text-left underline-offset-[from-font] decoration-skip-ink-none max-w-[500px] sm:max-w-[780px]">
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
