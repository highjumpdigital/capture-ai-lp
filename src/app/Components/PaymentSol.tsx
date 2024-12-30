import { PlanCard } from "@/app/Components/PlanCard";
import { PlanDetails } from "@/app/Components/PlanDetails";
import personicon from "../assets/price/personicon.svg"
import materialsymbolrocket from "../assets/price/material-symbols_rocket.svg"
import diamond from "../assets/price/basil_diamond-solid.svg"
import { useState, useEffect } from "react";
import { constants, Plandata, STARTERPlandata, InfinityProPlandata } from "./constants";

export const PaymentSol = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Merge plan details data with plan data when on mobile
  const getMergedPlanData = (planData: typeof Plandata) => {
    if (!isMobile) return planData;
    return constants.planDetailsData.map((item, index) => ({
      title: item.text,
      flag: planData[index]?.flag ?? false
    }));
  };

  return (
    <div id="solutions" className="bg-[#F2F5F7] px-[20px] xl:px-[100px] pt-[70px] pb-[50px] lg:py-[100px]">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo text-center lg:text-left text-[#FF4206] font-bold">
          {constants.paymentSol.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairofont-bold text-black">
            {constants.paymentSol.paymentsol}
          </span>
        </div>

        <div className="flex gap-[20px] mt-[48px] lg:mt-[100px] justify-center md:justify-between items-center flex-wrap">
          <div className="hidden md:block">
            <PlanDetails hoveredIndex={hoveredIndex} onHoverIndex={setHoveredIndex} />
          </div>
          <PlanCard 
            planData={getMergedPlanData(Plandata)} 
            title="BASIC" 
            image={personicon} 
            price="FREE" 
            className="border-[#00000033] bg-[#F3F6F8]" 
            headerText="text-black" 
            textClass="text-[#000000CC]"
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
          <PlanCard 
            planData={getMergedPlanData(STARTERPlandata)} 
            title="STARTER KIT" 
            image={materialsymbolrocket} 
            price="$49/MO." 
            className="border-[#00000033] bg-[#F3F6F8]" 
            textClass="text-[#000000CC]" 
            headerText="text-black"
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
          <PlanCard 
            planData={getMergedPlanData(InfinityProPlandata)} 
            title="INFINITY PRO" 
            image={diamond} 
            price="$99/MO." 
            className="border-[#FF4206] bg-black paySolShadow" 
            textClass="text-[#FFFFFFCC]" 
            headerText="text-white"
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
        </div>
      </div>
    </div>
  );
};
