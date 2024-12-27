import React from "react";
import Image, { StaticImageData } from "next/image";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FilledButton } from "./FilledButton";
import { constants } from "./constants";

// Define Props Type
interface PlanCardProps {
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
    if (price === "FREE") return "FOR FREE";
    if (price.startsWith("$")) return `FOR ${price}`;
    return buttonTitle;
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className={`flex flex-col gap-4 max-w-[308px] w-full p-5 border  plandetailshadow rounded-[5px]  ${className} `}
    >
      {/* Header Section */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 justify-start items-center">
          <Image src={image} alt={title} width={24} height={24} />
          <div
            className={`text-[22px] leading-[22px] font-bold Cairo ${headerText}   `}
          >
            {title}
          </div>
        </div>
        <div className="font-light text-[22px] leading-[22px] Cairo text-[#FF4206]">
          {price}
        </div>
      </div>

      {/* Description Section */}
      <div className={`border border-[#00000033] Cairo p-[24px] rounded-[5px] text-[12px] leading-[18px] ${
        title === "INFINITY PRO" ? "bg-[#3E444A] text-white" : "bg-[#D4D6D8]"
      }`}>
        {constants.paymentSol.offer}
      </div>

      {/* Plan Features */}
      <div className="flex flex-col gap-5 mt-5 ">
        {planData.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 justify-start items-center text-[12px] font-bold cursor-pointer transition-all duration-200 ease-in-out ${
              hoveredIndex === index 
                ? title === "INFINITY PRO"
                  ? "bg-[rgb(51,13,1)] -mx-5 px-5 py-1" 
                  : "bg-[rgb(255,255,249)] text-[#633E34] -mx-5 px-5 py-1"
                : "-mx-5 px-5 py-1"
            }`}
            onMouseEnter={() => onHoverIndex?.(index)}
            onMouseLeave={() => onHoverIndex?.(null)}
          >
            <div>
              {item.flag ? (
                <div className="bg-[green] rounded-[50%] border border-white h-5 w-5 flex justify-center items-center">
                  <MdDone fill="white" size={12} />
                </div>
              ) : (
                <div className="bg-[red] rounded-[50%] border border-white h-5 w-5 flex justify-center items-center">
                  <RxCross2 fill="white" color="white" size={12} />
                </div>
              )}
            </div>
            <div
              className={`text-[14px] Inter leading-[21px] font-bold ${textClass} ${
                hoveredIndex === index && title !== "INFINITY PRO" ? "text-[#633E34]" : ""
              }`}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-5">
        <FilledButton
          buttonTitle={buttonTitle}
          hoverText={getHoverText(price)}
          className="text-white h-10 w-full bg-[#FF4206]"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};