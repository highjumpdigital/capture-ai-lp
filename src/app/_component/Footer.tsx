import Logo from "@/app/assets/header/Group 73.svg";
import React, { useEffect, useState } from "react";
import { openSupportEmail } from "@/app/_component/utils/support";
import Image from "next/image";
// import { constants } from '../_common';
import { GrFacebookOption } from "react-icons/gr";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const socialLinks = [
  {
    Icon: GrFacebookOption,
    url: "https://www.facebook.com/profile.php?id=61567631743624",
  },
  { Icon: FaInstagram, url: "https://www.instagram.com/cptr.ai/" },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/cptr-ai/" },
  { Icon: FaYoutube, url: "https://www.youtube.com/@CaptureAI" },
  { Icon: FaXTwitter, url: "https://x.com/CaptureAI392628" },
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
      className={`flex    ${
        isMiddleScreen
          ? "lg:px-[65px] px-[20px] py-4  md:py-8"
          : "lg:px-[65px] px-[20px] py-6  md:py-10"
      }   lg:flex justify-between items-center w-full  bg-black  `}
    >
      <div className="max-w-[1312px] mx-auto flex sm:flex-row flex-col justify-between items-center w-full">
        <div
          className={`flex flex-col justify-between  sm:space-y-4 md:space-y-0 sm:gap-4 ${
            isMiddleScreen && isWideScreen
              ? "h-[80px] items-center mb-5"
              : "h-[110px]"
          } `}
        >
          <div className="flex  justify-center items-center sm:justify-start  ">
            <Link href="https://cptr.ai/" passHref>
              <Image
                className="h-10 md:h-auto max-h-[100vh] cursor-pointer object-contain"
                src={Logo}
                alt=""
              />
            </Link>
          </div>
         <div
            className={`text-[#FFFFFFCC] text-base font-normal w-full flex justify-start items-end leading-6 lg:max-w-[330px] ${inter.className} tracking-[0.08px]`}
          >
            {`© ${currentYear} Capture AI. All Rights Reserved.`}
          </div>
        </div>

        <div className="  hidden  sm:block ">
          <div
            className={`flex flex-col justify-between ${
              isMiddleScreen && isWideScreen ? "items-center" : ""
            }  h-[120px]`}
          >
            <h3
              className={`text-[20px] font-bold text-[#FF4206] ${inter.className} tracking-[0.2px]`}
            >
              Quick Links
            </h3>
            <div className="flex flex-col space-y-1">
              <Link
                href="https://cptr.ai/terms-of-service"
                className={`text-[#FFFFFF] text-base font-normal Inter ${isMiddleScreen && isWideScreen ? "text-center" : ""}`}
                target="blank"
              >
                Terms
              </Link>
              <Link
                href="https://cptr.ai/privacy-policy"
                className={`text-[#FFFFFF] text-base font-normal Inter ${isMiddleScreen && isWideScreen ? "text-center" : ""}`}
                target="blank"
              >
                Privacy
              </Link>
              <Link
                href="https://cptr.ai/support"
                className={`text-[#FFFFFF] text-base font-normal Inter ${
                  isMiddleScreen && isWideScreen ? "text-center" : "text-left"
                }`}
                target="blank"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between sm:gap-5 py-3 items-center">
          <div
            className={`flex justify-start lg:justify-center space-x-3 ${
              isMiddleScreen && isWideScreen ? "h-[40px]" : "sm:h-[120px]"
            } items-end`}
          >
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[5px] bg-[#FF4206] ">
                  <Icon size={15} fill="black" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-5  sm:hidden">
          <Link
            href="https://cptr.ai/terms-of-service"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${
              isMiddleScreen && isWideScreen ? "text-center" : ""
            }`}
            target="blank"
          >
            Terms
          </Link>
          <Link
            href="https://cptr.ai/privacy-policy"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${
              isMiddleScreen && isWideScreen ? "text-center" : ""
            }`}
            target="blank"
          >
            Privacy
          </Link>
          <Link
            href="https://cptr.ai/support"
            className={`text-[#FFFFFF]  text-[16px] font-normal ${
              isMiddleScreen && isWideScreen ? "text-center" : "text-left"
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
    </div>
  );
};
