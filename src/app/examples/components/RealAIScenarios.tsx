import React from "react";
import { useRouter } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import Image from "next/image"; // For SVG icons
import homeLight from "../../assets/home_light.svg";
import homeDark from "../../assets/home_dark.svg";
import giftLight from "../../assets/gift_light.svg";
import giftDark from "../../assets/gift_dark.svg";
import orangeArrow from "../../assets/orange_arrow.svg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

interface ExampleCardProps {
  iconLight: string;
  iconDark: string;
  title: string;
  description: string;
  slug: string;
  hasPromotion?: boolean; // To control promotion badge visibility
}

const ExampleCard: React.FC<ExampleCardProps> = ({
  iconLight,
  iconDark,
  title,
  description,
  slug,
  hasPromotion = false,
}) => {
  const router = useRouter();

  const handleTryExample = () => {
    // Force a full page reload when navigating to the example page
    window.location.href = `/examples/${slug}`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[24px] sm:rounded-[28px] md:rounded-[30px] w-full max-w-[418px] min-h-[320px] md:h-[387px] relative transition-all duration-300 hover:shadow-[0_3.87px_20.05px_-1.94px_rgba(255,66,6,0.25)] group overflow-hidden text-center sm:text-left">
      {/* Inner div for border-top and content */}
      <div className="border-t-0 group-hover:border-t-[8px] group-hover:border-[#FF4206] rounded-[24px] sm:rounded-[28px] md:rounded-[30px] p-6 sm:p-8 md:p-[45px_38px_45px_38px] transition-all duration-300">
        {/* Promotion Tag - positioned at top right with curved edge */}
        {hasPromotion && (
          <div className="absolute -top-[1px] -right-[1px]">
            <div className="bg-[#333] text-white text-[16px] font-bold px-5 py-2 rounded-bl-[20px] group-hover:bg-[#FF4206] transition-colors duration-300">
              Promotion
            </div>
          </div>
        )}

        {/* Icon */}
        <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[75px] md:h-[74px] bg-[#E8E8E8] rounded-[12px] flex items-center justify-center mb-5 sm:mb-6 mx-auto sm:mx-0 group-hover:bg-[#FF4206] transition-[colors,box-shadow] duration-300 group-hover:shadow-[0_0px_50px_rgba(255,66,6,0.75)]">
          <Image
            src={iconLight}
            alt={`${title} icon`}
            width={38}
            height={38}
            className="group-hover:hidden"
          />
          <Image
            src={iconDark}
            alt={`${title} icon hover`}
            width={38}
            height={38}
            className="hidden group-hover:block"
          />
        </div>

        {/* Title */}
        <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold text-black mb-3 sm:mb-4 py-2 leading-[1.2] ${cairo.className}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-black/80 mb-6 sm:mb-4 leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px] ${inter.className}`}>
          {description}
        </p>

        {/* Try Example Button */}
        <button
          onClick={handleTryExample}
          className={`text-[#FF4206] font-bold text-[14px] sm:text-[15px] md:text-[16px] hover:text-[#e63900] transition-all duration-200 inline-flex items-center gap-2 pt-6 sm:pt-8 ${cairo.className}`}
        >
          TRY THIS EXAMPLE
          <Image
            src={orangeArrow}
            alt="arrow"
            width={16}
            height={16}
            className="mb-0.5"
          />
        </button>
      </div>
    </div>
  );
};

export const RealAIScenarios = () => {
  const examples = [
    {
      iconLight: giftDark,
      iconDark: giftLight,
      title: "Promotional Products",
      description: "Find swag, check pricing tiers, and get help with bulk orders.",
      slug: "promotional-products",
      hasPromotion: false,
    },
    {
      iconLight: homeDark,
      iconDark: homeLight,
      title: "Cleaning Service",
      description: "Book appointments, get quotes, and ask about eco-friendly options.",
      slug: "cleaning-service",
      hasPromotion: false,
    },
  ];

  return (
    <section className="py-12 lg:py-[60px] mt-10 sm:mt-14 lg:mt-4 bg-gray-50">
      <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Examples Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 place-items-center max-w-[900px] mx-auto">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              iconLight={example.iconLight}
              iconDark={example.iconDark}
              title={example.title}
              description={example.description}
              slug={example.slug}
              hasPromotion={example.hasPromotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};