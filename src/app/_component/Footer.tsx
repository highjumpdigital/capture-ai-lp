"use client";

import Logo from "@/app/assets/header/Group 73.svg";
import openAi from "@/app/assets/open_ai.svg";
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
        ? "lg:px-[65px] px-[20px] py-6  md:py-4"
        : "lg:px-[65px] px-[20px] py-6  md:py-5"
        }   lg:flex justify-between items-center w-full  bg-black  `}
    >
      <div className="max-w-[1312px] -mt-2 md:py-5 mx-auto flex sm:flex-row flex-col justify-between items-center w-full">
        <div
          className={`flex flex-col justify-between  sm:space-y-2 md:space-y-0 sm:gap-2 ${isMiddleScreen && isWideScreen
            ? "h-[60px] items-center mb-5"
            : "h-[80px]"
            } `}
        >
          <div className="flex  justify-center items-center sm:justify-start">
            <Link href="https://cptr.ai/" passHref>
              <Image
                className="h-10 md:h-auto max-h-[100vh] cursor-pointer object-contain"
                src={Logo}
                alt=""
              />
            </Link>
            <h1 className={`text-white text-[12px] sm:text-sm font-extralight ml-6 mt-2 ${inter.className}`}>Powered by</h1><span className="ml-0.5 mt-1">
              <Image src={openAi} alt="open-ai" />
            </span>
          </div>
          <div
            className={`text-[#FFFFFFCC] text-base font-semibold w-full flex justify-center sm:justify-start items-end leading-6 lg:max-w-[400px] ${inter.className} tracking-[0.08px]`}
          >
            {`© ${currentYear} Capture AI. All Rights Reserved.`}
          </div>
        </div>

        {/* Right Section - Social Icons and Navigation Links */}
        <div className="flex flex-col items-center justify-end space-y-0 md:space-y-[10px] mt-8 -mb-3 md:mb-7">
          {/* Social Media Icons - Top Row */}
          <div className="flex space-x-0 md:space-x-1">
            {socialLinks.map(({ icon, url, alt }, index) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-10 h-10 md:ml-6 flex items-start justify-end transition-all duration-200 hover:scale-110"
              >
                <Image
                  src={icon}
                  alt={alt}
                  className="object-contain w-[22px] h-[22px]"
                />
              </a>
            ))}
          </div>

          {/* Navigation Links - Bottom Row */}
          <div className={`flex space-x-24  sm:space-x-8 text-white text-base ${inter.className} pt-1.5 ml-3`}>
            <Link
              href="https://cptr.ai/terms-of-service"
              className="hover:text-[#FF4206] transition-colors duration-300 text-base font-normal"
              target="_blank"
            >
              Terms
            </Link>
            <Link
              href="https://cptr.ai/privacy-policy"
              className="hover:text-[#FF4206] transition-colors duration-300 text-base font-normal"
              target="_blank"
            >
              Privacy
            </Link>
            <Link
              href="https://cptr.ai/support"
              className="hover:text-[#FF4206] transition-colors duration-300 text-base font-normal"
              target="_blank"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};
