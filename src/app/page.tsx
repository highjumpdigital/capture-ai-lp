<<<<<<< HEAD
"use client";
=======
"use client"
import { useEffect, useState, useRef } from "react";
>>>>>>> 19c097e9f2856a41296a06dc9a03bed30b7bf13d
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
<<<<<<< HEAD
  const [scrollingPaused, setScrollingPaused] = useState(false);
=======
>>>>>>> 19c097e9f2856a41296a06dc9a03bed30b7bf13d
  const isMobile = useIsMobile();
  const parentScrollRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentElement = parentScrollRef.current;
    const workSection = workSectionRef.current;

<<<<<<< HEAD
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
=======
    if (!parentElement || !workSection) return;

    const handleScroll = () => {
      const workRect = workSection.getBoundingClientRect();

      // Check if work section is in the middle of the viewport
      if (
        workRect.top <= window.innerHeight / 2 &&
        workRect.bottom >= window.innerHeight / 2
      ) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
>>>>>>> 19c097e9f2856a41296a06dc9a03bed30b7bf13d
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

<<<<<<< HEAD
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

=======
>>>>>>> 19c097e9f2856a41296a06dc9a03bed30b7bf13d
  return (
    <div ref={parentScrollRef} className="pt-20">
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />

<<<<<<< HEAD
      <div id="work">
        {/* Render different components based on device type */}
        {isMobile ? <HowItWorks /> : <HowItWorkv2 />}
=======
      <div ref={workSectionRef} id="work">
        {isMobile ? (
          <HowItWorks parentScrollRef={parentScrollRef} />
        ) : (
          <HowItWorkv2 parentScrollRef={parentScrollRef} />
        )}
>>>>>>> 19c097e9f2856a41296a06dc9a03bed30b7bf13d
      </div>

      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
