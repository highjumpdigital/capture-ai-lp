export const PlanDetails = () => {
  const data = [
    {
      text: "PERSONAL WEBSITE AGENT",
    },
    {
      text: "DASHBOARD",
    },
    {
      text: "CAPTURE DATA",
    },
    {
      text: "QUOTE & SUPPORT INTENTS",
    },
    {
      text: "SERVICES",
    },
    {
      text: "COMPANY MATERIAL INTEGRATION",
    },
    {
      text: "SHOWCASE IMAGES",
    },
    {
      text: "SHOWCASE PRODUCT RANGES",
    },
    {
      text: "PROACTIVE SUGGESTION",
    },
    {
      text: "REAL-TIME LEADS ALERTS",
    },
    {
      text: "3RD PARTY INTEGRATIONS",
    },
    {
      text: "TECHNICAL SUPPORT",
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-[308px] p-5 border  bg-[#FFFFFF80] border-[#00000033] plandetailshadow rounded-[5px]">
      {data.map((item, index) => {
        return <div key={index} className="font-bold">{item.text}</div>;
      })}
    </div>
  );
};
