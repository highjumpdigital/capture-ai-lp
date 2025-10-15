// src/app/examples/[slug]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
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

  // Prevent scrolling on mobile devices
  useEffect(() => {
    // Store original overflow values
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyHeight = document.body.style.height;
    const originalHtmlHeight = document.documentElement.style.height;
    const originalBodyPosition = document.body.style.position;

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100dvh';
    document.documentElement.style.height = '100dvh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    // Cleanup function to restore original values when component unmounts
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.height = originalBodyHeight;
      document.documentElement.style.height = originalHtmlHeight;
      document.body.style.position = originalBodyPosition;
    };
  }, []);

  if (!example) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Example Not Found</h1>
          <p className="text-gray-600 mb-6">The requested example could not be found.</p>
          <button
            onClick={() => { window.location.href = '/examples'; }}
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
    window.location.href = '/examples';
  };

  return (
    <div className="flex flex-col bg-[#F5F5F5] relative overflow-hidden" style={{
      height: '100dvh',
      backgroundImage: 'url(/background/image.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overscrollBehavior: 'none'
    }}>
      <Header />

      {/* Example Chatbot - User can manually open by clicking widget */}
      <ExampleChatbot
        chatbotId={example.chatbotId}
        autoOpen={false}
        delay={1500}
      />

      <main className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 h-[calc(100dvh-100px)]">
        <div className="max-w-[1353px] mx-auto w-full">

          <div className="text-center">
            <h1 className="mb-[clamp(0.5rem,1.5vh,1.5rem)]">
              <span className="text-black" style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '600',
                fontSize: 'clamp(24px, 5vw, 100px)',
                lineHeight: '100%',
                textTransform: 'uppercase'
              }}>TEST OUR </span>
              <span className="text-[#FF4206]" style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 5vw, 100px)',
                lineHeight: '100%',
                textTransform: 'uppercase'
              }}>AI ASSISTANT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-black/80 mb-[clamp(0.5rem,2vh,2rem)]" style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '300',
              fontSize: 'clamp(14px, 1.5vw, 24px)',
              lineHeight: '150%',
              textAlign: 'center'
            }}>
              Your AI-powered assistant is ready to help
            </p>

            {/* Instruction Text */}
            <div className="mb-[clamp(0.5rem,1.5vh,1.5rem)]">
              <span className="inline-block bg-[#FF42060F] rounded-[68px] px-4 py-2" style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(10px, 1vw, 16px)',
                color: '#FF4206',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                CLICK THE CHAT WIDGET BELOW TO GET STARTED
              </span>
            </div>

            {/* Arrow pointing down */}
            <div className="flex justify-center">
              <div className="arrow-to-chatbot rounded-full bg-white shadow-lg flex items-center justify-center" style={{ 
                border: '1px solid #FF42064D',
                width: 'clamp(48px, 5vw, 80px)',
                height: 'clamp(48px, 5vw, 80px)'
              }}>
                <Image src={arrowDown} alt="arrow-down" width={20} height={20} style={{
                  width: 'clamp(20px, 2vw, 32px)',
                  height: 'clamp(20px, 2vw, 32px)'
                }} />
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
