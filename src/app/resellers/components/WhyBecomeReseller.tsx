import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { Inter } from "next/font/google";
import whyBecomeReseller from "../../assets/whyBecomeResseler.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const WhyBecomeReseller = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const accordionItems = [
    {
      number: "01",
      title: "GENEROUS RECURRING COMMISSIONS",
      content: [
        "Earn an attractive **40% commission** every month for each of your clients actively using our chatbot.",
        "Commissions are reliably paid at the beginning of every month, offering a predictable, stable revenue stream.",
      ],
    },
    {
      number: "02",
      title: "BONUS INCENTIVE FOR NEW CLIENTS",
      content: [
        "Receive an additional **one-time bonus of $100** for each new client signing up for the **Infinity Pro** plan, or a **$50 bonus** for each new client on the **Starter Kit**, triggered when the client pays their 2nd monthly invoice.",
      ],
    },
    {
      number: "03",
      title: "SIMPLIFIED CLIENT MANAGEMENT",
      content: [
        "Easily manage all your clients through a **single intuitive dashboard**.",
        "Access performance insights and monitor results effortlessly, allowing you to provide superior client support and guidance.",
      ],
    },
    {
      number: "04",
      title: "ENHANCE YOUR CLIENT'S CAMPAIGN RESULTS",
      content: [
        "Provide clients with an innovative tool proven to significantly boost lead generation, engagement, and conversions.",
        "Increase client satisfaction by demonstrating clear, measurable results from chatbot interactions.",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    if (expandedIndex === index) {
      // Clicking the same one — just close it
      setExpandedIndex(-1);
    } else {
      if (expandedIndex !== -1) {
        // Close current first
        setExpandedIndex(-1);
        // Wait for close animation (500ms matches your content transition)
        setTimeout(() => {
          setExpandedIndex(index);
        }, 500);
      } else {
        // If nothing is open, open directly
        setExpandedIndex(index);
      }
    }
  };

  return (
    <section
      className="pt-10 sm:pt-14 lg:pt-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${whyBecomeReseller.src})` }}
    >
      <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-[28px] sm:text-[48px] lg:text-[64px] font-normal leading-[100%] Cairo">
            WHY BECOME A
          </p>
          <p className="text-[28px] sm:text-[48px] lg:text-[64px] font-bold leading-[100%] text-[#FF4206] Cairo">
            CAPTURE AI RESELLER?
          </p>
        </div>

        {/* Accordion */}
        <div
          className={`max-w-[1250px] mx-auto ${
            expandedIndex === -1 ? "min-h-[653px]" : "sm:min-h-[653px]"
          }`}
        >
          {accordionItems.map((item, index) => (
            <div key={index} className="mb-0 border-t border-[#B3B3B3]">
              <div
                className="transition-all duration-300 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="py-2 sm:py-3 flex flex-row sm:flex-row items-start sm:items-center justify-between sm:gap-4 gap-2">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`text-[#FF4206CC] font-bold text-[24px] sm:text-[48px] lg:text-[64px] italic tracking-[3.2%] ${inter.className}`}
                    >
                      {item.number}
                    </span>
                    <h3 className="text-[16px] sm:text-[28px] max-w-[200px] sm:max-w-none lg:text-[48px] font-normal text-black Cairo leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`w-[36px] h-[36px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      expandedIndex === index ? "bg-[#FF4206]" : "bg-black"
                    }`}
                  >
                    <FaArrowDown
                      className={`text-white text-[20px] font-normal transition-transform duration-300 ${
                        expandedIndex === index
                          ? "rotate-0"
                          : "rotate-[-35deg]"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-[#B3B3B3]">
                    <ul className="list-disc pl-6 space-y-3 sm:space-y-4 pt-4">
                      {item.content.map((text, textIndex) => (
                        <li
                          key={textIndex}
                          className={`text-[#000000] ${inter.className} font-light text-[14px] sm:text-[18px] lg:text-[24px] leading-[30px] tracking-[0.48px]`}
                          dangerouslySetInnerHTML={{
                            __html: text.replace(
                              /\*\*(.*?)\*\*/g,
                              '<span class="font-bold">$1</span>'
                            ),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-b border-[#B3B3B3]" />
        </div>
      </div>
    </section>
  );
};
