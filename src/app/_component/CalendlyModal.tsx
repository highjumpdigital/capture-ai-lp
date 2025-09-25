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
    calendlyUrl = "https://calendly.com/talibabbas-devexcelit/30minhttps://calendly.com/talibabbas-devexcelit/30min?back=1&month=2025-09https://calendly.com/talibabbas-devexcelit/30min" // Replace with your actual Calendly URL
}) => {
    const [mounted, setMounted] = useState(false);

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

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    // react-calendly handles loading assets internally

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-5xl mx-4 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 ease-out animate-slide-up overflow-hidden">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 z-10 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Calendly Inline Widget */}
                <div className="w-full" style={{ minHeight: 620 }}>
                    <InlineWidget
                        url={calendlyUrl}
                        styles={{ height: "620px" }}
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
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
        </div>,
        document.body
    );
};
