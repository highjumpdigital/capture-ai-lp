import Image from "next/image";
import { FilledButton } from "./FilledButton";
import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { constants } from "./constants";
import Logo from "../assets/header/Group 73.svg";
import Logo2 from "../assets/logo/logo.svg"


const sofiaSans = Sofia_Sans_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleSignIn = () => {
    window.location.href = "https://chatbot-v0-frontend-development.up.railway.app/sign-in";
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="flex justify-between items-center w-full lg:hidden p-5 h-20 bg-black fixed top-0 left-0 z-40">
    
        <Image src={Logo2} alt="Logo" className="w-[50px]" />
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            fill="white"
            size={30}
            onClick={toggleMobileMenu}
            className="cursor-pointer"
          />
        </div>
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
        <div className="flex flex-col gap-8 p-5">
          <div 
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              toggleMobileMenu();
            }}
            className="font-bold text-white cursor-pointer">
            {constants.header.FEATURES}
          </div>
          <div className="font-bold text-white cursor-pointer"
          
          onClick={() => {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            toggleMobileMenu();
          }}
          
          >
            {constants.header.howitwork}
            
            </div>
          <div 
            onClick={() => {
              document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              toggleMobileMenu();
            }}
            className="font-bold text-white cursor-pointer">
            {constants.header.SOLUTIONS}

            
          </div>
          <div 
            onClick={() => {
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              toggleMobileMenu();
            }}
            className="font-bold text-white cursor-pointer">
            {constants.header.FAQ}
            
          </div>
          <div 
            onClick={handleSignIn}
            className="font-bold text-[#FF4206] cursor-pointer">
            {constants.header.login}
          </div>
          <FilledButton
            buttonTitle="GET STARTED"
            className="h-10 w-[141px] bg-[#FF4206] rounded-[8px] font-bold text-4 leading-4 text-white"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Desktop Header */}
      <div
        className={`flex px-[20px] lg:px-[100px] hidden lg:flex justify-between items-center w-full h-20 bg-black fixed top-0 left-0 z-40 ${sofiaSans.className}`}
      >
        <div>
          <Image src={Logo} alt="Logo" width={190} height={19} />
        </div>
        <div className="flex gap-10">
          <div 
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-bold text-4 leading-4 text-white cursor-pointer">
            {constants.header.FEATURES}
            
          </div>
          <div className="font-bold text-4 leading-4 text-white cursor-pointer"
          
          onClick={() => {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
          
          >
            {constants.header.howitwork}

            
            </div>
          <div 
            onClick={() => {
              document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-bold text-4 leading-4 text-white cursor-pointer ">
            {constants.header.SOLUTIONS}
            
          </div>
          <div 
            onClick={() => {
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-bold text-4 leading-4 text-white cursor-pointer">
            {constants.header.FAQ}
            
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div 
            onClick={handleSignIn}
            className="text-[#FF4206] font-bold text-4 leading-4 cursor-pointer">
            {constants.header.login}
          </div>
          <FilledButton
            buttonTitle={constants.buttons.getStarted}
            className="h-10 w-[141px] bg-[#FF4206] rounded-[8px] font-bold text-4 leading-4 text-white"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};
