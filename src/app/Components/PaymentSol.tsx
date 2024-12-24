import { PlanCardsContainer } from "@/app/Components/PlanCardsContainer";
import personicon from "../assets/price/personicon.svg"
import materialsymbolrocket from "../assets/price/material-symbols_rocket.svg"
import diamond from "../assets/price/basil_diamond-solid.svg"
import { PlanDetails } from "@/app/Components/PlanDetails";
import { constants, Plandata, STARTERPlandata, InfinityProPlandata } from "./constants";
import { useState } from "react";

export const PaymentSol = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const plans = [
    {
      title: "BASIC",
      price: "FREE",
      image: personicon,
      planData: Plandata,
      className: "border-[#00000033] bg-[#F3F6F8]",
      headerText: "text-black",
      textClass: "text-[#000000CC]"
    },
    {
      title: "STARTER KIT",
      price: "$49/MO.",
      image: materialsymbolrocket,
      planData: STARTERPlandata,
      className: "border-[#00000033] bg-[#F3F6F8]",
      headerText: "text-black",
      textClass: "text-[#000000CC]"
    },
    {
      title: "INFINITY PRO",
      price: "$99/MO.",
      image: diamond,
      planData: InfinityProPlandata,
      className: "border-[#FF4206] bg-black paySolShadow",
      headerText: "text-white",
      textClass: "text-[#FFFFFFCC]"
    }
  ];

  return (
    <div id="solutions" className="bg-[#F2F5F7] px-[20px] xl:px-[100px] py-[50px] lg:py-[100px]">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo text-[#FF4206]">
          {constants.paymentSol.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairofont-bold text-black">
            {constants.paymentSol.paymentsol}
          </span>
        </div>

        <div className="flex gap-[20px] mt-[48px] lg:mt-[100px] justify-center md:justify-between items-center flex-wrap">
          <div className="mt-[110px]">
            <PlanDetails hoveredIndex={hoveredIndex} onHoverIndex={handleHover} />
          </div>
          <div className="flex-1">
            <PlanCardsContainer plans={plans} hoveredIndex={hoveredIndex} onHoverIndex={handleHover} />
          </div>
        </div>
      </div>
    </div>
  );
};
