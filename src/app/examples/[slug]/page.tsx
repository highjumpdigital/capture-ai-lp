"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "../../_component/Header";
import { Footer } from "../../_component/Footer";
import ExampleChatbot from "../../_component/ExampleChatbot";
import Image from "next/image";
import { Inter, Cairo } from "next/font/google";
import searchGif from "../../assets/GIF/search.gif";
import arrowDown from "../../assets/GIF/arrow-down-right.svg";
import comment from "../../assets/GIF/comment-icon.svg";
import handIcon from "../../assets/GIF/hand-icon.svg";
import starIcon from "../../assets/GIF/start-icon.svg";
import robotGif from "../../assets/GIF/robot.gif";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

// Example configurations with their respective chatbot IDs
const exampleConfigs = {
  "promotional-products": {
    chatbotId: "cHlUzZJx7dC",
  },
  "insurance": {
    chatbotId: "cBXcC6wcYhe",
  },
  "cleaning-service": {
    chatbotId: "cHlUzZJx7dC",
  },
  "ecommerce-support": {
    chatbotId: "cBXcC6wcYhe",
  },
  "travel-booking": {
    chatbotId: "cHlUzZJx7dC",
  },
  "healthcare-assistant": {
    chatbotId: "cBXcC6wcYhe",
  },
  "legal-services": {
    chatbotId: "cHlUzZJx7dC",
  },
  "financial-planning": {
    chatbotId: "cBXcC6wcYhe",
  },
  "education-support": {
    chatbotId: "cHlUzZJx7dC",
  }
};

export default function ExamplePage() {
  const params = useParams();
  const router = useRouter();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const slug = params.slug as string;
  const example = exampleConfigs[slug as keyof typeof exampleConfigs];

  if (!example) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Example Not Found</h1>
          <p className="text-gray-600 mb-6">The requested example could not be found.</p>
          <button
            onClick={() => router.push('/examples')}
            className="bg-[#FF4206] hover:bg-[#e63900] text-white px-6 py-3 rounded-lg font-bold"
          >
            Back to Examples
          </button>
        </div>
      </div>
    );
  }

  const handleTryExample = () => {
    console.log("Try This Example button clicked");
    console.log("example.chatbotId", example.chatbotId);
    console.log("Setting isChatbotOpen to true");
    setIsChatbotOpen(true);
    // The chatbot will auto-open due to the autoOpen prop
  };

  const handleBackToExamples = () => {
    router.push('/examples');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative" style={{
      backgroundImage: 'url(/background/image.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Header />

      {/* Example Chatbot - User can manually open by clicking widget */}
      <ExampleChatbot
        chatbotId={example.chatbotId}
        autoOpen={false}
        delay={1500}
      />

      <main className="pt-[142px] pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1353px] mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 mt-6 sm:mt-12 lg:mt-16">
            {/* Main Heading */}
            <h1 className="mb-6">
              <span className="text-black text-test-our">TEST OUR </span>
              <span className="text-[#FF4206] text-ai-assistant">AI ASSISTANT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-black/80 mb-8 subtitle-text">
              Your AI-powered assistant is ready to help
            </p>

            {/* Instruction Text */}
            <div className="mb-6">
              <span className="chat-widget-banner">
                CLICK THE CHAT WIDGET BELOW TO GET STARTED
              </span>
            </div>

            {/* Arrow pointing down */}
            <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ border: '1px solid #FF42064D' }}>
                <Image src={arrowDown} alt="arrow-down" width={20} height={20} className="sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center sm:place-items-stretch max-w-[1400px] mx-auto">
            {/* Ask Anything Card */}
            <div className="bg-white border border-gray-200 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] w-full max-w-[418px] h-[240px] sm:h-[263px] relative transition-all duration-300 hover:shadow-[0_3.87px_20.05px_-1.94px_rgba(255,66,6,0.25)] group overflow-hidden sm:hover:scale-110">
              <div className="border-b-[8px] border-[#FF4206] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] p-4 sm:p-6 md:p-8 lg:p-[45px_38px_45px_38px] transition-all duration-300 flex flex-col items-start text-left h-full">
                {/* Title */}
                <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold text-black mb-3 sm:mb-4 py-2 leading-[1.2] ${cairo.className}`}>
                  Ask Anything
                </h3>

                {/* Description */}
                <p className={`text-black/80 mb-6 sm:mb-8 leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px] ${inter.className}`}>
                  Get instant answers to your questions
                </p>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 aspect-square" style={{ backgroundColor: '#FF42060F' }}>
                  <Image src={comment} alt="comment" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* AI-Powered Card */}
            <div className="bg-white border border-gray-200 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] w-full max-w-[418px] h-[240px] sm:h-[263px] relative transition-all duration-300 hover:shadow-[0_3.87px_20.05px_-1.94px_rgba(255,66,6,0.25)] group overflow-hidden sm:hover:scale-110">
              <div className="border-b-[8px] border-[#FF4206] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] p-4 sm:p-6 md:p-8 lg:p-[45px_38px_45px_38px] transition-all duration-300 flex flex-col items-start text-left h-full">
                {/* Title */}
                <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold text-black mb-3 sm:mb-4 py-2 leading-[1.2] ${cairo.className}`}>
                  AI-Powered
                </h3>

                {/* Description */}
                <p className={`text-black/80 mb-6 sm:mb-8 leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px] ${inter.className}`}>
                  Smart responses powered by advanced AI
                </p>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 aspect-square" style={{ backgroundColor: '#FF42060F' }}>
                  <Image src={starIcon} alt="star" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Capture Details Card */}
            <div className="bg-white border border-gray-200 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] w-full max-w-[418px] h-[240px] sm:h-[263px] relative transition-all duration-300 hover:shadow-[0_3.87px_20.05px_-1.94px_rgba(255,66,6,0.25)] group overflow-hidden sm:hover:scale-110">
              <div className="border-b-[8px] border-[#FF4206] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] p-4 sm:p-6 md:p-8 lg:p-[45px_38px_45px_38px] transition-all duration-300 flex flex-col items-start text-left h-full">
                {/* Title */}
                <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold text-black mb-3 sm:mb-4 py-2 leading-[1.2] ${cairo.className}`}>
                  Capture Details
                </h3>

                {/* Description */}
                <p className={`text-black/80 mb-6 sm:mb-8 leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px] ${inter.className}`}>
                  Effective details capture capabilities
                </p>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 aspect-square" style={{ backgroundColor: '#FF42060F' }}>
                  <Image src={handIcon} alt="hand" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
