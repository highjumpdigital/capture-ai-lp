// Source: src/views/account/Work2.tsx

"use client";

import bgImage from '../assets/herosectionbgImage.png';
import { useRef, useEffect, useState } from 'react';
import { Cairo } from 'next/font/google';
import { motion } from 'framer-motion';
import { cards } from './constants';

const cairo = Cairo({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});

const SCROLL_ANIMATION_DURATION = 500;

export default function HowItWorkv2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardOpacities, setCardOpacities] = useState<{ opacity: number; blur: number }[]>(new Array(cards.length).fill({ opacity: 1, blur: 0 }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [gap, setGap] = useState(60); // Default gap

  // Update gap based on screen size
  useEffect(() => {
    const updateGap = () => {
      if (window.innerWidth >= 1024) { // 'lg' breakpoint
        setGap(120);
      } else {
        setGap(60);
      }
    };

    updateGap();
    window.addEventListener('resize', updateGap);
    return () => window.removeEventListener('resize', updateGap);
  }, []);

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
          handleManualScroll('down');
        } else {
          // Scrolling up
          if (currentIndex === 0) {
            // At first card, allow page scroll
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          handleManualScroll('up');
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    section.addEventListener('wheel', preventScroll, { passive: false });
    return () => section.removeEventListener('wheel', preventScroll);
  }, [isScrolling, currentIndex, gap]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerHeight = container.clientHeight;
      const cardElements = container.getElementsByClassName('card-container');
      
      const newOpacities = Array.from(cardElements).map((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const containerRect = container.getBoundingClientRect();
        const distanceFromCenter = Math.abs(cardCenter - (containerRect.top + containerHeight / 2));
        const maxDistance = containerHeight * 0.6;
        const opacity = Math.max(0.5, 1 - (distanceFromCenter / maxDistance));
        return {
          opacity,
          blur: (1 - opacity) * 1
        };
      });

      setCardOpacities(newOpacities);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const autoScrollInterval = setInterval(() => {
      if (currentIndex < cards.length - 1) {
        scrollToCard('down');
      } else {
        setAutoScrollEnabled(false);
      }
    }, SCROLL_ANIMATION_DURATION + 1000); // Add 1 second pause between scrolls

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex, autoScrollEnabled]);

  // Handle manual interaction
  const handleManualScroll = (direction: 'up' | 'down') => {
    setAutoScrollEnabled(false);
    scrollToCard(direction);
  };

  const scrollToCard = (direction: 'up' | 'down') => {
    if (isScrolling || !containerRef.current) return;

    setIsScrolling(true);
    const newIndex = direction === 'down' 
      ? Math.min(currentIndex + 1, cards.length - 1)
      : Math.max(currentIndex - 1, 0);

    if (newIndex !== currentIndex) {
      const CARD_HEIGHT = 176; // Height of each card in pixels
      const totalScroll = newIndex * (CARD_HEIGHT + gap);
      
      containerRef.current.scrollTo({
        top: totalScroll,
        behavior: 'smooth'
      });
      
      setCurrentIndex(newIndex);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, SCROLL_ANIMATION_DURATION + 100);
  };

  return (
    <div 
      ref={sectionRef}
      className={`h-[700px] bg-cover bg-center bg-no-repeat ${cairo.className}`}
      style={{
        backgroundImage: `url(${bgImage.src})`
      }}
      id='work'
      onMouseEnter={() => setAutoScrollEnabled(false)}
    >
      <div className="max-w-[1312px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-4 lg:p-0 flex items-center justify-center lg:justify-start">
            <h1 className="text-black font-bold leading-tight text-center lg:text-left" style={{
              fontSize: 'clamp(40px, 6vw, 128px)',
              maxWidth: '100%'
            }}>
              HERE&apos;S<br />
              HOW<br />
              IT WORKS
            </h1>
          </div>

          {/* Right Content Section with Line */}
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-start px-4 lg:px-0 lg:pr-4">
            {/* Vertical Orange Line with Enhanced Gradient Blur */}
            <div className="relative w-[2px] h-[400px] self-center overflow-visible"> 
              {/* Top blur gradient */}
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-orange"
              />
              {/* Main line */}
              <div className="absolute top-12 bottom-12 left-0 right-0 bg-orange" />
              {/* Bottom blur gradient */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[2px] h-16"
                style={{
                  background: 'linear-gradient(to top, transparent, #FF4206 30%)'
                }}
              />
            </div>

            {/* Cards Section */}
            <div 
              ref={containerRef} 
              className="pb-4 mt-[-35px] lg:pb-8 px-4 ml-[-26px] lg:ml-[-11px] lg:pl-0 lg:pr-8 max-h-[400px] overflow-y-auto scroll-smooth scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                transition: `all ${SCROLL_ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex flex-col gap-[60px] lg:gap-[120px]">
                {/* Top spacer for scrolling */}
                <div className="h-[10px]"></div>
                
                {cards.map((card, index) => (
                  <motion.div 
                    key={card.number} 
                    className="card-container flex items-center gap-4 lg:gap-8 w-full lg:w-[630px] h-[176px]"
                    style={{ 
                      opacity: cardOpacities[index]?.opacity ?? 1,
                    }}
                    animate={{
                      filter: `blur(${cardOpacities[index]?.blur ?? 0}px)`
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div 
                      className="rounded-full"
                      style={{ opacity: cardOpacities[index]?.opacity ?? 1 }}
                    >
                      <div className='w-[20px] h-[20px] rounded-full bg-orange'/>
                    </motion.div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <motion.span 
                        className="text-orange"
                        style={{ 
                          fontWeight: 300,
                          fontSize: '48px',
                          lineHeight: '48px'
                        }}
                      >{card.number}</motion.span>
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
                        className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-0 h-0"
                        style={{
                          borderTop: '14px solid transparent',
                          borderBottom: '14px solid transparent',
                          borderRight: '14px solid rgb(237,237,244)',
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
                <div className="h-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}