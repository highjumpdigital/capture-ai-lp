"use client";

import HeroSectionBgImage from "@/app/assets/herosectionbgImage.png";
import React, { useState, useEffect } from 'react';

const cards = [
  {
    id: 1,
    title: "Step 1",
    content: "The user will start a conversation and can ask any questions they need to. If you do not have pre-programmed answers, your AI will take over and respond."
  },
  {
    id: 2,
    title: "Step 2",
    content: "Second step of how it works goes here."
  },
  {
    id: 3,
    title: "Step 3",
    content: "Third step of how it works goes here."
  }
];

const HowItWorks = () => {
  const [currentCard, setCard] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      // Calculate the scroll delta
      const delta = e.deltaY;

      // Update scroll threshold
      setScrollThreshold(prev => prev + delta);

      // Change card only if threshold exceeds a certain value
      if (Math.abs(scrollThreshold) > 100) { // Adjust this value as needed
        if (delta > 0) {
          // Scrolling down
          setCard((prev) => Math.min(prev + 1, cards.length - 1));
        } else {
          // Scrolling up
          setCard((prev) => Math.max(prev - 1, 0));
        }
        setScrollThreshold(0); // Reset threshold after changing card
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [scrollThreshold]);

  return (
    <div 
      className="flex min-h-screen p-8 relative"
      style={{
        backgroundImage: `url(${HeroSectionBgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-[128px] font-extrabold leading-none tracking-tight text-black font-['Cairo']">
          Here&apos;s<br />
          How it<br />
          Works
        </h1>
      </div>

      {/* Center Line */}
      <div className="relative flex items-center justify-center mx-4">
        <div 
          className="w-1 h-[428px]"
          style={{
            background: `
              linear-gradient(180deg, 
                transparent 0%, 
                rgba(234, 88, 12, 0.5) 5%,
                rgb(234, 88, 12) 10%,
                rgb(234, 88, 12) 90%,
                rgba(234, 88, 12, 0.5) 95%,
                transparent 100%
              )`
          }}
        >
          {cards.map((_, index) => (
            <div
              key={index}
              className={`absolute w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                index === currentCard ? 'bg-orange-500' : 'bg-orange-300'
              }`}
              style={{
                left: '-6px',
                transform: `translateY(${(index - currentCard) * 200 + 180}px)`,
                top: '214px',
                opacity: Math.abs(index - currentCard) <= 1 ? 1 : 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Section with Cards */}
      <div className="w-1/2 relative max-h-[428px] overflow-y-auto flex items-center justify-center mt-[160px] scrollbar-hide" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute w-[541px] p-[30px_0px_0px_0px] border-t-[3px] border-gray-200 rounded-tl-[5px] bg-white shadow-lg transition-all duration-300 ease-in-out"
            style={{
              transform: `translate(-50%, ${(index - currentCard) * 176 - 40}%)`,
              opacity: index === currentCard ? 1 : 0.3,
              filter: index === currentCard ? 'blur(0px)' : `blur(${Math.abs(index - currentCard) * 2}px)`,
              left: "50%",
              top: "50%",
            }}
          >
            <div className="relative">
              <span className="absolute -left-[80px] top-[30px] text-orange-500 font-bold text-3xl">
                {String(card.id).padStart(2, '0')}.
              </span>
              <div className="p-6 h-[176px] w-[541px]">
                <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                <p className="text-black font-inter">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;