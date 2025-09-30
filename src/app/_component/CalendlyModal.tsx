"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { InlineWidget } from "react-calendly";
import { AiOutlineClose } from "react-icons/ai";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com/talibabbas-devexcelit/30min",
}) => {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Reset loading state when modal opens
      setIsLoading(true);
      // Prevent scrolling on the body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.top = "unset";
      document.body.style.left = "unset";
      document.body.style.right = "unset";
      document.body.style.width = "unset";
    }
    return () => {
      // Cleanup: restore scrolling
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.top = "unset";
      document.body.style.left = "unset";
      document.body.style.right = "unset";
      document.body.style.width = "unset";
    };
  }, [isOpen]);

  // ESC key closes
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 400); // match animation duration
  };

  const handleCalendlyLoad = () => {
    setIsLoading(false);
  };

  // Fallback timeout to hide loading after 5 seconds
  useEffect(() => {
    if (isOpen && isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4100);
      
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isLoading]);

  // Ensure GDPR cookie banner is hidden by appending the required query param
  const calendlyUrlWithGdprHidden = useMemo(() => {
    try {
      const urlObject = new URL(calendlyUrl);
      const current = urlObject.searchParams.get("hide_gdpr_banner");
      if (current !== "1") {
        urlObject.searchParams.set("hide_gdpr_banner", "1");
      }
      return urlObject.toString();
    } catch {
      const hasQuery = calendlyUrl.includes("?");
      const separator = hasQuery ? "&" : "?";
      if (/([?&])hide_gdpr_banner=1(?!\d)/.test(calendlyUrl)) {
        return calendlyUrl;
      }
      return `${calendlyUrl}${separator}hide_gdpr_banner=1`;
    }
  }, [calendlyUrl]);

  if (!mounted || (!isOpen && !closing)) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full  sm:max-w-md md:max-w-[480px] max-w-[380px] max-h-fit md:max-h-fit sm:max-h-fit lg:max-w-5xl mx-4 overflow-hidden transform transition-all duration-500 ease-out ${
          isOpen && !closing ? "animate-slide-up" : "animate-slide-down"
        }`}
      >
        {/* Close Icon */}
        <AiOutlineClose
          size={23}
          className="block absolute top-6 right-4 lg:top-[45px] lg:right-[25px] z-20 text-black bg-white rounded-full p-1 cursor-pointer hover:text-black transition-colors duration-200"
          onClick={handleClose}
        />
        
        {/* Custom Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-2 md:max-h-[700px] md:max-w-[810px] xl:mt-14 mx-auto flex justify-center items-center z-30 bg-white rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4206]"></div>
          </div>
        )}

        {/* Calendly Inline Widget */}
        <div className={`w-full rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <InlineWidget
            key={`calendly-${isOpen ? "open" : "closed"}`}
            url={calendlyUrlWithGdprHidden}
            styles={{
              height: "800px",
              minWidth: "100%",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "317AEB1A",
              textColor: "000",
            }}
            utm={{
              utmCampaign: "demo-booking",
              utmSource: "website",
              utmMedium: "modal",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(100%) scale(0.95);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-in forwards;
        }
      `}</style>
    </div>,
    document.body
  );
};
