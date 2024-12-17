import { MdArrowForward } from "react-icons/md";

export const ChatPerformance = () => {
  const data = [
    {
      title: "3rd party tool integration",
    },
    {
      title: "Provide company documents",
    },
    {
      title: "Showcase work",
    },
    {
      title: "Lead capture functionality",
    },
    {
      title: "User intent configuration",
    },
    {
      title: "Suggestion capabilities",
    },
  ];

  return (
    <div className="px-[100px] flex justify-between items-center w-full bg-white ">
      <div className="max-w-[641px] w-full">
        {data.map((item, index) => {
          return (
            <div className="max-w-[641px]  mt-[10px] flex justify-between items-center w-full cursor-pointer rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] min-h-[54px]">
              <div
                className="font-bold text-[16px] leading-[16px]   text-[#000000CC] 
  "
              >
                {item.title}
              </div>
              <div>
                <MdArrowForward fill="#FF4206" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-[641px] rounded-[5px] p-[10px] border-[3px] border-[#383E4E33] "></div>
    </div>
  );
};
