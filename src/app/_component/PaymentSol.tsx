import { PlanCard } from "@/app/_component/PlanCard";
import { PlanDetails } from "@/app/_component/PlanDetails";
import { useState, useEffect, useRef } from "react";
import { PAYMENT_CONSTANTS } from "../_common/constants";
import { getPlans } from "../_services/api";
import type { Plan } from "../_services/api";

export const PaymentSol = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlanDetailsHidden, setIsPlanDetailsHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [plansData, setPlansData] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await getPlans();
        if (response.success) {
          setPlansData(response.content);
        } else {
          setError("Failed to fetch plans");
        }
      } catch (error) {
        setError("Error fetching plans");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

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

  const getMergedPlanData = (plan: Plan) => {
    if (!isPlanDetailsHidden) {
      // When plan details are visible, keep all fields but hide false ones
      return plan.features.map(feature => ({
        title: feature.is_enabled ? (feature.feature_description || feature.feature_name) : "",
          flag: feature.is_enabled
        }));
    }
    // When plan details are hidden, show all features in cards
    return plan.features.map(feature => ({
      title: feature.feature_description || feature.feature_name,
      flag: feature.is_enabled
    }));
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4206]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[500px] text-red-500">
        {error}
      </div>
    );
  }

  const planStyles = {
    Basic: {
      border: PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.BORDER,
      background: PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.BACKGROUND,
      header: PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.HEADER,
      text: PAYMENT_CONSTANTS.PLANS.BASIC.STYLES.TEXT,
      image: PAYMENT_CONSTANTS.PLANS.BASIC.IMAGE
    },
    "Starter Kit": {
      border: PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.BORDER,
      background: PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.BACKGROUND,
      header: PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.HEADER,
      text: PAYMENT_CONSTANTS.PLANS.STARTER.STYLES.TEXT,
      image: PAYMENT_CONSTANTS.PLANS.STARTER.IMAGE
    },
    "Infinity Pro": {
      border: PAYMENT_CONSTANTS.PLANS.PRO.STYLES.BORDER,
      background: PAYMENT_CONSTANTS.PLANS.PRO.STYLES.BACKGROUND,
      header: PAYMENT_CONSTANTS.PLANS.PRO.STYLES.HEADER,
      text: PAYMENT_CONSTANTS.PLANS.PRO.STYLES.TEXT,
      image: PAYMENT_CONSTANTS.PLANS.PRO.IMAGE
    }
  };

  return (
    <div id="solutions" className="bg-[#F2F5F7] px-[20px] xl:px-[0px] pt-[70px] pb-[50px] lg:py-[100px]">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo text-center 2xl:text-left text-orange font-normal">
          {PAYMENT_CONSTANTS.HEADING.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo font-bold text-black">
            {PAYMENT_CONSTANTS.HEADING.PAYMENT_SOLUTIONS}
          </span>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-[24px] mt-[48px] lg:mt-[100px]   justify-between items-center flex-nowrap ${
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
              <PlanDetails 
                hoveredIndex={hoveredIndex} 
                onHoverIndex={setHoveredIndex}
                features={plansData[0]?.features.map(f => ({ text: f.feature_name })) || []}
              />
            </div>
            {plansData.map((plan, index) => (
              <div key={index} className={`shrink-0 ${isMobile ? 'snap-center min-w-full flex justify-center items-center' : ''}`}>
                <PlanCard 
                  id={index + 1}
                  title={plan.plan_name}
                  price={`$${plan.plan_price}`}
                  planDescription={plan.plan_description}
                  image={planStyles[plan.plan_name as keyof typeof planStyles].image}
                  planData={getMergedPlanData(plan)}
                  className={`${planStyles[plan.plan_name as keyof typeof planStyles].border} ${planStyles[plan.plan_name as keyof typeof planStyles].background}`}
                  headerText={planStyles[plan.plan_name as keyof typeof planStyles].header}
                  textClass={planStyles[plan.plan_name as keyof typeof planStyles].text}
                  hoveredIndex={hoveredIndex}
                  onHoverIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>
          {isMobile && (
            <div className="flex justify-center gap-2 mt-4">
              {plansData.map((_, index) => (
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
