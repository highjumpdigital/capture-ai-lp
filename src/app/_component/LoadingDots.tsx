"use client";
 
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import loadingDots from "../assets/lottie/loading-dots.json";
 
interface LoadingDotsProps {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
  dotsOnly?: boolean;
  /**
   * Approximate speed controller. 400 keeps default speed.
   * Smaller = faster, larger = slower.
   */
  speed?: number;
}
 
const LoadingDots: React.FC<LoadingDotsProps> = ({
  text = "Loading",
  size = "md",
  color = "text-current",
  className = "",
  dotsOnly = false,
  speed = 400,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
 
  // Map the previous ms-per-step speed prop to a Lottie playback speed factor.
  useEffect(() => {
    const instance = lottieRef.current;
    if (!instance) return;
    const factor = 400 / (speed || 400);
    try {
      instance.setSpeed(factor);
    } catch {}
  }, [speed]);
 
  const sizeClasses = {
    sm: "text-[12px]",
    md: "text-[14px]",
    lg: "text-[16px]",
    xl: "text-[18px]",
  } as const;
 
  const sizePx = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
  }[size];
 
  if (dotsOnly) {
    return (
      <span
        className={`loading-dots-lottie inline-flex items-center ${color} ${className}`}
        aria-hidden
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={loadingDots}
          loop
          autoplay
          style={{ width: sizePx, height: sizePx, pointerEvents: "none" }}
        />
        <style jsx global>{`
          .loading-dots-lottie svg [class~="primary"] {
            fill: currentColor !important;
            stroke: currentColor !important;
          }
        `}</style>
      </span>
    );
  }
 
  return (
    <span className={`font-inter inline-flex items-center ${sizeClasses[size]} ${color} ${className}`}>
      <span>{text}</span>
      <span className="loading-dots-lottie inline-flex items-center ml-1 align-baseline" aria-hidden>
        <Lottie
          lottieRef={lottieRef}
          animationData={loadingDots}
          loop
          autoplay
          style={{ width: sizePx, height: sizePx, pointerEvents: "none" }}
        />
      </span>
      <style jsx global>{`
        .loading-dots-lottie svg [class~="primary"] {
          fill: currentColor !important;
          stroke: currentColor !important;
        }
      `}</style>
    </span>
  );
};
 
export default LoadingDots;
 
 