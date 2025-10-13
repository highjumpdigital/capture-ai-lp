import React from "react";
import { FilledButton } from "../../_component/FilledButton";
import { Inter, Cairo } from "next/font/google";
import DemoPageBg from "../../assets/demo_page_bg.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

export const HeroSection = () => {
  return (
    <section 
      className="py-10 sm:py-12 md:py-16 lg:py-[155px] -mb-24 sm:-mb-32 md:-mb-36 lg:-mb-40 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${DemoPageBg.src})`,
      }}
    >
      {/* Background overlay for reduced opacity */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-95"></div>
      <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center items-center gap-5 sm:gap-7 md:gap-8 text-center mt-4 md:mt-0">
          {/* Tagline Box */}
          <div
            className={`font-bold text-[16px] leading-[100%] tracking-[-0.03em] uppercase px-4 sm:px-4 py-1.5 sm:py-2 text-[#FF4206] border border-[#FF4206] rounded-full bg-[#FF4206]/5 flex justify-center items-center whitespace-nowrap ${cairo.className}`}
          >
            TRY INDUSTRY-TAILORED DEMOS
          </div>

          {/* Headings */}
          <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
            <h1 className={`text-[28px] sm:text-[40px] md:text-[56px] lg:text-[80px] xl:text-[100px] font-bold md:mt-1.5 tracking-[1.3px] leading-[110%] max-w-[1000px] ${cairo.className}`}>
              <span className="text-[#FF4206] font-semibold">EXPLORE</span> CHATBOT EXAMPLES
            </h1>
          </div>

          {/* Description */}
          <p
            className={`text-[24px] font-light leading-[150%] text-center mx-auto text-black max-w-[900px] mt-1.5 ${inter.className}`}
          >
            Choose an industry below to see how your assistant could answer questions, quality leads, and automate workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
