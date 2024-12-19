import { constants } from './constants';

export const PlanDetails = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[308px] p-5 border  bg-[#FFFFFF80] border-[#00000033] plandetailshadow rounded-[5px]">
      {constants.planDetailsData.map((item, index) => {
        return <div key={index} className="font-bold Inter  text-[14px] leading-[21px]">{item.text}</div>;
      })}
    </div>
  );
};
