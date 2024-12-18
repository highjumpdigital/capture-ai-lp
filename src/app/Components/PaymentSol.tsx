import { PlanCard } from "@/app/Components/PlanCard";
import { PlanDetails } from "@/app/Components/PlanDetails";

export const PaymentSol = () => {
  return (
    <div id="solutions" className="bg-[#F2F5F7]  px-[20px] xl:px-[100px] py-[100px] ">
      <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px]   text-[#FF4206]">
        FLEXIBLE{" "}
        <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] font-bold text-black">
          PAYMENT SOLUTIONS
        </span>
      </div>
    
        

        <div className="flex gap-[20px]  mt-[48px] lg:mt-[100px]   justify-center md:justify-between items-center flex-wrap">
        <div>
          <PlanDetails />
        </div>
          <PlanCard />
          <PlanCard />
          <PlanCard />
      </div>
    </div>
  );
};
