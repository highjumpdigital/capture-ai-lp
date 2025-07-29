"use client"
import { useEffect, useState, useRef } from "react";
import {
  Header,
  Footer,
  HeroSection,
  Platform,
  FAQ,
  PaymentSol,
  Immersion,
  ChatPerformance,
} from "./_component";
import HowItWorks from "./_component/HowitsWork";
import HowItWorkv2 from "./_component/HowItWork-v2";
import { useRouter } from "next/navigation";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useIsMobile();
  const parentScrollRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle hash navigation when page loads
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
      // Wait for the page to fully load before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div ref={parentScrollRef} className="pt-20">
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />

      <div ref={workSectionRef} id="work">
        {isMobile ? (
          <HowItWorks parentScrollRef={parentScrollRef} />
        ) : (
          <HowItWorkv2 parentScrollRef={parentScrollRef} />
        )}
      </div>

      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
