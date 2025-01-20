import React from 'react';
import { constants } from '../_common/constants';

interface PlanDetailsProps {
  hoveredIndex?: number | null;
  onHoverIndex?: (index: number | null) => void;
}

export const PlanDetails: React.FC<PlanDetailsProps> = ({ hoveredIndex, onHoverIndex }) => {
  return (
    <div className="flex flex-col gap-[19px] max-w-[306px] w-[306] p-3 sm:p-5 border bg-[#FFFFFF80] border-[#00000033] plandetailshadow rounded-[5px] mt-[60px] sm:mt-[109px]">
      {constants.planDetailsData.map((item, index) => (
        <div
          key={index}
          className={`font-bold Inter text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] cursor-pointer transition-all duration-200 ease-in-out ${
            hoveredIndex === index 
              ? "bg-[rgb(255,251,249)] text-[#633E34] -mx-3 sm:-mx-5 px-3 sm:px-5 py-1" 
              : "-mx-3 sm:-mx-5 px-3 sm:px-5 py-1"
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