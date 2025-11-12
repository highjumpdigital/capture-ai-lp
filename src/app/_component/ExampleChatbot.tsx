"use client";
import { useEffect } from "react";

interface ExampleChatbotProps {
  chatbotId: string;
  autoOpen?: boolean;
  delay?: number;
}

const ExampleChatbot: React.FC<ExampleChatbotProps> = ({
  chatbotId,
  autoOpen = false,
  delay = 0
}) => {
  console.log("chatbotId", chatbotId);
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if we need to reload with a different chatbot ID
    const currentChatbotId = window.v?.c;
    const needsReload = currentChatbotId && currentChatbotId !== chatbotId;

    if (needsReload) {
      console.log(`Switching chatbot from ${currentChatbotId} to ${chatbotId}`);
      // Close current chatbot and clear it
      if (window.voiceflow?.chat) {
        window.voiceflow.chat.close();
      }
      // Clear the window.v to force reload
      window.v = undefined;
    }

    // If chatbot is already loaded with the same ID, just handle the auto-open
    if (window.voiceflow?.chat && !needsReload && currentChatbotId === chatbotId) {
      console.log("Chatbot already loaded with same ID, handling auto-open");
      if (autoOpen) {
        console.log("Auto-open requested for existing chatbot");
        setTimeout(() => {
          console.log("Attempting to open existing chatbot");
          if (window.voiceflow?.chat) {
            window.voiceflow.chat.open();
            console.log("Chatbot opened successfully");
          }
        }, delay || 1000);
      }
      return;
    }

    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src="https://cdn.cptr.ai/loader.js"]');
    if (existingScript && !needsReload) return;

    // Remove existing script if we're switching chatbots
    if (needsReload && existingScript) {
      existingScript.parentNode?.removeChild(existingScript);
    }

    // Create and load the Capture AI script
    const script = document.createElement('script');
    script.src = 'https://cdn.cptr.ai/loader.js';
    script.setAttribute('data-company-id', chatbotId);
    script.setAttribute('data-api-base', 'https://apis.cptr.ai');
    script.async = true;

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Capture AI chatbot script');
    };

    // Handle auto-open for examples
    if (autoOpen) {
      script.onload = () => {
        console.log("Chatbot script loaded, auto-opening");
        setTimeout(() => {
          console.log("Attempting to open chatbot");
          if (window.voiceflow?.chat) {
            window.voiceflow.chat.open();
            console.log("Chatbot opened successfully");
          } else {
            console.log("Chatbot not available for opening");
          }
        }, delay || 1000);
      };
    }

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      console.log("ExampleChatbot unmounting");
    };
  }, [chatbotId, autoOpen, delay]);

  return null; // This component doesn't render anything visible
};

export default ExampleChatbot;
