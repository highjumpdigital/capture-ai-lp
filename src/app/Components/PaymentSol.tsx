import { PlanCard } from "@/app/Components/PlanCard";
import { PlanDetails } from "@/app/Components/PlanDetails";
import { useState, useEffect } from "react";
import { constants, Plandata, STARTERPlandata, InfinityProPlandata } from "./constants";
import { PAYMENT_CONSTANTS } from "./constants";

export const PaymentSol = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Merge plan details data with plan data when plan details are hidden
  const getMergedPlanData = (planData: typeof Plandata) => {
    if (!isMobile) return planData;
    return constants.planDetailsData.map((item: { text: string }, index: number) => ({
      title: item.text,
      flag: planData[index]?.flag ?? false
    }));
  };

  return (
    <div id="solutions" className="bg-[#F2F5F7] px-[20px] xl:px-[100px] pt-[70px] pb-[50px] lg:py-[100px]">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo text-center lg:text-left text-[#FF4206] font-bold">
          {PAYMENT_CONSTANTS.HEADING.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairofont-bold text-black">
            {PAYMENT_CONSTANTS.HEADING.PAYMENT_SOLUTIONS}
          </span>
        </div>

        <div className="flex gap-[20px] mt-[48px] lg:mt-[100px] justify-center 2xl:justify-between items-center flex-wrap 2xl:flex-nowrap">
          <div className="hidden 2xl:block">
            <PlanDetails hoveredIndex={hoveredIndex} onHoverIndex={setHoveredIndex} />
          </div>
          <PlanCard 
            planData={getMergedPlanData(Plandata)} 
            title={PAYMENT_CONSTANTS.PLANS.BASIC.TITLE}
            image={PAYMENT_CONSTANTS.PLANS.BASIC.IMAGE}
            price={PAYMENT_CONSTANTS.PLANS.BASIC.PRICE}
            className={`${PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.BORDER} ${PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.BACKGROUND}`}
            headerText={PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.HEADER}
            textClass={PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.TEXT}
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
          <PlanCard 
            planData={getMergedPlanData(STARTERPlandata)} 
            title={PAYMENT_CONSTANTS.PLANS.STARTER.TITLE}
            image={PAYMENT_CONSTANTS.PLANS.STARTER.IMAGE}
            price={PAYMENT_CONSTANTS.PLANS.STARTER.PRICE}
            className={`${PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.BORDER} ${PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.BACKGROUND}`}
            textClass={PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.TEXT}
            headerText={PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.HEADER}
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
          <PlanCard 
            planData={getMergedPlanData(InfinityProPlandata)} 
            title={PAYMENT_CONSTANTS.PLANS.PRO.TITLE}
            image={PAYMENT_CONSTANTS.PLANS.PRO.IMAGE}
            price={PAYMENT_CONSTANTS.PLANS.PRO.PRICE}
            className={`${PAYMENT_CONSTANTS.PLANS.PRO.STYLES.BORDER} ${PAYMENT_CONSTANTS.PLANS.PRO.STYLES.BACKGROUND} ${PAYMENT_CONSTANTS.PLANS.PRO.STYLES.SHADOW}`}
            textClass={PAYMENT_CONSTANTS.PLANS.PRO.STYLES.TEXT}
            headerText={PAYMENT_CONSTANTS.PLANS.PRO.STYLES.HEADER}
            hoveredIndex={hoveredIndex}
            onHoverIndex={setHoveredIndex}
          />
        </div>
      </div>
    </div>
  );
};
