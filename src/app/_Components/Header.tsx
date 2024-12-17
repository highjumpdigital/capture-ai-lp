import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import { FilledButton } from "./FilledButton";
import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const sofiaSans = Sofia_Sans_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="flex justify-between items-center w-full lg:hidden p-5 h-20 bg-black">
        <GiHamburgerMenu
          fill="white"
          size={30}
          onClick={toggleMobileMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Side Section for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-black text-white z-50 transition-transform duration-300 ${
          isMobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <Image src={Logo} alt="Logo" width={150} height={15} />
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="font-bold text-white cursor-pointer">FEATURES</div>
          <div className="font-bold text-white cursor-pointer">HOW IT WORKS</div>
          <div className="font-bold text-white cursor-pointer">SOLUTIONS</div>
          <div className="font-bold text-white cursor-pointer">FAQ'S</div>
          <div className="font-bold text-[#FF4206] cursor-pointer">LOG IN</div>
        </div>
      </div>

      {/* Desktop Header */}
      <div
        className={`flex px-[20px] lg:px-[100px] hidden lg:flex justify-between items-center w-full h-20 bg-black ${sofiaSans.className}`}
      >
        <div>
          <Image src={Logo} alt="Logo" width={190} height={19} />
        </div>
        <div className="flex gap-5">
          <div className="font-bold text-4 leading-4 text-white">FEATURES</div>
          <div className="font-bold text-4 leading-4 text-white">HOW IT WORKS</div>
          <div className="font-bold text-4 leading-4 text-white">SOLUTIONS</div>
          <div className="font-bold text-4 leading-4 text-white">FAQ'S</div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div className="text-[#FF4206] font-bold text-4 leading-4">LOG IN</div>
          <FilledButton
            buttonTitle="GET STARTED"
            className="h-10 w-[141px] bg-[#FF4206] rounded-[8px] font-bold text-4 leading-4 text-white"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};
