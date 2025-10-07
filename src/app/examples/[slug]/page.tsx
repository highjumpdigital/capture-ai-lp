"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "../../_component/Header";
import { Footer } from "../../_component/Footer";
import ExampleChatbot from "../../_component/ExampleChatbot";
// Example configurations with their respective chatbot IDs
const exampleConfigs = {
  "promotional-products": {
    chatbotId: "cHnIT11hLbm", // Replace with actual chatbot ID
  },
  "insurance": {
    chatbotId: "insurance_chatbot_id", // Replace with actual chatbot ID
  },
  "cleaning-service": {
    chatbotId: "cleaning_service_chatbot_id", // Replace with actual chatbot ID
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Example Chatbot - Only render when needed */}
      {isChatbotOpen && (
        <>
          {console.log("Rendering ExampleChatbot with:", {
            chatbotId: example.chatbotId,
            autoOpen: true,
            delay: 500,
            isChatbotOpen
          })}
          <ExampleChatbot 
            chatbotId={example.chatbotId} 
            autoOpen={true} 
            delay={500} 
          />
        </>
      )}

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBackToExamples}
            className="flex items-center gap-2 text-[#FF4206] hover:text-[#e63900] transition-colors mb-8 font-medium"
          >
            <span>←</span>
            Back to Examples
          </button>

          {/* Try Example Button */}
          <div className="text-center">
            <button
              onClick={handleTryExample}
              className="bg-[#FF4206] hover:bg-[#e63900] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Try This Example
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
