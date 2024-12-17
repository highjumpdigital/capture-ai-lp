"use client";
import { Header } from "./_Components/Header";
import { Footer } from "./_Components/Footer";
import { HeroSection } from "./_Components/HeroSection";
import { Platform } from "./_Components/Platform";
import { FAQ } from "./_Components/FAQ";
import { PaymentSol } from "./_Components/PaymentSol";
import { Immersion } from "./_Components/Immersion";
export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <Platform/>
      <Immersion/>
      <PaymentSol/>
      <FAQ/>
      <Footer />
    </div>
  );
}
