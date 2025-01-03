import React from 'react';
import { constants } from './constants';

interface PlanDetailsProps {
  hoveredIndex?: number | null;
  onHoverIndex?: (index: number | null) => void;
}

export const PlanDetails: React.FC<PlanDetailsProps> = ({ hoveredIndex, onHoverIndex }) => {
  return (
    <div className="flex flex-col gap-5 max-w-[308px] p-5 border bg-[#FFFFFF80] border-[#00000033] plandetailshadow rounded-[5px] mt-[109px]">
      {constants.planDetailsData.map((item, index) => (
        <div
          key={index}
          className={`font-bold Inter text-[14px] leading-[21px] cursor-pointer transition-all duration-200 ease-in-out ${
            hoveredIndex === index 
              ? "bg-[#FFFFF9] text-[#633E34] -mx-5 px-5 py-1" 
              : "-mx-5 px-5 py-1"
          }`}
          onMouseEnter={() => onHoverIndex?.(index)}
          onMouseLeave={() => onHoverIndex?.(null)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};