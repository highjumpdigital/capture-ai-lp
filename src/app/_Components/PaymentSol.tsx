import { PlanCard } from "./PlanCard";
import { PlanDetails } from "./PlanDetails";

export const PaymentSol = () => {
  return (
    <div className="bg-[#F2F5F7] px-[100px] py-[100px] ">
      <div className="text-[48px] leading-[48px]   text-[#FF4206]">
        FLEXIBLE{" "}
        <span className="text-[48px] leading-[48px] font-bold text-black">
          PAYMENT SOLUTIONS
        </span>
      </div>
    
        

        <div className="flex gap-[50px] mt-[100px] justify-between items-center">
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
