// Source: src/views/account/Work2.tsx 

"use client";

import bgImage from "../assets/bg.png";
import { useEffect, useState } from "react";
import { Cairo } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "../_common/constants";
import { colors } from "../_styles/colors";
import { constants } from "../_common/constants";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HowItWorkv2Props {
  parentScrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function HowItWorkv2({ parentScrollRef }: HowItWorkv2Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back to 0 after the last card
        return prevIndex === cards.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
  //   <div
  //     className={`h-auto bg-cover bg-center bg-no-repeat ${cairo.className} py-14`}
  //   style={{
  //     backgroundImage: `url(${bgImage.src})`,
  //   }}
  //   id="work"
  // >
  <div
  className={`h-auto ${cairo.className} py-7 sm:py-[50px]`}
  style={{
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "100% 100%", // object-fill equivalent
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
  id="work"
>

      <div className="max-w-[1353px] mx-auto px-4 sm:px-0">
        <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-1 lg:p-3 flex items-center justify-center lg:justify-start">
            <h1
              className="text-black font-bold leading-tight text-center lg:text-left hidden lg:block"
              style={{
                maxWidth: "90%",
                fontFamily: "Cairo",
                fontSize: "clamp(64px, 8vw, 128px)",
                fontWeight: 700,
                lineHeight: "1.1",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              {constants.howItWorks.steps.title}
            </h1>

            <h1
              className="text-black font-bold leading-tight text-center lg:hidden text-4xl sm:text-5xl md:text-6xl mb-6"
              style={{
                maxWidth: "90%",
                fontFamily: "Cairo",
                lineHeight: "1.1",
              }}
            >
              {constants.howItWorks.title}
            </h1>
          </div>

          {/* Right Content Section with Line */}
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-start px-4 lg:px-0 lg:pr-4 relative">
            {/* Vertical Orange Line with Enhanced Gradient Blur */}
            <div className="relative w-[3px] sm:w-[4px] h-[400px] self-center overflow-visible">
              <div
                className="absolute top-0 bottom-0 left-0 right-0"
                style={{
                  background: `linear-gradient(to bottom, ${colors.orange.gradient.start}, ${colors.orange.gradient.middle} 30%, ${colors.orange.gradient.middle} 70%, ${colors.orange.gradient.start})`,
                }}
              />
            </div>

            {/* Cards Section */}
            <div className="px-4 ml-[-26px] lg:ml-[-11px] lg:pl-0 lg:pr-8 w-full">
              <AnimatePresence mode="wait">
                  <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 lg:gap-8 w-full lg:w-[650px] h-[176px]"
                >
                  <div className="rounded-full">
                      <div className="w-[19px] h-[19px] rounded-full bg-orange" />
                  </div>
                    <div className="flex items-center gap-1 lg:gap-2">
                    <span
                        className="text-orange"
                        style={{
                          fontWeight: 300,
                          fontSize: "48px",
                          lineHeight: "48px",
                        }}
                      >
                      {cards[currentIndex].number}
                    </span>
                    </div>
                  <div className="bg-gray-50/90 p-3 lg:p-4 rounded-lg shadow-md flex-1 h-full flex flex-col justify-center border-[4px] border-[#d3ddef33] relative">
                      {/* Gray triangle shape */}
                    <div
                      className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-0 h-0"
                        style={{
                          borderTop: "14px solid transparent",
                          borderBottom: "14px solid transparent",
                          borderRight: "14px solid rgb(237,237,244)",
                        }}
                      />
                      <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">
                      {cards[currentIndex].heading}
                      </h2>
                      <p className="text-sm lg:text-base text-gray-700 Inter">
                      {cards[currentIndex].text}
                      </p>
                  </div>
                    </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-orange w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}