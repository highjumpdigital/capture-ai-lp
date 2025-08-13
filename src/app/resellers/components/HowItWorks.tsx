import React, { useState } from "react";
import Image from "next/image";
import { FilledButton } from "../../_component/FilledButton";
import { Inter } from "next/font/google";
import signUp from "../../assets/sign-up.svg";
import chatbotIntroduce from "../../assets/chatbot-introduce.svg";
import manageAndMonitor from "../../assets/manage-and-monitor.svg";
import earnMonthly from "../../assets/earn-monthly.svg";
import stepBg from "../../assets/step-bg.png";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    style: ["normal", "italic"],
});

export const HowItWorks = () => {
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null); // No default active

    const steps = [
        {
            number: "01",
            icon: signUp,
            title: "Sign up for the Capture AI reseller program.",
        },
        {
            number: "02",
            icon: chatbotIntroduce,
            title: "Introduce your clients to the power of Capture AI chatbots.",
        },
        {
            number: "03",
            icon: manageAndMonitor,
            title: "Manage and monitor client performance through your dedicated reseller dashboard.",
        },
        {
            number: "04",
            icon: earnMonthly,
            title: "Earn monthly commissions and bonus incentives paid directly to you.",
        },
    ];

    return (
        <section className="py-6 lg:py-12 bg-[#F9F9F9]">
            <div className="max-w-[1353px] mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px] sm:text-[48px] lg:text-[108px] font-bold text-[#000000CC] Cairo">
                        HOW IT WORKS
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 justify-items-center">
    {steps.map((step, index) => {
        const isActive = hoveredIndex === index;
        return (
            <div
                key={index}
                className={`relative flex flex-col items-center justify-center bg-no-repeat bg-center bg-contain transition-all duration-300 cursor-pointer 
                    border-b-4 border-transparent rounded-[30px] 
                    ${isActive ? "border-b-[#FF4206]" : ""}`}
                style={{
                    backgroundImage: `url(${stepBg.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    aspectRatio: "1/1.25",
                    maxHeight: "352px",
                    width: "312px",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Step Number */}
                <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 absolute top-0 left-2 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-[32px]
                        ${isActive ? "bg-[#FF4206]" : "bg-[#333333]"}`}
                >
                    {step.number}
                </div>

                {/* Icon */}
                <div className="mt-10 mb-4">
                    <Image
                        src={step.icon}
                        alt={`Step ${step.number}`}
                        width={70}
                        height={70}
                        className="w-[50px] sm:w-[70px] h-auto"
                    />
                </div>

                {/* Title */}
                <h3 className="text-center px-4 text-[16px] sm:text-[20px] font-normal text-[#000000CC] leading-[1.4] Cairo">
                    {step.title}
                </h3>
            </div>
        );
    })}
</div>


                {/* Description */}
                <div className="text-center mb-12">
                    <p
                        className={`text-[16px] sm:text-[18px] lg:text-[26px] text-black leading-[150%] max-w-[1086px] font-medium mx-auto ${inter.className} tracking-[0.48px]`}
                    >
                        Join the <span className="font-bold">Capture AI Reseller Program</span> today and empower your
                        clients while building lasting success for your own business.
                    </p>
                </div>

                {/* Button */}
                <div className="text-center flex justify-center">
                    <FilledButton
                        buttonTitle="GET STARTED AS A RESELLER NOW"
                        className="h-10 w-[298px] px-8 bg-[#FF4206] rounded-lg font-bold text-[14px] sm:text-[16px] text-white"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </section>
    );
};
