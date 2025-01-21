"use client";
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
import { useEffect, useState } from "react";

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
  const [scrollingPaused, setScrollingPaused] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const workSection = document.getElementById("work");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // Pause scrolling for 3 seconds when the section is visible
          setScrollingPaused(true);
          setTimeout(() => {
            setScrollingPaused(false);
          }, 3000);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (workSection) {
      observer.observe(workSection);
    }

    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollingPaused) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollingPaused]);

  return (
    <div className="pt-20">
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />

      <div id="work">
        {/* Render different components based on device type */}
        {isMobile ? <HowItWorks /> : <HowItWorkv2 />}
      </div>

      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
