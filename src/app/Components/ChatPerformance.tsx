import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import ChatImage from "../assets/chatimage.png";
import { FilledButton } from "./FilledButton";
export const ChatPerformance = () => {
  const data = [
    {
      title: "3rd party tool integration",
    },
    {
      title: "Provide company documents",
    },
    {
      title: "Showcase work",
    },
    {
      title: "Lead capture functionality",
    },
    {
      title: "User intent configuration",
    },
    {
      title: "Suggestion capabilities",
    },
  ];

  return (
    <div id="features" className=" px-5 py-8 xl:p-[100px] gap-4  flex flex-col lg:flex-row justify-between items-center w-full bg-white ">
   <div className="max-w-[641px] h-[374px] flex flex-col justify-between items-center w-full">
  {data.map((item, index) => {
    return (
      <div
        key={index} // Ensure unique keys for list items
        className={`max-w-[641px] ${
            
          index === 0 ? "mt-[0px]" : "mt-[10px]"
        } flex justify-between items-center w-full bg-[#FFFFFFCC] cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px] 
          hover:bg-[#FF420633] hover:border-[#FF4206]`}
      >
        <div className="font-bold text-[16px] leading-[16px] text-[#000000CC] uppercase">
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
            Showcase your work to your customers, from before and after images
            to showcasing your most recent testimonials.
          </div>

          <div className="mt-[10px]">
            <FilledButton
              buttonTitle="GET STARTED"
              className="rounded-[8px] w-[141px] h-10 text-white text-4  font-bold bg-[#FF4206] leading-4 "
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
