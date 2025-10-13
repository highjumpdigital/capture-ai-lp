"use client";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FilledButton } from "./FilledButton";
import { ChatPerformancedata, constants, EndlessFeaturesData } from "../_common/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EndlessFeatureBG from "../assets/EndlessFeature.svg";
import { useRouter } from "next/navigation";
import TickIcon from "../assets/tick-square.svg";



export const ChatPerformanceV2 = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const router = useRouter();
   
  const handleBookDemo = () => {
    router.push('/book-demo');
  };
  

  return (
    <div
      id="features"
      className="px-4 sm:px-[20px] relative z-10 pt-6 pb-6 sm:pt-8 sm:pb-7 md:pt-[100px] md:pb-[50px] bg-white"
    >
      <div className="max-w-[1312px] mx-auto">
        {/* Section Title */}
        <div className="flex flex-col w-full gap-2 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[20px] sm:text-[26px] lg:text-[64px] leading-[24px] sm:leading-[26px] lg:leading-[48px] Cairo text-chat-title text-center sm:text-center lg:text-start font-normal">
            {constants.chatperformance.title}
          </p>
          <p className="text-black font-bold text-[20px] sm:text-[26px] lg:text-[64px] leading-[24px] sm:leading-[26px] lg:leading-[48px] Cairo text-center sm:text-center lg:text-start">
            {constants.chatperformance.subtitle}
          </p>
        </div>

        {/* Features Section with Stacked Scroll Effect */}
        <div className="relative">
          {EndlessFeaturesData.map((feature, index) => {
            const isLast = index === EndlessFeaturesData.length - 1;
            return (
              <div
                key={index}
                className={`${isLast ? 'relative md:-top-8' : 'sticky top-[64px] sm:top-[80px] md:top-[100px]'} w-full mb-6 sm:mb-8`}
                style={{
                  zIndex: index + 1,
                }}
              >
                <div
                  className="relative flex flex-col md:flex-row w-full gap-4 overflow-hidden rounded-[4px] bg-cover bg-center border-2 border-[#E4E6EC] bg-white mb-5"
                  style={{
                    backgroundImage: `url(${EndlessFeatureBG.src})`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Left Section (Video) */}
                  <div className="md:basis-[40%] relative z-10 flex flex-col w-full md:w-1/2 justify-center items-center px-4 pt-4 md:pt-6 md:px-6 ">
                    <div
                      className="absolute top-[30px] sm:top-[40px] md:top-[150px] w-[80px] h-[200px] sm:w-[100px] sm:h-[250px] md:w-[200px] md:h-[480px] bg-[#FF4206] rounded-full blur-[40px] sm:blur-[50px] md:blur-[90px]"
                    ></div>
                    <video
                      src={feature.vedioUrl}
                      className="w-[200px] h-[400px] sm:w-[250px] sm:h-[500px] md:w-[280px] md:h-[560px] lg:w-[326px] lg:h-[642px] relative top-[10px] md:top-[20px] rounded-lg object-contain shadow-md mt-5"
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                  </div>

                  {/* Right Section (Feature Text or Content) */}
                  <div className="md:basis-[60%] relative z-10 flex flex-col w-full md:w-1/2 justify-center px-4 pt-4 md:pt-6 md:px-6 ">
                    <h3 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold text-black leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[64px] uppercase mb-2 Cairo">
                      {feature.title}
                    </h3>
                    <p className="text-[#000000CC] text-[14px] sm:text-[15px] md:text-[16px] Inter font-medium leading-relaxed mb-3 md:mb-4 mt-2">
                      {feature.subtitle}
                    </p>
                    <div className="pb-2 mb-4 md:mb-[80px] lg:mb-[130px] md:h-auto lg:h-[150px]">
                      {feature.list.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 mb-2 md:mb-3">
                          <Image
                            src={TickIcon}
                            alt="Tick"
                            width={16}
                            height={16}
                            className="mt-1 flex-shrink-0"
                          />
                          <div className="text-[#000000CC] text-[13px] sm:text-[14px] Inter font-medium leading-relaxed">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>

                    <FilledButton
                      buttonTitle="BOOK A DEMO"
                      className="text-white h-10 w-full sm:w-[150px] bg-[#FF4206] Cairo text-[14px] sm:text-[16px] leading-4 font-bold mb-5 sm:mb-0"
                      onClick={() => handleBookDemo()}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
