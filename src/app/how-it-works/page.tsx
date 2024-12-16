"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: "Step 1",
    content: "First step of how it works goes here."
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
  const [[currentCard, direction], setCard] = useState([0, 0]);
  const y = useMotionValue(0);
  
  const cardOpacity = useTransform(
    y,
    [-300, 0, 300],
    [0.3, 1, 0.3]
  );

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      scale: 0.5,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      scale: 0.5,
      filter: "blur(10px)"
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const nextCard = (currentCard + newDirection + cards.length) % cards.length;
    setCard([nextCard, newDirection]);
  };

  const ballPosition = (currentCard / (cards.length - 1)) * 100;

  return (
    <div className="flex min-h-screen p-8">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Here&apos;s How it Works</h1>
      </div>

      {/* Center Line with Ball */}
      <div className="relative flex items-center justify-center mx-4">
        <div className="w-1 h-[600px] bg-orange-500"></div>
        <motion.div 
          className="absolute w-4 h-4 bg-orange-500 rounded-full"
          animate={{ 
            y: `${ballPosition}%`
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.5 
          }}
        />
      </div>

      {/* Right Section with Animated Cards */}
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentCard}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              y,
              opacity: cardOpacity,
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              scale: { duration: 0.5 },
              filter: { duration: 0.5 }
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-[541px] p-[30px_0px_0px_0px] border-t-[3px] border-gray-200 rounded-tl-[5px] bg-white shadow-lg cursor-grab active:cursor-grabbing"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{cards[currentCard].title}</h3>
              <p className="text-gray-600">{cards[currentCard].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HowItWorks; 