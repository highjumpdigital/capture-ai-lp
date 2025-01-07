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
} from "./Components";
import HowItWorks from "./Components/HowitsWork";

export default function Home() {
  return (
    <div className="pt-20">
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />
      <HowItWorks />
      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
