import React from "react";
import Image from "next/image";
import rotaterSvg from "../../assets/rotater.svg";
import recurringRevenue from "../../assets/recurring-revenue.svg";
import clientRetention from "../../assets/client-retention.svg";
import easySetup from "../../assets/easy-setup.svg";
import expandOffering from "../../assets/expand-offering.svg";
import { Inter } from "next/font/google";
import { div } from "framer-motion/client";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    style: ["normal", "italic"],
});

export const KeyBenefits = () => {
    const benefits = [
        {
            icon: recurringRevenue,
            title: "RECURRING REVENUE",
            description: "Consistently grow your earnings month-on-month."
        },
        {
            icon: clientRetention,
            title: "CLIENT RETENTION",
            description: "Offer tangible value to clients, keeping them satisfied and loyal."
        },
        {
            icon: expandOffering,
            title: "EXPAND YOUR OFFERING",
            description: "Differentiate your services by offering cutting-edge AI technology."
        },
        {
            icon: easySetup,
            title: "EASY SETUP AND INTEGRATION",
            description: "Seamless onboarding and straightforward management."
        },
    ];

    return (
        <section className="pt-6 lg:pt-10 pb-4 lg:pb-6 bg-white">
            <div className="max-w-[1353px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="text-center mb-6">
                    <p className="text-[28px] lg:text-[48px] leading-[100%] font-normal text-[#FF4206]  Cairo">
                        KEY BENEFITS FOR
                    </p>
                    <p className="text-[28px] lg:text-[48px] leading-[100%] font-bold text-black">
                        RESELLERS
                    </p>
                </div>
                <div className="relative max-w-[1250px] mx-auto">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
                        <div className="w-20 h-20 lg:w-24 lg:h-24">
                            <Image
                                src={rotaterSvg}
                                alt="Network Connection"
                                width={88}
                                height={88}
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    <section className="w-full py-10 sm:py-14 lg:py-20">
                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 relative">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg ${index % 2 === 0
                                                ? "bg-gradient-to-l from-[#F7F7F7] to-white" // First column (right → left)
                                                : "bg-gradient-to-r from-[#F7F7F7] to-white" // Second column (left → right)
                                            }`}
                                    >
                                        <div
                                            className={`py-6 lg:py-10 text-center mx-auto ${index === benefits.length - 1
                                                    ? "max-w-[338px]"
                                                    : "max-w-[296px]"
                                                }`}
                                        >
                                            <div className="flex justify-center mb-4">
                                                <Image
                                                    src={benefit.icon}
                                                    alt={benefit.title}
                                                    width={60}
                                                    height={60}
                                                    className="w-[60px] h-[60px]"
                                                />
                                            </div>
                                            <h3 className="text-[16px] lg:text-[24px] font-bold text-black mb-3 Cairo">
                                                {benefit.title}
                                            </h3>
                                            <p
                                                className={`text-[12px] lg:text-[16px] text-[#000000CC] font-medium leading-[22px] ${inter.className}`}
                                            >
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>



                </div>
            </div>
        </section>
    );
};
