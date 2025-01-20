import React from "react";
import Image, { StaticImageData } from "next/image";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FilledButton } from "./FilledButton";
import { constants } from "../_common/constants";
// Define Props Type
interface PlanCardProps {
  id: number;
  title: string;
  price: string;
  className: string;
headerText: string;
  textClass: string;
  image: StaticImageData | string;
  planData: { title: string; flag: boolean }[];
  buttonTitle?: string;
  onClick?: () => void;
  onHoverIndex?: (index: number | null) => void;
  hoveredIndex?: number | null;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  id,
  title,
  image,
  planData,
  price,
  buttonTitle = "GET STARTED",
  className,
  textClass,
  headerText,
  onClick,
  onHoverIndex,
  hoveredIndex,
}) => {
  const getHoverText = (price: string) => {
    if (price === constants.paymentSol.FREE) return constants.buttons.forFree;
    if (price.startsWith("$")) return constants.buttons.forPrice(price);
    return buttonTitle;
  };

  const handleClick = () => {
    if (onClick) onClick();
  };


  return (
    <div
      className={`flex flex-col gap-4 max-w-[308px]   w-full p-3 sm:p-5 border plandetailshadow rounded-[5px] ${className}`}
    >
      {/* Header Section */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-1 sm:gap-2 justify-start items-center">
          <Image
            src={image}
            alt={title}
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <div
            className={`text-[18px] sm:text-[22px] leading-[18px] sm:leading-[22px] font-bold Cairo ${headerText}`}
          >
            {title}
          </div>
        </div>
        <div className="font-light text-[18px] sm:text-[22px] leading-[18px] sm:leading-[22px] Cairo text-[#FF4206]">
          {price}
        </div>
      </div>

      {/* Description Section */}
      <div
        className={`border border-plan-border Cairo p-3 sm:p-[24px] rounded-[5px] text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] ${
          title === constants.planCard.infinityPro
            ? "bg-plan-description-dark text-plan-description-text"
            : "bg-plan-description-light"
        }`}
      >
        {constants.paymentSol.offer}
      </div>

      {/* Plan Features */}
      <div className="flex flex-col gap-3 sm:gap-5 mt-3 sm:mt-7">
        {planData.map((item, index) => (
          <div
            key={index}
            className={`flex gap-1 sm:gap-2 justify-start items-center text-[10px] h-[27.8px] sm:text-[12px] font-bold cursor-pointer transition-all duration-200 ease-in-out ${
              hoveredIndex === index
                ? title === constants.planCard.infinityPro
                  ? "bg-plan-hover-dark -mx-3 sm:-mx-5 px-3 sm:px-5 py-2"
                  : "bg-plan-hover-light text-plan-hover-text -mx-3 sm:-mx-5 px-3 sm:px-5 py-1"
                : "-mx-3 sm:-mx-5 px-3 sm:px-5 py-1"
            }`}
            onMouseEnter={() => onHoverIndex?.(index)}
            onMouseLeave={() => onHoverIndex?.(null)}
          >
            <div>
              {item.flag ? (
                <div className={`bg-[#7FC248] ${hoveredIndex === index && "bg-[#B1CF4B]"} rounded-[50%] border-[2px] border-white h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] flex justify-center items-center`}>
                  <MdDone fill="white" className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]" />
                </div>
              ) : (
                <div className={`bg-crossIconbg ${hoveredIndex === index && "bg-hoverTickBg"} rounded-[50%] border-[2px] border-white h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] flex justify-center items-center`}>
                  <RxCross2
                    fill="white"
                    color="white"
                    className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]"
                  />
                </div>
              )}
            </div>
            <div
              className={`text-[11px] sm:text-[14px] mt-[4.5px] sm:mt-0 Inter leading-[16px] sm:leading-[21px] h-5 font-bold ${hoveredIndex===index && id===3 && "text-infinityProTextColor"} ${textClass} ${
                hoveredIndex === index && title !== constants.planCard.infinityPro
                  ? "text-plan-hover-text"
                  : ""
              }`}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div
        className={`mt-3  ${
          id === 1 ? "sm:mt-5" : id === 2 ? "sm:mt-[22px]" : "sm:mt-[22px]"
        }   `}
      >
        <FilledButton
          buttonTitle={buttonTitle}
          hoverText={getHoverText(price)}
          className="text-white h-8 sm:h-10 w-full bg-[#FF4206] sofia text-[12px] leading-4 font-bold sm:text-[16px]"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};