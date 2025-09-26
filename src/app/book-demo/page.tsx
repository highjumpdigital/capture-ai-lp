"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FilledButton } from "../_component/FilledButton";
import { Header } from "../_component/Header";
import { Footer } from "../_component/Footer";
import { Platform } from "../_component/Platform";
import { CalendlyModal } from "../_component/CalendlyModal";

// Import SVG assets
import BookDemo5 from "../assets/tick.svg";
import calendarImg from "../assets/calendar_img.svg";
import calendly from "../assets/calendly.svg";
import ellipse from "../assets/ellipse.svg";
import BookDemo6 from "../assets/funded-startups.png";
import BookDemo7 from "../assets/black-tick.png";
import DemoPageBg from "../assets/demo_page_bg.png";
// Using public path for video to avoid TypeScript import issues

export default function BookDemoPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookDemoClick = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with reduced visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src={DemoPageBg}
          alt="Demo Page Background"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-10">
        <Header />

        {/* Main Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:-my-24 xl:-my-24 2xl:-my-24 lg:-mb-36 xl:-mb-36 2xl:-mb-36 bg-transparent w-full mx-auto">
          <div className="max-w-[1430px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-16 xl:gap-20 items-start lg:items-center">

              {/* Left Side - Content */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6 order-1 lg:order-1">
                {/* Main Heading */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold">
                    <span className="text-black Cairo">SCHEDULE A </span>
                    <span className="text-[#FF4206] Cairo font-normal">DEMO.</span>
                  </h1>

                  <p className="text-base text-black/80 font-bold max-w-[480px] Inter">
                    See Capture AI In Action. Watch The 24/7 Chatbot Capture Leads,
                    Qualify Buyers, And Lift Conversion Across Web And Social.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-1.5 mt-5">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={16}
                      height={16}
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="text-sm font-medium text-black/80 Inter leading-relaxed">
                      Turn More Visits Into Pipeline With Guided Chats And Smart Prompts
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={16}
                      height={16}
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="text-sm font-medium text-black/80 Inter leading-relaxed">
                      Cut Reply Time To Zero With Always-On Support That Logs Every Chat
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={16}
                      height={16}
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="text-sm font-medium text-black/80 Inter leading-relaxed">
                      Send Clean Lead Data To Your Team By Email And SMS With Alerts
                    </p>
                  </div>
                </div>
                <p className="text-black/80 leading-relaxed Inter text-base font-bold max-w-[450px]">
                  Book A Slot Now. We Tailor The Demo To Your Site, Use Case, And Stack.
                  Leave With Clear Next Steps.
                </p>

                {/* CTA Button */}
                <div className="">
                  <FilledButton
                    buttonTitle="BOOK A DEMO"
                    className="text-base sm:text-lg md:text-base font-bold Cairo w-[150px]  h-[40px] bg-[#FF4206] text-white hover:bg-[#e63900] transition-colors duration-200"
                    onClick={handleBookDemoClick}
                  />
                </div>

                {/* Target Audience Icons */}
                <div className="flex flex-col items-start gap-0.5">
                  <div>
                    <Image
                      src={BookDemo6}
                      alt="Dashboard Interface"
                      className="w-[130px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6">
                    <div className="flex items-center gap-1 mb-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
                      />
                      <p className="text-xs font-light text-black Cairo">
                        Funded Startups.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
                      />
                      <p className="text-xs font-light text-black Cairo">
                        E-commerce Brands.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
                      />
                      <p className="text-xs font-light text-black Cairo">
                        B2B Teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - UI Mockups */}
              <div className="relative mt-8 sm:mt-12 lg:mt-56 order-2 lg:order-2 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] 2xl:h-[800px]">
                {/* Professional Background Ellipse */}
                <div className="absolute bottom-20 -left-20 z-0 blur hidden lg:block">
                  <Image
                    src={ellipse}
                    alt="Background Design Element"
                    width={999}
                    height={900}
                    className="w-[999px] h-[900px] object-contain"
                  />
                </div>

                {/* Main Dashboard Mockup */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:transform-none z-10">
                  <Image
                    src={calendly}
                    alt="Calendar Interface"
                    width={469}
                    height={333}
                    className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[469px] h-auto object-contain border border-black rounded-xl"
                  />
                </div>

                {/* Dashboard Video Mockup */}
                <div className="absolute bottom-[200px] sm:bottom-[250px] md:bottom-[300px] left-0 sm:left-4 md:left-8 lg:-left-16 xl:-left-20 2xl:-left-0 z-20">
                  <video
                    src="/dashboard_loop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    width={469}
                    height={292}
                    className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[469px] h-auto border border-black rounded-xl"
                  />
                </div>

                {/* Video Call Interface */}
                {/* <div className="absolute bottom-[78px] -right-[32px] z-30">
                  <Image
                    src={BookDemo3}
                    alt="Video Call Interface"
                    width={200}
                    height={150}
                    className="w-[440px] h-auto"
                  />
                </div> */}

                {/* Platform Integration Animation */}
                {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-gray-200 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-2 border-[#FF4206] rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#FF4206]">CAPTUREAI</span>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Availability Section */}
        <Platform />

        <Footer />

        {/* Calendly Modal */}
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={handleCloseCalendly}
          calendlyUrl="https://calendly.com/talibabbas-devexcelit/30minhttps://calendly.com/talibabbas-devexcelit/30min?back=1&month=2025-09https://calendly.com/talibabbas-devexcelit/30min" // Replace with your actual Calendly URL
        />
      </div>
    </div>
  );
}
