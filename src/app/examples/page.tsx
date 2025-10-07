"use client";

import React from "react";
import { Header } from "../_component/Header";
import { Footer } from "../_component/Footer";
import { HeroSection } from "./components/HeroSection";
import { RealAIScenarios } from "./components/RealAIScenarios";
import { ReadyToBuildCTA } from "./components/ReadyToBuildCTA";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-10 bg-gray-100">
        <HeroSection />
        <RealAIScenarios />
        <ReadyToBuildCTA />
      </main>
      <Footer />
    </div>
  );
}