"use client";
import { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src="https://cdn.cptr.ai/loader.js"]');
    if (existingScript) return;

    // Create and load the Capture AI script
    const script = document.createElement('script');
    script.src = 'https://cdn.cptr.ai/loader.js';
    script.setAttribute('data-company-id', 'cHnIT11hLbm');
    script.setAttribute('data-api-base', 'https://apis.cptr.ai');
    script.async = true;
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Capture AI chatbot script');
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default Chatbot;