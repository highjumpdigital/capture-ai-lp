import { constants } from './constants';

export const PlanDetails = () => {
  const data = [
    {
      text: constants.planDetails.personalAgent,
    },
    {
      text: constants.planDetails.dashboard,
    },
    {
      text: constants.planDetails.captureData,
    },
    {
      text: constants.planDetails.quoteSupport,
    },
    {
      text: constants.planDetails.services,
    },
    {
      text: constants.planDetails.companyMaterial,
    },
    {
      text: constants.planDetails.showcaseImages,
    },
    {
      text: constants.planDetails.showcaseProducts,
    },
    {
      text: constants.planDetails.proactiveSuggestion,
    },
    {
      text: constants.planDetails.realTimeAlerts,
    },
    {
      text: constants.planDetails.thirdParty,
    },
    {
      text: constants.planDetails.technicalSupport,
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-[308px] p-5 border  bg-[#FFFFFF80] border-[#00000033] plandetailshadow rounded-[5px]">
      {data.map((item, index) => {
        return <div key={index} className="font-bold Inter  text-[14px] leading-[21px]">{item.text}</div>;
      })}
    </div>
  );
};
