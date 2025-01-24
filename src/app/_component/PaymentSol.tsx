import { PlanCard } from "@/app/_component/PlanCard";
import { PlanDetails } from "@/app/_component/PlanDetails";
import { useState, useEffect, useRef } from "react";
import { constants, Plandata, STARTERPlandata, InfinityProPlandata } from "../_common/constants";
import { PAYMENT_CONSTANTS } from "../_common/constants";

export const PaymentSol = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlanDetailsHidden, setIsPlanDetailsHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 986);
      setIsPlanDetailsHidden(window.innerWidth < 1360);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && isMobile) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = scrollContainerRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Merge plan details data with plan data when plan details are hidden
  const getMergedPlanData = (planData: typeof Plandata) => {
    if (!isPlanDetailsHidden) return planData;
    return constants.planDetailsData.map((item: { text: string }, index: number) => {
      // If there's existing plan data for this index, keep it
      if (planData[index]) {
        return {
          ...planData[index],
          // Only add the title if it's not already present
          title: planData[index].title || item.text
        };
      }
      // If no existing plan data, create new entry with plan details text
      return {
        title: item.text,
        flag: false
      };
    });
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div id="solutions" className="bg-[#F2F5F7] px-[20px] xl:px-[0px] pt-[70px] pb-[50px] lg:py-[100px]">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo text-center lg:text-left text-orange font-normal">
          {PAYMENT_CONSTANTS.HEADING.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo font-bold text-black">
            {PAYMENT_CONSTANTS.HEADING.PAYMENT_SOLUTIONS}
          </span>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-[20px] mt-[48px] lg:mt-[100px] items-center flex-nowrap ${
              isMobile 
                ? 'justify-start overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' 
                : 'justify-center flex-wrap xl:flex-nowrap'
            }`}
            style={isMobile ? {
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '0px',
              scrollPaddingRight: '0px'
            } : undefined}
          >
            <div className="hidden 2xl:block shrink-0">
              <PlanDetails hoveredIndex={hoveredIndex} onHoverIndex={setHoveredIndex} />
            </div>
            <div className={`shrink-0 ${isMobile ? 'snap-center min-w-full flex justify-center items-center' : ''}`}>
              <PlanCard 
              id={1}

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
            </div>
            <div className={`shrink-0 ${isMobile ? 'snap-center min-w-full flex justify-center items-center' : ''}`}>
              <PlanCard 
              id={2}
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
            </div>
            <div className={`shrink-0 ${isMobile ? 'snap-center min-w-full flex justify-center items-center' : ''}`}>
              <PlanCard 
              id={3}

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
          {isMobile && (
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === index ? 'bg-[#FF4206]' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`View plan ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
