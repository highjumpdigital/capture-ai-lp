import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FilledButton } from "./FilledButton";
import { ChatPerformancedata, constants } from "../_common/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ChatPerformance = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div
      id="features"
      className="px-5 pt-8 sm:py-8 xl:p-[100px] w-[100%] bg-white"
    >
      <div className="max-w-[1312px] mx-auto">
        <div className="text-[20px] sm:text-[26px] lg:text-[48px] leading-[24px] sm:leading-[26px] lg:leading-[48px] Cairo text-chat-title text-center sm:text-start font-normal">
          {constants.chatperformance.title}
          <span className="text-black font-bold">{constants.chatperformance.subtitle}</span>
        </div>
        <div className="pb-8 pt-1 sm:py-8 gap-4 flex flex-col lg:flex-row justify-between items-start w-full bg-white mt-8">
          <div className="flex flex-col w-full lg:max-w-[641px]">
            {ChatPerformancedata.map((item, index) => {
              const isSelected = selectedOption === index;
              return (
                <div key={index} className="w-full">
                  <motion.div
                    onMouseEnter={() => setSelectedOption(index)}
                    className={`${
                      index === 0 ? "mt-[0px]" : "mt-[10px]"
                    } flex justify-between items-center w-full cursor-pointer rounded-[5px] p-[10px] border-[3px] ${
                      isSelected
                        ? "border-chat-border-selected bg-chat-bg-selected"
                        : "border-chat-border bg-chat-bg"
                    } min-h-[54px] hover:bg-chat-bg-selected hover:border-chat-border-selected`}
                  >
                    <div className="font-bold text-[14px] sm:text-[16px] leading-[14px] sm:leading-[16px] text-chat-text Inter uppercase">
                      {item.title}
                    </div>
                    <div>
                      <MdArrowForward fill="#FF4206" />
                    </div>
                  </motion.div>
                  
                  {/* Mobile Image Display */}
                  {isSelected && (
                    <div className="lg:hidden mt-4 w-full rounded-[5px] p-3 border-[3px] border-chat-border">
                      <div className="h-[334px] w-[290px] mx-auto relative">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedOption}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                          >
                            <Image
                              src={ChatPerformancedata[selectedOption].image}
                              alt={ChatPerformancedata[selectedOption].title}
                              fill
                              className="object-contain"
                              priority
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className="mt-4 w-[290px] mx-auto">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="max-w-[230px] font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#000000CC] font-['Inter'] text-left"
                        >
                          {ChatPerformancedata[selectedOption].detail}
                        </motion.div>
                        <div className="mt-[10px] flex">
                          <FilledButton
                            buttonTitle={constants.buttons.getStarted}
                            className="rounded-[8px] w-[141px] h-10 text-white text-[14px] sm:text-[16px] text-center font-bold bg-[#FF4206] leading-4"
                            onClick={() => {}}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Image Display */}
          <div className="hidden lg:flex max-w-[641px] h-[374px] w-full flex-row gap-5 justify-between items-center rounded-[5px] p-3 border-[3px] border-[#E4E6EC]">
            <div className="h-[334px] w-[313px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedOption}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={ChatPerformancedata[selectedOption].image}
                    alt={ChatPerformancedata[selectedOption].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="max-w-[248px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#000000CC] font-['Inter'] text-left"
              >
                {ChatPerformancedata[selectedOption].detail}
              </motion.div>
              <div className="mt-[10px] flex">
                <FilledButton
                  buttonTitle={constants.buttons.getStarted}
                  className="rounded-[8px] w-[141px] h-10 text-white text-[14px] sm:text-[16px] text-center font-bold bg-[#FF4206] leading-4"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
