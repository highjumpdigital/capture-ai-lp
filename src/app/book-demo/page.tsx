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
        <section className="lg:py-52 bg-transparent w-full mx-auto">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 tracking-tighter">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left Side - Content */}
              <div className="space-y-6">
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-7xl font-bold">
                    <span className="text-black Cairo">SCHEDULE A </span>
                    <span className="text-[#FF4206] Cairo font-normal">DEMO.</span>
                  </h1>

                  <p className="text-2xl text-gray-800 font-bold leading-snug max-w-[650px] Inter pt-5">
                    See Capture AI In Action. Watch The 24/7 Chatbot Capture Leads,
                    Qualify Buyers, And Lift Conversion Across Web And Social.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={14}
                      height={14}
                      className="w-5 h-auto"
                    />
                    <p className="text-lg font-medium text-gray-700 Inter">
                      Turn More Visits Into Pipeline With Guided Chats And Smart Prompts
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={14}
                      height={14}
                      className="w-5 h-auto"
                    />
                    <p className="text-lg font-medium text-gray-700 Inter">
                      Cut Reply Time To Zero With Always-On Support That Logs Every Chat
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={BookDemo5}
                      alt="Dashboard Interface"
                      width={14}
                      height={14}
                      className="w-5 h-auto"
                    />
                    <p className="text-lg font-medium text-gray-700 Inter">
                      Send Clean Lead Data To Your Team By Email And SMS With Alerts
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed Inter text-xl font-bold max-w-[550px]">
                  Book A Slot Now. We Tailor The Demo To Your Site, Use Case, And Stack.
                  Leave With Clear Next Steps.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <FilledButton
                    buttonTitle="BOOK A DEMO"
                    className="text-xl font-bold Cairo w-[180px] h-[50px] bg-[#FF4206] text-white"
                    onClick={handleBookDemoClick}
                  />
                </div>

                {/* Target Audience Icons */}
                <div className="flex flex-col items-start gap-6 pt-4">
                  <div>
                    <Image
                      src={BookDemo6}
                      alt="Dashboard Interface"
                      className="w-[180px] h-auto"
                    />
                  </div>
                  <div className="flex flex-row items-start gap-4 -mt-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[12px] h-[12px]"
                      />
                      <p className="text-base font-light text-black Cairo">
                        Funded Startups.
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[12px] h-[12px]"
                      />
                      <p className="text-base font-light text-black Cairo">
                        E-commerce Brands.
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src={BookDemo7}
                        alt="Dashboard Interface"
                        className="w-[12px] h-[12px]"
                      />
                      <p className="text-base font-light text-black Cairo">
                        B2B Teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - UI Mockups */}
              <div className="relative">
                {/* Reddish/Orange Background Glow */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="w-[600px] h-[600px] bg-gradient-radial from-red-600/90 via-orange-600 to-transparent rounded-full blur-[90px]"></div>
                </div>

                {/* Main Dashboard Mockup */}
                <div className="relative z-10 h-full w-full -right-36 -top-10">
                  <Image
                    src={calendarImg}
                    alt="Calendar Interface"
                    width={600}
                    height={400}
                    className="w-[700px] h-full object-contain"
                  />
                </div>

                {/* Calendar Mockup */}
                <div className="absolute -bottom-28 -left-[70px] z-20">
                  <video
                    src="/dashboard_loop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    width={300}
                    height={200}
                    className="w-[700px] h-auto border-2 border-black rounded-2xl"
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
          calendlyUrl="https://calendly.com/your-username/30min" // Replace with your actual Calendly URL
        />
      </div>
    </div>
  );
}
