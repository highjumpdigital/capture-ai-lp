import Logo from "@/app/assets/Logo.png";
import Image from "next/image";
import React from "react";
// import { constants } from '../_common';
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
export const Footer: React.FC = () => {
  // const {
  //   footerRoutes: { about, privacy, support, terms },
  // } = constants;
  return (
    <div className="flex flex-col bg-black px-6 md:px-12 py-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center   pl-5 lg:pl-0  justify-between w-full space-y-4 md:space-y-0">
        <div className="flex  flex-col gap-4 lg:gap-8 lg:flex-row      ">
          <Image
            className="h-10 md:h-auto max-h-[100vh] cursor-pointer object-contain"
            src={Logo}
            alt=""
          />
          {/* <div className="flex flex-row items-center space-x-10 space-y-2 md:space-y-0 text-white">
          {[`|`, about, support, privacy, terms].map(
            (item: string, index: number) => (
              <span
                key={index}
                className={`text-center ${index !== 0 && `cursor-pointer`}`}
              >
                {item}
              </span>
            ),
          )}
        </div> */}
        </div>
      </div>
      <div className="flex justify-between   py-10 items-center">
        <div className="text-[#FFFFFFCC] text-sm  max-w-[300px]  text-start  md:text-base">
          {`© 2024 CAPTURE AI, by High Jump Digital.
All Rights Reserved.`}
        </div>
        <div className="flex   justify-start lg:justify-center space-x-3">
          {[GrFacebookOption, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center  rounded-[5px] bg-[#FF4206] "
              key={index}
            >
              <Icon size={15} fill="black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};