import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import ChatImage from "../assets/chatimage.png";
import { FilledButton } from "./FilledButton";
import { ChatPerformancedata, constants } from "./constants";
export const ChatPerformance = () => {
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
              <div
                key={index} // Ensure unique keys for list items
                className={`max-w-[641px] ${
                  index === 0 ? "mt-[0px]" : "mt-[10px]"
                } flex justify-between items-center w-full bg-[#FFFFFFCC] cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px] 
          hover:bg-[#FF420633] hover:border-[#FF4206]`}
              >
                <div className="font-bold text-[16px] leading-[16px] text-[#000000CC] Cairo uppercase">
                  {item.title}
                </div>
                <div>
                  <MdArrowForward fill="#FF4206" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-[641px] sm:h-[374px]  w-full flex flex-col sm:flex-row    gap-5 justify-between items-center rounded-[5px] p-3 border-[3px] border-[#383E4E33] ">
          <div className="h-[334px]  w-[313px]">
            <Image
              src={ChatImage}
              alt="ChatImage"
              width={313}
              height={334}
              className="h-full"
            />
          </div>
          <div className="max-w-[248px]">
            <div className="font-medium text-[16px] leading-6  text-[#000000CC] ">
              {constants.chatperformance.showase}
            </div>

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
