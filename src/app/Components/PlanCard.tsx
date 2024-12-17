import Image from "next/image";
import Person from "../assets/si_user-fill.png";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FilledButton } from "./FilledButton";
import { Plandata } from "./constants";
export const PlanCard = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[308px] w-full p-5 border border-[#00000033] plandetailshadow rounded-[5px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 justify-start items-center">
          <Image src={Person} alt="" width={24} height={24} />
          <div className="text-[22px] leading-[22px] font-bold">BASIC</div>
        </div>
        <div className=" font-light text-[22px] leading-[22px] text-[#FF4206]">
          FREE
        </div>
      </div>

      <div className="border border-[#00000033]  bg-[#D4D6D8] p-[24px] rounded-[5px] text-[12px] leading-[18px]">
        Offer services, answer questions, trigger user intents, manage
        documents, and provide suggestions.
      </div>

      <div className="flex flex-col gap-5">
        {Plandata.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 justify-start items-center text-[12px] font-bold ">
              <div>
                {item.flag ? (
                  <div className="bg-[green] rounded-[50%] border border-white h-5 w-5 flex justify-center items-center ">
                    <MdDone fill="white" size={12} />
                  </div>
                ) : (
                  <div className="bg-[red] rounded-[50%] border border-white h-5 w-5 flex justify-center items-center ">
                    <RxCross2 fill="white" size={12} />
                  </div>
                )}
              </div>

              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <FilledButton
          buttonTitle="GET STARTED"
          className="text-white h-10 w-full bg-[#FF4206]"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
