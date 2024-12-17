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

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Platform />
      <Immersion />
      <ChatPerformance />
      <PaymentSol />
      <FAQ />
      <Footer />
    </div>
  );
}
