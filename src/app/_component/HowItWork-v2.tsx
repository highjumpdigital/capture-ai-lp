// Source: src/views/account/Work2.tsx

"use client";

import bgImage from "../assets/herosectionbgImage.png";
import { useRef, useEffect, useState } from "react";
import { Cairo } from "next/font/google";
import { motion } from "framer-motion";
import { cards } from "../_common/constants";
import { colors } from "../_styles/colors";
import { constants } from "../_common/constants";
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HowItWorkv2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardOpacities, setCardOpacities] = useState<
    { opacity: number; blur: number }[]
  >(new Array(cards.length).fill({ opacity: 1, blur: 0 }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
  const [gap, setGap] = useState(60); // Default gap
  const [isInViewportCenter, setIsInViewportCenter] = useState(false);
  const [firstScroll, setFirstScroll] = useState(true);

  const SCROLL_ANIMATION_DURATION = firstScroll ? 370 : 370; // 300ms for the first scroll, 350ms for subsequent

  useEffect(() => {});

  // Update gap based on screen size
  useEffect(() => {
    const updateGap = () => {
      if (window.innerWidth >= 1024) {
        // 'lg' breakpoint
        setGap(120);
      } else {
        setGap(60);
      }
    };

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, [currentIndex]);

  // Add function to check if element is in center of viewport
  const isElementInCenter = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
  
    const sectionVerticalCenter = rect.top + sectionHeight / 2;
    const viewportVerticalCenter = windowHeight / 2;
  
    // Allow a margin of error (threshold) for "centered" detection
    const threshold = 100;
  console.log(sectionVerticalCenter,"sectionVerticalCenter",viewportVerticalCenter,"viewportVerticalCenter")
    // Disable auto-scroll if the center exceeds 550
    if (sectionVerticalCenter < 520) {
      return false;
    }
  
    return Math.abs(sectionVerticalCenter - viewportVerticalCenter) <= threshold;
  };

  // Add scroll listener to check section position
  useEffect(() => {
    const checkPosition = () => {
      if (sectionRef.current) {
        setIsInViewportCenter(isElementInCenter(sectionRef.current));
      }
    };

    window.addEventListener("scroll", checkPosition);
    checkPosition(); // Initial check

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);
  useEffect(() => {
    if (!autoScrollEnabled || !isInViewportCenter) return;

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < cards.length - 1) {
        scrollToCard("down");
      } else {
        setAutoScrollEnabled(false); // Stop auto-scroll at the last card
      }
    }, SCROLL_ANIMATION_DURATION); // Adjust duration for smoother scrolling

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled, isInViewportCenter, isScrolling]);
  useEffect(() => {
    const section = sectionRef.current;
  
    if (!section) return;
  
    const preventScroll = (e: WheelEvent) => {
      // If the section is not in the center, allow normal page scrolling
      if (!isInViewportCenter) {
        return; // Allow normal scroll
      }
      if (currentIndex === cards.length - 1 && e.deltaY > 0) {
        return; // Allow normal scroll
      }
      if (!isScrolling) {
        if (e.deltaY > 0) {
          // Scrolling down
          if (currentIndex === cards.length) return;
          e.preventDefault();
          e.stopPropagation();
          handleManualScroll("down");
        } else {
          // Scrolling up
          if (currentIndex === 0) return;
          e.preventDefault();
          e.stopPropagation();
          handleManualScroll("up");
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  
    section.addEventListener("wheel", preventScroll, { passive: false });
    return () => section.removeEventListener("wheel", preventScroll);
  }, [isScrolling, currentIndex, isInViewportCenter]);
  
  

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerHeight = container.clientHeight;
      const cardElements = container.getElementsByClassName("card-container");

      const newOpacities = Array.from(cardElements).map((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const containerRect = container.getBoundingClientRect();
        const distanceFromCenter = Math.abs(
          cardCenter - (containerRect.top + containerHeight / 2)
        );
        const maxDistance = containerHeight * 0.6;
        const opacity = Math.max(0.5, 1 - distanceFromCenter / maxDistance);
        return {
          opacity,
          blur: (1 - opacity) * 1,
        };
      });

      setCardOpacities(newOpacities);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled || !isInViewportCenter) return; // Only auto-scroll when in center

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < 4) {
        scrollToCard("down");
      } else {
        setAutoScrollEnabled(false); // Stop auto-scroll at the last card
      }
    }, SCROLL_ANIMATION_DURATION); // Add a 1-second pause

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled, isInViewportCenter, isScrolling]);

  const handleManualScroll = (direction: "up" | "down") => {
    if (!isInViewportCenter) return; // Prevent manual scroll when not centered
    setAutoScrollEnabled(false);
    scrollToCard(direction);
  };
  const scrollToCard = (direction: "up" | "down") => {
    if (isScrolling || !containerRef.current) return;
  
    setIsScrolling(true);

    const newIndex =
      direction === "down"
        ? Math.min(currentIndex + 1, cards.length - 1) // Include the last card
        : Math.max(currentIndex - 1, 0);

    if (newIndex !== currentIndex) {
      const CARD_HEIGHT = 176; // Height of each card in pixels
      const totalScroll = newIndex * (CARD_HEIGHT + gap);

      containerRef.current.scrollTo({
        top: totalScroll,
        behavior: "smooth",
      });

      setCurrentIndex(newIndex);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, SCROLL_ANIMATION_DURATION);
  };

  const [height, setHeight] = useState(400); // Default height

  useEffect(() => {
    const targetHeight =
      currentIndex === 3 && !isScrolling && gap === 120 ? 490 : 400;

    let currentHeight = height;

    const adjustHeight = () => {
      if (currentHeight !== targetHeight) {
        // Increment or decrement the height smoothly
        currentHeight += currentHeight < targetHeight ? 1 : -1;
        setHeight(currentHeight);
        requestAnimationFrame(adjustHeight);
      }
    };

    adjustHeight();
  }, [currentIndex, isScrolling, gap]);
  console.log("currentOdex", currentIndex, "scroll", isScrolling, "gap", gap);

  return (
    <div
      ref={sectionRef}
      className={`h-[700px] bg-cover bg-center bg-no-repeat ${cairo.className}`}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
      id="work"
      onMouseEnter={() => setAutoScrollEnabled(false)}
    >
      <div className="max-w-[1353px] mx-auto px-4 sm:px-0 ">
        <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:gap-6 ">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-1 lg:p-3 flex items-center justify-center lg:justify-start mt-[100px] sm:mt-[100px]">
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
              className="text-black font-bold leading-tight text-center lg:hidden text-4xl sm:text-5xl md:text-6xl mb-8"
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
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-start px-4 lg:px-0 lg:pr-4 mt-[100px] sm:mt-[100px]">
            {/* Vertical Orange Line with Enhanced Gradient Blur */}
            <div className="relative w-[3px] sm:w-[4px] h-[400px] self-center overflow-visible">
              {/* Main line with top and bottom blur */}
              <div
                className="absolute top-0 bottom-0 left-0  right-0 "
                style={{
                  background: `linear-gradient(to bottom, ${colors.orange.gradient.start}, ${colors.orange.gradient.middle} 30%, ${colors.orange.gradient.middle} 70%, ${colors.orange.gradient.start})`,
                }}
              />
            </div>

            {/* Cards Section */}
            <div
              ref={containerRef}
              style={{
                height: `${height}px`,
                transition: "height 0ms linear",
                overflow: "hidden",
              }}
              className="pb-4 mt-[-35px] lg:pb-8 px-4 ml-[-26px] lg:ml-[-11px] lg:pl-0 lg:pr-8 overflow-x-hidden overflow-y-auto scroll-smooth"
            >
              <div className="flex flex-col gap-[60px] lg:gap-[120px]">
                {/* Top spacer for scrolling */}
                <div className="h-[10px]"></div>

                {cards.map((card, index) => (
                  <motion.div
                    key={card.number}
                    className="card-container flex items-center gap-4 lg:gap-8 w-full lg:w-[650px] h-[176px]"
                    style={{
                      opacity: cardOpacities[index]?.opacity ?? 1,
                    }}
                    animate={{
                      filter: `blur(${cardOpacities[index]?.blur ?? 0}px)`,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      className="rounded-full"
                      style={{ opacity: cardOpacities[index]?.opacity ?? 1 }}
                    >
                      <div className="w-[19px] h-[19px] rounded-full bg-orange" />
                    </motion.div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <motion.span
                        className="text-orange"
                        style={{
                          fontWeight: 300,
                          fontSize: "48px",
                          lineHeight: "48px",
                        }}
                      >
                        {card.number}
                      </motion.span>
                      <motion.span
                        className="text-xl lg:text-3xl font-bold text-orange"
                        style={{ opacity: cardOpacities[index]?.opacity ?? 1 }}
                      >
                        {/* Optional Title or Additional Content */}
                      </motion.span>
                    </div>
                    <motion.div
                      className="bg-gray-50/90 p-3 lg:p-4 rounded-lg shadow-md flex-1 h-full flex flex-col justify-center border-[4px] border-[#d3ddef33] relative"
                      style={{ opacity: cardOpacities[index]?.opacity ?? 1 }}
                    >
                      {/* Gray triangle shape */}
                      <motion.div
                        className={`absolute left-[-21px]  -translate-y-1/2 w-0 h-0  ${
                          currentIndex === 3 ? "top-[50%]" : "top-1/2"
                        }  `}
                        style={{
                          borderTop: "14px solid transparent",
                          borderBottom: "14px solid transparent",
                          borderRight: "14px solid rgb(237,237,244)",
                        }}
                      />
                      <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">
                        {card.heading}
                      </h2>
                      <p className="text-sm lg:text-base text-gray-700 Inter">
                        {card.text}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Bottom spacer for scrolling */}
                <div className="h-[0px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
