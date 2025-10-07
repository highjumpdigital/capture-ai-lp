import React, { useState, useCallback } from "react";
import { FilledButton } from "../../_component/FilledButton";
import { Inter, Cairo } from "next/font/google";
import Image from "next/image";
import example_page_ai_image from "../../assets/examples_page_ai_image.jpg";
import { CalendlyModal } from "../../_component/CalendlyModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

export const ReadyToBuildCTA = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookDemo = useCallback((e?: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsCalendlyOpen(true);
  }, []);

  const handleCloseCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  return (
    <section className="py-12 lg:py-[80px]">
      <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="button"
          aria-label="Book a demo"
          tabIndex={0}
          onClick={handleBookDemo}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleBookDemo();
            }
          }}
          className="rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center relative overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.35)] h-[200px] lg:h-[250px] flex items-center justify-center cursor-pointer"
        >
          {/* Background image */}
          <Image
            src={example_page_ai_image}
            alt="AI assistant background"
            fill
            priority
            className="object-cover object-center -scale-100 scale-x-110"
          />
          {/* Darkening gradient for legibility */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,#000_40%,#581500_75%,#992704_100%)] mix-blend-multiply" />
          {/* Brand accent gradient overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(120%_80%_at_90%_50%,rgba(255,66,6,0.55)_0%,rgba(255,66,6,0.25)_30%,transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 lg:gap-6">
            {/* Title */}
            <h2 className={`text-[24px] sm:text-[32px] lg:text-[48px] font-bold text-white leading-[100%] ${cairo.className}`}>
              Ready to Build your own ai assistant?
            </h2>

            {/* Subtitle */}
            <p className={`text-[14px] sm:text-[16px] lg:text-[24px] text-white leading-[20px] sm:leading-[24px] lg:leading-[28px] max-w-[700px] ${inter.className}`}>
              Start creating intelligent chatbots tailored to your industry.
            </p>

            {/* Button */}
            <FilledButton
              buttonTitle="BOOK A DEMO"
              className="h-10 lg:h-12 w-[160px] lg:w-[200px] px-6 lg:px-8 bg-[#FF4206] rounded-lg font-bold text-[14px] lg:text-[16px] text-white hover:bg-[#e63900] transition-colors duration-300"
              onClick={handleBookDemo}
            />
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />
    </section>
  );
};