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
      className="px-[20px] relative z-10 pt-8 pb-7 sm:pt-[100px] sm:pb-[50px] bg-white"
    >
      <div className="max-w-[1312px] mx-auto">
        {/* Section Title */}
        <div className="flex flex-col w-full gap-2 mb-20">
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
                className={`${isLast ? 'relative' : 'sticky'} w-full mb-6`}
                style={{
                  top: isLast ? 'auto' : `${index * 20}px`,
                  zIndex: index + 1,
                }}
              >
                <div
                  className="relative flex flex-row w-full gap-4 overflow-hidden rounded-[4px] bg-cover bg-center border-2 border-[#E4E6EC] bg-white"
                  style={{
                    backgroundImage: `url(${EndlessFeatureBG.src})`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Left Section (Video) */}
                  <div className="basis-[40%] relative z-10 flex flex-col w-1/2 justify-center items-center p-4">
                    <div 
                      className="absolute top-[150px] w-[200px] h-[480px] bg-[#FF4206] rounded-full blur-[90px]"
                    ></div>
                    <video
                      src={feature.vedioUrl}
                      className="w-[326px] h-[642px] relative top-[20px] rounded-lg object-cover shadow-md mt-5"
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                  </div>

                  {/* Right Section (Feature Text or Content) */}
                  <div className="basis-[60%] relative z-10 flex flex-col w-1/2 justify-center p-6">
                    <h3 className="text-[64px] font-bold text-black leading-[64px] uppercase mb-2 Cairo">
                      {feature.title}
                    </h3>
                    <p className="text-[#000000CC] text-[16px] Inter font-medium leading-relaxed mb-4 mt-2">
                      {feature.subtitle}
                    </p>
                    <div className="pb-3 mb-[130px]">
                      {feature.list.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 mb-3">
                          <Image
                            src={TickIcon}
                            alt="Tick"
                            width={16}
                            height={16}
                            className="mt-1 flex-shrink-0"
                          />
                          <div className="text-[#000000CC] text-[14px] Inter font-medium leading-relaxed">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>

                    <FilledButton
                      buttonTitle="BOOK A DEMO"
                      className="text-white h-10 w-[150px] bg-[#FF4206] Cairo text-[16px] leading-4 font-bold sm:text-[16px]"
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
