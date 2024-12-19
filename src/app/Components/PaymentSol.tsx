import { PlanCard } from "@/app/Components/PlanCard";
import { PlanDetails } from "@/app/Components/PlanDetails";
import FreePalnImage from "../assets/si_user-fill.png"
import StarterPalnImage from "../assets/material-symbols_rocket.png"
import AdvacedPalnImage from "../assets/basil_diamond-solid.png"

import { constants, Plandata,STARTERPlandata ,InfinityProPlandata} from "./constants";

export const PaymentSol = () => {
  return (
    <div id="solutions" className="bg-[#F2F5F7]  px-[20px] xl:px-[100px]  py-[50px] lg:py-[100px] ">
      <div className="max-w-[1311px] mx-auto">
        <div className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairo  text-[#FF4206]">
          {constants.paymentSol.FLEXIBLE}
          <span className="text-[24px] lg:text-[48px] leading-6 lg:leading-[48px] Cairofont-bold text-black">
            {constants.paymentSol.paymentsol}
          </span>
        </div>

        <div className="flex gap-[20px]  mt-[48px] lg:mt-[100px]   justify-center md:justify-between items-center flex-wrap">
          <div>
            <PlanDetails />
          </div>
          <PlanCard planData={Plandata}  title="FREE"  image={FreePalnImage}   price="FREE"  className="border-[#00000033] bg-[#F3F6F8]"  headerText="text-black" textClass="text-[#000000CC]"
   />
          <PlanCard planData={STARTERPlandata}  title="STARTER KIT"  image={StarterPalnImage} price="$49/MO." className="border-[#00000033] bg-[#F3F6F8]" textClass="text-[#000000CC]" headerText="text-black" />
          <PlanCard planData={InfinityProPlandata}  title="INFINITY PRO"  image={AdvacedPalnImage} price="$99/MO."  className="border-[#FF4206] bg-black paySolShadow" textClass="text-[#FFFFFFCC]" headerText="text-white"
   />
        </div>
      </div>
    </div>
  );
};
