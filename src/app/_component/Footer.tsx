"use client";

import Logo_AI_Powered from "@/app/assets/logo_ai_powered.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { constants } from '../_common';
import Link from "next/link";
import { Inter } from "next/font/google";
import Chatbot from "./Chatbot";
import linkedIn from "../assets/linkedin_footer.svg"
import facebook from "../assets/fb_footer.svg"
import insta from "../assets/insta_footer.svg"
import x from "../assets/x_footer.svg"
import youtube from "../assets/youtube_footer.svg"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const socialLinks = [
  { icon: x, url: "https://x.com/CaptureAI392628", alt: "X (Twitter)" },
  { icon: youtube, url: "https://www.youtube.com/@CaptureAI", alt: "YouTube" },
  { icon: facebook, url: "https://www.facebook.com/profile.php?id=61567631743624", alt: "Facebook" },
  { icon: linkedIn, url: "https://www.linkedin.com/company/cptr-ai/", alt: "LinkedIn" },
  { icon: insta, url: "https://www.instagram.com/cptr.ai/", alt: "Instagram" },
];

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMiddleScreen, setIsMiddleScreen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const checkDimensions = () => {
      setIsMiddleScreen(window.innerHeight < 850);
      setIsWideScreen(window.innerWidth < 768);
    };

    checkDimensions(); // Initial check
    window.addEventListener("resize", checkDimensions);

    return () => window.removeEventListener("resize", checkDimensions);
  }, []);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // const {
  //   footerRoutes: { about, privacy, support, terms },
  // } = constants;
  return (
    <div
      className={`flex    ${isMiddleScreen
        ? "lg:px-[65px] px-[20px] py-4  md:py-8"
        : "lg:px-[65px] px-[20px] py-6  md:py-10"
        }   lg:flex justify-between items-center w-full  bg-black  `}
    >
      <div className="max-w-[1600px] py-8 mx-auto flex sm:flex-row flex-col justify-between items-center w-full">
        <div
          className={`flex flex-col justify-between  sm:space-y-4 md:space-y-0 sm:gap-4 ${isMiddleScreen && isWideScreen
            ? "h-[80px] items-center mb-5"
            : "h-[100px]"
            } `}
        >
          <div className="flex  justify-center items-center sm:justify-start  ">
            <Link href="https://cptr.ai/" passHref>
              <Image
                className="w-[600px] h-auto md:h-auto cursor-pointer object-contain"
                src={Logo_AI_Powered}
                alt=""
              />
            </Link>
          </div>
          <div
            className={`text-[#FFFFFFCC] text-xl font-semibold w-full flex justify-start items-end leading-6 lg:max-w-[400px] ${inter.className} tracking-[0.08px]`}
          >
            {`© ${currentYear} Capture AI. All Rights Reserved.`}
          </div>
        </div>

        {/* Right Section - Social Icons and Navigation Links */}
        <div className="flex flex-col items-end space-y-8">
          {/* Social Media Icons - Top Row */}
          <div className="flex space-x-3">
            {socialLinks.map(({ icon, url, alt }, index) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          {/* Navigation Links - Bottom Row */}
          <div className="flex space-x-10 text-gray-200 text-sm">
            <Link
              href="https://cptr.ai/terms-of-service"
              className="hover:text-gray-200 transition-colors text-xl font-extralight"
              target="_blank"
            >
              Terms
            </Link>
            <Link
              href="https://cptr.ai/privacy-policy"
              className="hover:text-gray-200 transition-colors text-xl font-extralight"
              target="_blank"
            >
              Privacy
            </Link>
            <Link
              href="https://cptr.ai/support"
              className="hover:text-gray-200 transition-colors text-xl font-extralight"
              target="_blank"
            >
              Support
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-5  sm:hidden">
          <Link
            href="https://cptr.ai/terms-of-service"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${isMiddleScreen && isWideScreen ? "text-center" : ""
              }`}
            target="blank"
          >
            Terms
          </Link>
          <Link
            href="https://cptr.ai/privacy-policy"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${isMiddleScreen && isWideScreen ? "text-center" : ""
              }`}
            target="blank"
          >
            Privacy
          </Link>
          <Link
            href="https://cptr.ai/support"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${isMiddleScreen && isWideScreen ? "text-center" : "text-left"
              }`}

            target="blank"
          // onClick={(e) => {
          //   e.preventDefault();
          //   openSupportEmail();
          // }}
          >
            Support
          </Link>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};
