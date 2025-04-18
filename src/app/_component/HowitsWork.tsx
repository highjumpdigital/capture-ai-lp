// Source: src/views/account/Work2.tsx

"use client";

import bgImage from "../assets/herosectionbgImage.png";
import { useRef, useEffect, useState, useCallback } from "react";
import { Cairo } from "next/font/google";
import { motion } from "framer-motion";
import { cards } from "../_common/constants";
import { colors } from "../_styles/colors";
import { constants } from "../_common/constants";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SCROLL_ANIMATION_DURATION = 500;

interface HowitsWorkProps {
  parentScrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function HowitsWork({ parentScrollRef }: HowitsWorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardOpacities, setCardOpacities] = useState<
    { opacity: number; blur: number }[]
  >(new Array(cards.length).fill({ opacity: 1, blur: 0 }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
  const [gap, setGap] = useState(120); // Default gap

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0); // To store the previous scrollTop value

  console.log(isScrollingUp, "isScrollingUpisScrollingUp");
  // Monitor scrolling direction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      if (scrollTop < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      setLastScrollTop(scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  const scrollToCard = useCallback(
    (direction: "up" | "down") => {
      if (isScrolling || !containerRef.current) return;
  
      const container = containerRef.current;
      const CARD_HEIGHT = 176;
      const newIndex =
        direction === "down"
          ? Math.min(currentIndex + 1, cards.length - 1)
          : Math.max(currentIndex - 1, 0);
  
      if (newIndex !== currentIndex) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        const targetScroll = Math.max(
          0,
          Math.min(newIndex * (CARD_HEIGHT + gap), maxScroll)
        );
  
        container.scrollTo({ top: targetScroll, behavior: "smooth" });
  
        // Reset scrolling after transition ends
        container.addEventListener(
          "scroll",
          () => setIsScrolling(false),
          { once: true }
        );
  
        setCurrentIndex(newIndex);
        setIsScrolling(true);
      }
    },
    [currentIndex, gap, isScrolling]
  );
  

  const handleManualScroll = useCallback(
    (direction: "up" | "down") => {
      setAutoScrollEnabled(false);
      scrollToCard(direction);
    },
    [scrollToCard]
  );

  // Update gap based on screen size and current index
  useEffect(() => {
    const updateGap = () => {
      if (currentIndex === 2) {
        // setGap(70); // Specific case for currentIndex === 3 and scrolling up
      }
    };

    const handleResize = () => updateGap();

    updateGap();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);
  // Update gap based on screen size and current index
  useEffect(() => {
    const updateGap = (direction?: "up" | "down") => {
      if (currentIndex === 2 && isScrollingUp === false) {
        setGap(70);
      } else if (currentIndex === 3 && isScrollingUp === false) {
        setGap(71);
      } else if (window.innerWidth >= 1024 && direction === "up") {
        setGap(120);
      }
    };

    const handleResize = () => updateGap();

    updateGap();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, isScrollingUp, gap]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const preventScroll = (e: WheelEvent) => {
      if (!isScrolling) {
        if (e.deltaY > 0) {
          // Scrolling down
          if (currentIndex === cards.length - 1) {
            // At last card, allow page scroll
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          handleManualScroll("down");
        } else {
          // Scrolling up
          if (currentIndex === 0) {
            // At first card, allow page scroll
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          handleManualScroll("up");
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    console.log("gapgapgap", gap);
    section.addEventListener("wheel", preventScroll, { passive: false });
    return () => section.removeEventListener("wheel", preventScroll);
  }, [isScrolling, currentIndex, gap, handleManualScroll]);

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

  console.log(
    isScrollingUp,
    "isScrollingUpisScrollingUp",
    currentIndex,
    "gap",
    gap
  );

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < cards.length - 1) {
        scrollToCard("down");
      } else {
        setAutoScrollEnabled(false);
      }
    }, SCROLL_ANIMATION_DURATION + 1300);

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled, scrollToCard]);

  const useIsMobileView = () => {
    // Check if running in a browser environment
    const isMobile =
      typeof navigator !== "undefined" &&
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    return isMobile;
  };

  const isMobile = useIsMobileView();

  useEffect(() => {
    // Set autoScrollEnabled based on whether it's mobile or not
    setAutoScrollEnabled(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const parent = parentScrollRef.current;

    if (!container || !section || !parent) return;
    const handleNestedScroll = () => {
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
      const isAtTop = container.scrollTop === 0;
    
      if (isAtBottom || isAtTop) {
        document.body.style.overflow = "auto"; // Let parent scroll
      } else {
        document.body.style.overflow = "hidden"; // Keep scroll within the container
      }
    };
    

    container.addEventListener('scroll', handleNestedScroll);
    return () => {
      container.removeEventListener('scroll', handleNestedScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isScrollingUp, parentScrollRef]);

  return (
    <div
      ref={sectionRef}
      className={` h-auto sm:h-[700px] bg-cover bg-center bg-no-repeat ${cairo.className}`}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
      id="work"
      onMouseEnter={() => setAutoScrollEnabled(false)}
    >
      <div className="max-w-[1540px] mx-auto px-4 sm:px-5 lg:px-[100px]">
        <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-1 lg:p-3 flex items-center justify-center lg:justify-start mt-[100px] sm:mt-[100px]">
            <h1
              className="text-black font-bold leading-tight text-center lg:text-left hidden md:block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                maxWidth: "90%",
              }}
            >
              {constants.howItWorks.steps.title}
            </h1>

            <h1
              className="text-black font-bold leading-tight text-center mb-[70] lg:text-left block md:hidden text-3xl sm:text-4xl"
              style={{
                maxWidth: "90%",
              }}
            >
              {constants.howItWorks.title}
            </h1>
          </div>

          {/* Right Content Section with Line */}
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-start px-4 lg:px-5 mt-[100px] sm:mt-[100px]">
            {/* Vertical Orange Line with Top and Bottom Blur */}
            <div className="relative w-[8px] sm:w-[4px] h-[400px] self-center overflow-visible">
              {/* Main line with top and bottom blur */}
              <div
                className="absolute top-0 bottom-0 left-0 right-0"
                style={{
                  background: `linear-gradient(to bottom, ${colors.orange.gradient.start}, ${colors.orange.gradient.middle} 30%, ${colors.orange.gradient.middle} 70%, ${colors.orange.gradient.start})`,
                }}
              />
            </div>

            {/* Cards Section */}
            <div
              ref={containerRef}
              className={`pb-4 mt-[-35px] lg:pb-8 px-4 ml-[-26px] lg:ml-[-11px] lg:pl-0 lg:pr-8    ${
                currentIndex === 3 && isScrolling === false && gap === 120
                  ? "max-h-[490px]"
                  : "max-h-[400px]"
              }  overflow-y-auto scroll-smooth`}
              style={{
                scrollBehavior: "smooth",
                transition: `all ${SCROLL_ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
                div::-webkit-scrollbar-track {
                  background: rgba(0, 0, 0, 0.1);
                  border-radius: 4px;
                }
              `}</style>
              <div
                className="flex flex-col gap-[60px] lg:gap-[120px]"
                style={{ gap: `${gap}px` }}
              >
                <div className="h-[10px] sm:h-[5px]"></div>

                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className={`card-container flex items-center gap-4 lg:gap-8 w-full lg:w-[640px] h-[176px] ${
                      isScrolling === false &&
                      gap === 70 &&
                      currentIndex === 0 &&
                      "mt-[80px] sm:mt-[50px]"
                    }  ${
                      isScrolling === false &&
                      gap === 70 &&
                      currentIndex === 1 &&
                      "mt-[60px] sm:mt-[30px]"
                    }  ${
                      isScrolling === false &&
                      gap === 70 &&
                      currentIndex === 2 &&
                      "mt-[40px] sm:mt-[20px]"
                    }  `}
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
                      <div className="w-[20px] h-[20px] rounded-full bg-orange ml-[-1.1px]" />
                    </motion.div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <motion.span className="text-orange text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
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
                      className="bg-card-bg p-3 lg:p-4 rounded-lg shadow-md flex-1 h-full flex flex-col justify-center border-[4px] border-card-border relative"
                      style={{ opacity: cardOpacities[index]?.opacity ?? 1 }}
                    >
                      {/* Gray triangle shape */}
                      <motion.div
                        className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-0 h-0"
                        style={{
                          borderTop: "14px solid transparent",
                          borderBottom: "14px solid transparent",
                          borderRight: "14px solid #ededed",
                        }}
                      />
                      <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">
                        {card.heading}
                      </h2>
                      <p className="text-gray-700 font-[Inter] text-xs sm:text-sm lg:text-base xl:text-lg font-[500] leading-[1.4] sm:leading-[1.5] lg:leading-[1.6] text-left">
                        {card.text}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Bottom spacer for scrolling */}
                <div className="h-[-5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
