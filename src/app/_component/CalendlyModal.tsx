"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InlineWidget } from "react-calendly";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
        {/* Calendly Inline Widget */}
        <div className="w-full rounded-lg shadow-lg overflow-hidden">
          <InlineWidget
            key={`calendly-${isOpen ? "open" : "closed"}`}
            url={calendlyUrl}
            styles={{
              height: "670px",
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
