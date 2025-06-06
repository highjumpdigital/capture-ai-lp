import Logo from "@/app/assets/header/Group 73.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { constants } from '../_common';
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { Icon: GrFacebookOption, url: "https://www.facebook.com/profile.php?id=61567631743624" },
  { Icon: FaInstagram, url: "https://www.instagram.com/cptr.ai/" },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/cptr-ai/" },
  { Icon: FaYoutube, url: "https://www.youtube.com/@CaptureAI" },
  { Icon: FaXTwitter, url: "https://x.com/CaptureAI392628" },
];

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <div className="flex flex-col bg-black  px-5 lg:px-[0px] py-6 md:py-12 ">
      <div className="max-w-[1311px] w-full  lg:px-[65px] 2xl:px-0  mx-auto">
      <div className="flex flex-col md:flex-row md:items-center    justify-between w-full space-y-4 md:space-y-0">
        <div className="flex  flex-col gap-4 lg:gap-8 lg:flex-row      ">
          <Image
            className="h-10 md:h-auto max-h-[100vh] cursor-pointer object-contain"
            src={Logo}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-start lg:justify-between   gap-5  py-10 items-center">
        <div className="text-[#FFFFFFCC] text-[16px]    leading-[24px] font-bold  lg:max-w-[330px]  w-full flex justify-start items-end Inter  text-start  md:text-base">
          {`© ${currentYear} Capture AI. All Rights Reserved.`}
        </div>
        <div className="flex   justify-start w-full  lg:justify-end space-x-3">
          {socialLinks.map(({ Icon, url }, index) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[5px] bg-[#FF4206] "
              >
                <Icon size={15} fill="black" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
