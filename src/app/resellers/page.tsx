"use client";

import React from "react";
import { Header } from "../_component/Header";
import { Footer } from "../_component/Footer";
import { GrowYourBusiness } from "./components/GrowYourBuisness";
import { WhyBecomeReseller } from "./components/WhyBecomeReseller";
import { ChatPerformance } from "../_component/ChatPerformance";
import { KeyBenefits } from "./components/KeyBenefits";
import { HowItWorks } from "./components/HowItWorks";
import { Platform } from "../_component/Platform";

export default function ResellersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <GrowYourBusiness />
        <Platform />
        <WhyBecomeReseller />
        <ChatPerformance />
        <KeyBenefits />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
