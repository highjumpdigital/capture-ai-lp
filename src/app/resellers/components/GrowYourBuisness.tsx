import React from "react";
import { FilledButton } from "../../_component/FilledButton";
import { Inter } from "next/font/google";
import growYourBusiness from "../../assets/grow-buisness-bg.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const GrowYourBusiness = () => {
  return (
    <section
      className="py-12 lg:py-[110px] bg-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${growYourBusiness.src})`,
      }}
    >
      <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 text-center">
          {/* Tagline Box */}
          {/* <div
            className={`font-medium text-sm sm:text-lg md:text-xl px-6 sm:px-8 h-[48px] sm:h-[62px] border border-[#FF4206] rounded-[38px] bg-[#FF420624] max-w-full sm:max-w-[415px] flex justify-center items-center ${inter.className}`}
          >
            Capture AI Chatbot Reseller Program
          </div> */}

          {/* Headings */}
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[30px] sm:text-[48px] lg:text-[64px] xl:text-[109px] font-semibold leading-[100%] text-[#FF4206] Cairo">
              GROW YOUR BUSINESS &
            </p>
            <p className="text-[30px] sm:text-[48px] lg:text-[64px] xl:text-[109px] font-bold leading-[100%] text-[#000000] Cairo tracking-[1px] sm:tracking-[2px] lg:tracking-[3.2px]">
              BOOST YOUR INCOME
            </p>
          </div>

          {/* Description */}
          <div
            className={`text-[16px]  Inter   md:text-[24px]  leading-[26px] md:leading-[36px] text-center mx-auto font text-black sm:max-w-[1034px] max-w-[320px] tracking-[0.3px] sm:tracking-[0.4px] lg:tracking-[0.48px] `}
          >
            Unlock an exceptional opportunity to grow your business and generate a recurring income stream by becoming a reseller for Capture AI’s advanced chatbot software.
          </div>

          {/* Button */}
          <FilledButton
            buttonTitle="REGISTER TO APPLY"
            className="h-10 w-[200px] px-8 bg-[#FF4206] rounded-lg font-bold text-[14px] sm:text-[16px] text-white"
            onClick={() => {
              window.location.href = "/resellers/register";
            }}
          />
        </div>
      </div>
    </section>
  );
};
