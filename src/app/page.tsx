"use client"
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default function Home() {
  const [scrollingDisabled, setScrollingDisabled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const workSection = document.getElementById("work");

    // Set up Intersection Observer to detect when the "work" section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // Disable scrolling when the section is in view
          setScrollingDisabled(true);
        } else {
          // Enable scrolling once the section leaves the viewport
          setScrollingDisabled(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (workSection) {
      observer.observe(workSection); // Start observing the "work" section
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (workSection) {
        observer.unobserve(workSection);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollingDisabled) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollingDisabled]);

  return (
    <div className="pt-20">
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />

      <div id="work"> {/* Add id to the section you want to track */}
        {isMobile ? <HowItWorks /> : <HowItWorkv2 />}
      </div>

      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
