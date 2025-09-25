"use client";

import React from "react";
import Image from "next/image";
import { FilledButton } from "../_component/FilledButton";
import { Header } from "../_component/Header";
import { Footer } from "../_component/Footer";
import { Platform } from "../_component/Platform";

// Import SVG assets
import BookDemo1 from "../assets/book-demo-1.svg";
import BookDemo2 from "../assets/book-demo-2.svg";
import BookDemo3 from "../assets/book-demo-3.svg";
import BookDemo4 from "../assets/book-demo-4.svg";
import BookDemo5 from "../assets/tick.svg";
import BookDemo6 from "../assets/funded-startups.png";
import BookDemo7 from "../assets/black-tick.png";

// Platform logos
import WordPressLogo from "../assets/platform/wordpress-svgrepo-com.svg";
import ShopifyLogo from "../assets/platform/shopify-svgrepo-com.svg";
import WooCommerceLogo from "../assets/platform/woocommerce-icon-svgrepo-com.svg";
import WixLogo from "../assets/platform/wix-svgrepo-com.svg";
import SquarespaceLogo from "../assets/platform/squarespace-132-svgrepo-com.svg";
import MagentoLogo from "../assets/platform/magento-svgrepo-com.svg";
import BigCommerceLogo from "../assets/platform/bigcommerce-svgrepo-com.svg";

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white">
        <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8 tracking-tighter">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-[64px] font-bold ">
                  <span className="text-black Cairo">SCHEDULE A </span>
                  <span className="text-[#FF4206] Cairo font-normal">DEMO.</span>
                </h1>
                
                <p className="text-[16px] text-black font-bold leading-relaxed max-w-[450px] Inter">
                  See Capture AI In Action. Watch The 24/7 Chatbot Capture Leads, 
                  Qualify Buyers, And Lift Conversion Across Web And Social.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                <Image
                  src={BookDemo5}
                  alt="Dashboard Interface"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                />
                  <p className="text-[14px] font-normal text-black Inter">
                    Turn More Visits Into Pipeline With Guided Chats And Smart Prompts
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <Image
                  src={BookDemo5}
                  alt="Dashboard Interface"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                />
                  <p className="text-[14px] font-normal text-black Inter">
                    Cut Reply Time To Zero With Always-On Support That Logs Every Chat
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <Image
                  src={BookDemo5}
                  alt="Dashboard Interface"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                />
                  <p className="text-[14px] font-normal text-black Inter">
                    Send Clean Lead Data To Your Team By Email And SMS With Alerts
                  </p>
                </div>
              </div>
              <p className="text-black leading-relaxed Inter text-[16px] font-bold">
                  Book A Slot Now. We Tailor The Demo To Your Site, Use Case, And Stack. 
                  Leave With Clear Next Steps.
                </p>

              {/* CTA Button */}
              <div className="pt-4">
                <FilledButton 
                  buttonTitle="BOOK A DEMO"
                  className="text-[16px] font-bold Cairo w-[150px] h-[40px] bg-[#FF4206] text-white"
                  onClick={() => {}}
                />
              </div>

              {/* Target Audience Icons */}
              <div className="flex flex-col items-start gap-6 pt-4">
                <div>
              <Image
                  src={BookDemo6}
                  alt="Dashboard Interface"
                  className="w-[132px] h-[36px]"
                />
                </div>
                <div className="flex flex-row items-start gap-4">
                 <div className="flex items-center gap-2">
                <Image
                  src={BookDemo7}
                  alt="Dashboard Interface"
                  className="w-[12px] h-[12px]"
                />
                  <p className="text-[12px] font-light text-black Cairo">
                    Funded Startups.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <Image
                  src={BookDemo7}
                  alt="Dashboard Interface"
                  className="w-[12px] h-[12px]"
                />
                  <p className="text-[12px] font-light text-black Cairo">
                    E-commerce Brands.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <Image
                  src={BookDemo7}
                  alt="Dashboard Interface"
                  className="w-[12px] h-[12px]"
                />
                  <p className="text-[12px] font-light text-black Cairo">
                   B2B Teams.
                  </p>
                </div>
                </div>
                {/* <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Funded startups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">E-commerce brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">B2B teams</span>
                </div> */}
              </div>
            </div>

            {/* Right Side - UI Mockups */}
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="relative z-10">
                <Image
                  src={BookDemo1}
                  alt="Dashboard Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Calendar Mockup */}
              <div className="absolute top-8 left-8 z-20">
                <Image
                  src={BookDemo2}
                  alt="Calendar Interface"
                  width={300}
                  height={200}
                  className="w-64 h-auto"
                />
              </div>

              {/* Video Call Interface */}
              <div className="absolute bottom-8 right-8 z-20">
                <Image
                  src={BookDemo3}
                  alt="Video Call Interface"
                  width={200}
                  height={150}
                  className="w-48 h-auto"
                />
              </div>

              {/* Platform Integration Animation */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-gray-200 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-2 border-[#FF4206] rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#FF4206]">CAPTUREAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Availability Section */}
      <Platform />

      <Footer />
    </div>
  );
}
