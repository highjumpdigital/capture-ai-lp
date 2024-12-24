import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FilledButton } from "./FilledButton";
import { ChatPerformancedata, constants } from "./constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ChatPerformance = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div id="features" className="px-5 py-8 xl:p-[50px]   w-[100%] bg-white">
      <div className=" text-[26px] lg:text-[48px]  leading-[26px] lg:leading-[48px] Cairo text-[#FF4206] text-center font-bold">
        {constants.chatperformance.title}
        <span className="text-black">{constants.chatperformance.subtitle}</span>
      </div>
      <div className="  py-8  gap-4  flex flex-col lg:flex-row justify-between items-center w-full max-w-[1312px] mx-auto bg-white ">
        <div className="max-w-[641px] h-[374px] flex flex-col justify-between items-center w-full">
          {ChatPerformancedata.map((item, index) => {
            return (
              <motion.div
                key={index}
                onClick={() => setSelectedOption(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`max-w-[641px] ${
                  index === 0 ? "mt-[0px]" : "mt-[10px]"
                } flex justify-between items-center w-full  cursor-pointer rounded-[5px] p-[10px] border-[3px] ${
                  selectedOption === index
                    ? "border-[#FF4206] bg-[#FF420633]"
                    : "border-[#383E4E33] bg-[#FFFFFFCC]"
                } min-h-[54px] 
          hover:bg-[#FF420633] hover:border-[#FF4206]`}
              >
                <div className="font-bold text-[16px] leading-[16px] text-[#000000CC] Inter uppercase">
                  {item.title}
                </div>
                <div>
                  <MdArrowForward fill="#FF4206" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-[641px] sm:h-[374px]  w-full flex flex-col sm:flex-row    gap-5 justify-between items-center rounded-[5px] p-3 border-[3px] border-[#383E4E33] ">
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
              className="font-medium text-[16px] leading-6  text-[#000000CC]"
            >
            {ChatPerformancedata[selectedOption].detail}
            </motion.div>

            <div className="mt-[10px]">
              <FilledButton
                buttonTitle={constants.buttons.getStarted}
                className="rounded-[8px] w-[141px] h-10 text-white text-4  font-bold bg-[#FF4206] leading-4 "
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
