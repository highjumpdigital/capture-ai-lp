// Source: src/views/account/Work2.tsx

"use client";

import bgImage from "../assets/herosectionbgImage.png";
import { useRef, useEffect, useState, useCallback } from "react";
import { Cairo } from "next/font/google";
import { motion } from "framer-motion";
import { cards } from "../_common/constants";
import { colors } from "../_styles/colors";
import { constants } from "../_common/constants";
import { throttle } from "lodash";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ANIMATION_DURATION = 800; // Global animation duration
const THROTTLE_TIME = 400; // 150ms is a good balance between performance and responsiveness

interface HowItWorkv2Props {
  parentScrollRef: React.RefObject<HTMLDivElement | null>;
}

//how its work

export default function HowItWorkv2({ parentScrollRef }: HowItWorkv2Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardOpacities, setCardOpacities] = useState<
    { opacity: number; blur: number }[]
  >(new Array(cards.length).fill({ opacity: 1, blur: 0 }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
  const [gap, setGap] = useState(60); 
  const [isInViewportCenter, setIsInViewportCenter] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  const scrollToCard = useCallback((direction: "up" | "down") => {
    if (isScrolling || !containerRef.current) return;
  
    setIsScrolling(true);

    const newIndex =
      direction === "down"
        ? Math.min(currentIndex + 1, cards.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (newIndex !== currentIndex) {
      const CARD_HEIGHT = 176;
      const totalScroll = newIndex * (CARD_HEIGHT + gap);

      containerRef.current.scrollTo({
        top: totalScroll,
        behavior: "smooth"
      });

      setCurrentIndex(newIndex);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, ANIMATION_DURATION);
  }, [currentIndex, gap, isScrolling]);

  const handleManualScroll = useCallback((direction: "up" | "down") => {
    if (!isInViewportCenter) return; // Prevent manual scroll when not centered
    setAutoScrollEnabled(false);
    scrollToCard(direction);
  }, [isInViewportCenter, scrollToCard]);

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

  // Improved center detection for continuous scrolling
  const isElementInCenter = useCallback((element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
  
    const sectionVerticalCenter = rect.top + sectionHeight / 2;
    const viewportVerticalCenter = windowHeight / 2;
  debugger
    // Larger threshold for continuous scrolling
    const threshold = 100;
  
    // Adjust detection area based on scroll direction
    const offset = scrollDirection === 'down' ? -50 : 50;
    const adjustedCenter = viewportVerticalCenter + offset;
  
    return Math.abs(sectionVerticalCenter - adjustedCenter) <= threshold;
  }, [scrollDirection]);

  // Scroll position checking with throttle
  const checkScrollPosition = useCallback(
    throttle(() => {
      const currentScrollTop = window.scrollY;
      const newDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
      
      setLastScrollTop(currentScrollTop);
      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection);
      }

      if (sectionRef.current) {
        const inCenter = isElementInCenter(sectionRef.current);
        if (inCenter !== isInViewportCenter) {
          setIsInViewportCenter(inCenter);
        }
      }
    }, THROTTLE_TIME, { leading: true, trailing: true }),
    [lastScrollTop, scrollDirection, isElementInCenter, isInViewportCenter]
  );

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        checkScrollPosition();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkScrollPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      checkScrollPosition.cancel(); // Clean up the throttled function
    };
  }, [checkScrollPosition]);

  // Adjust auto-scroll interval
  useEffect(() => {
    if (!autoScrollEnabled || !isInViewportCenter) return;

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < cards.length - 1) {
        scrollToCard("down");
      } else {
        setAutoScrollEnabled(false);
      }
    }, ANIMATION_DURATION + 150); // Added extra delay between auto-scrolls

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled, isInViewportCenter, isScrolling, scrollToCard]);

  useEffect(() => {
    const preventPageScroll = (e: WheelEvent) => {
      
      if (!sectionRef.current) return;
      
      const isInView = isElementInCenter(sectionRef.current);
      
      if (!isInView) return;

      // Prevent scrolling if we're in the middle of an animation
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Allow scrolling down only after all cards are viewed
      if (currentIndex === cards.length - 1 && e.deltaY > 0) {
        return;
      }

      // Allow scrolling up only when at the first card
      if (currentIndex === 0 && e.deltaY < 0) {
        return;
      }

      // Prevent default scroll and handle card navigation
      e.preventDefault();
      e.stopPropagation();

      if (e.deltaY > 0 && currentIndex < cards.length - 1) {
        handleManualScroll("down");
      } else if (e.deltaY < 0 && currentIndex > 0) {
        handleManualScroll("up");
      }
    };

    // Add the event listener to the window instead of the section
    window.addEventListener("wheel", preventPageScroll, { passive: false });
    return () => window.removeEventListener("wheel", preventPageScroll);
  }, [isScrolling, currentIndex, handleManualScroll]);

  const handleScroll = useCallback(() => {
    const containerHeight = containerRef.current?.clientHeight || 0;
    const cardElements = containerRef.current?.getElementsByClassName("card-container");

    if (cardElements) {
      const newOpacities = Array.from(cardElements).map((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const containerRect = containerRef.current?.getBoundingClientRect();

        // Check if containerRect is defined before accessing its properties
        const containerTop = containerRect ? containerRect.top : 0; // Default to 0 if undefined
        const distanceFromCenter = Math.abs(cardCenter - (containerTop + containerHeight / 2));
        const maxDistance = containerHeight * 0.6;
        const opacity = Math.max(0.5, 1 - distanceFromCenter / maxDistance);
        return {
          opacity,
          blur: (1 - opacity) * 1,
        };
      });

      setCardOpacities(newOpacities);
    }
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled || !isInViewportCenter) return; // Only auto-scroll when in center

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < 4) {
        scrollToCard("down");
      } else {
        setAutoScrollEnabled(false); // Stop auto-scroll at the last card
      }
    }, ANIMATION_DURATION); // Add a 1-second pause

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled, isInViewportCenter, isScrolling]);

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
  console.log("iscenter", isElementInCenter)
  

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const parent = parentScrollRef.current;

    if (!container || !section || !parent) return;

    const handleNestedScroll = () => {
      // Check if we've reached the bottom of the nested scroll
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
      const isAtTop = container.scrollTop === 0;

      if (isAtBottom && scrollDirection === 'down') {
        document.body.style.overflow = 'auto';
      } else if (isAtTop && scrollDirection === 'up') {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    container.addEventListener('scroll', handleNestedScroll);
    return () => {
      container.removeEventListener('scroll', handleNestedScroll);
      document.body.style.overflow = 'auto';
    };
  }, [scrollDirection, parentScrollRef]);


  
  // Add this to an event listener or a specific trigger.
  useEffect(() => {
    if (isInViewportCenter && sectionRef.current) {
      // Smooth scroll only when entering the section for the first time
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isInViewportCenter]);
  
  useEffect(() => {
    // Toggle body scroll lock based on `isInViewportCenter`
    const originalOverflow = document.body.style.overflow;
  
    if (isInViewportCenter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }
  
    return () => {
      // Reset overflow to its original state when the component unmounts
      document.body.style.overflow = originalOverflow;
    };
  }, [isInViewportCenter]);
  
  const handleSectionEntry = useCallback(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [sectionRef]);
  

  return (
    <div
    ref={sectionRef}
    className={`h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat   ${cairo.className}`}
    style={{
      backgroundImage: `url(${bgImage.src})`,
      overflow: 'hidden',
    }}
    id="work"
    onMouseEnter={() => setAutoScrollEnabled(false)}
  >
  
      <div className="max-w-[1353px] mx-auto px-4 sm:px-0 ">
        <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:gap-6 ">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-1 lg:p-3 flex items-center justify-center lg:justify-start ">
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
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-start px-4 lg:px-0 lg:pr-4 ">
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