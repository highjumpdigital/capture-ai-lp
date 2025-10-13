"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FilledButton } from "./FilledButton";
import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { constants, AUTH_URLS } from "../_common/constants";
import Logo from "../assets/header/Group 73.svg";
import Logo2 from "../assets/logo/logo.svg";
import { useRouter, usePathname } from "next/navigation";

const sofiaSans = Sofia_Sans_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleSignIn = () => {
    window.location.href = AUTH_URLS.SIGN_IN;
  };

  const navigateToSection = (sectionId: string) => {
    if (pathname === '/') {
      // On homepage: smooth scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On other pages: navigate to homepage with hash using page refresh
      window.location.href = `/#${sectionId}`;
    }
  };

  // Function to check if a section is active
  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // Function to check if resellers page is active
  const isResellersActive = () => {
    return pathname === '/resellers' || pathname.startsWith('/resellers/');
  };

  // Function to check if examples page is active
  const isExamplesActive = () => {
    return pathname === '/examples' || pathname.startsWith('/examples/');
  };

  // Function to check if book demo page is active
  const isBookDemoActive = () => {
    return pathname === '/book-demo';
  };

  // Scroll event listener to detect active section
  React.useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const sections = ['features', 'work', 'solutions', 'faq'];
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport
        
        let closestSection = '';
        let closestDistance = Infinity;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            const sectionMiddle = offsetTop + offsetHeight / 2;
            const distance = Math.abs(scrollPosition - sectionMiddle);
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = sectionId;
            }
          }
        }
        
        setActiveSection(closestSection);
      }
    };

    // Set initial active section based on URL hash
    if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['features', 'work', 'solutions', 'faq'].includes(hash)) {
        setActiveSection(hash);
        // Scroll to the section after a brief delay
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

 

  return (
    <>
      {/* Mobile Header */}
      <div className="flex justify-between items-center w-full max-w-[1312px] lg:hidden p-5 h-20 bg-black fixed top-0 left-0 z-40">
        <div 
          onClick={() => { window.location.href = '/'; }}
          className="cursor-pointer"
        >
          <Image src={Logo2} alt="Logo" className="w-[50px]" />
        </div>
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
        className={`fixed top-0 right-0 h-full w-[250px] bg-black text-white z-50 transition-transform duration-300 ${
          isMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <div 
            onClick={() => { window.location.href = '/'; }}
            className="cursor-pointer"
          >
            <Image src={Logo} alt="Logo" width={150} height={15} />
          </div>
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <div className="flex flex-col gap-8 p-5">
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                navigateToSection("features");
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isActiveSection("features") ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.FEATURES}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                navigateToSection("work");
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isActiveSection("work") ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.howitwork}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                navigateToSection("solutions");
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isActiveSection("solutions") ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.SOLUTIONS}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                navigateToSection("faq");
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isActiveSection("faq") ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.FAQ}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                window.location.href = '/resellers';
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isResellersActive() ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.RESELLERS}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                window.location.href = '/examples';
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isExamplesActive() ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.EXAMPLES}
          </div>
          <div
            onClick={() => {
              toggleMobileMenu();
              setTimeout(() => {
                window.location.href = '/book-demo';
              }, 300);
            }}
            className={`font-bold cursor-pointer transition-colors duration-300 ${
              isBookDemoActive() ? "text-[#FF4206]" : "text-white"
            }`}
          >
            {constants.header.BOOKDEMO}
          </div>
          <div
            onClick={handleSignIn}
            className="font-bold text-[#FF4206] cursor-pointer"
          >
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
        className={`px-[20px] lg:px-[65px] hidden lg:flex justify-between items-center w-full h-20 bg-black fixed top-0 left-0 z-40 ${sofiaSans.className}`}
      >
        <div className="w-full max-w-[1312px] mx-auto lg:flex justify-between items-center">
          <div 
            onClick={() => { window.location.href = '/'; }}
            className="cursor-pointer"
          >
            <Image src={Logo} alt="Logo" width={190} height={19} />
          </div>
          <div className="flex gap-4 xl:gap-10">
            <div
              onClick={() => navigateToSection("features")}
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isActiveSection("features") 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
            >
              {constants.header.FEATURES}
              {isActiveSection("features") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
            <div
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isActiveSection("work") 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
              onClick={() => navigateToSection("work")}
            >
              {constants.header.howitwork}
              {isActiveSection("work") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
            <div
              onClick={() => navigateToSection("solutions")}
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isActiveSection("solutions") 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
            >
              {constants.header.SOLUTIONS}
              {isActiveSection("solutions") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
            <div
              onClick={() => navigateToSection("faq")}
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isActiveSection("faq") 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
            >
              {constants.header.FAQ}
              {isActiveSection("faq") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
            <div
              onClick={() => { window.location.href = '/resellers'; }}
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isResellersActive() 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
            >
              {constants.header.RESELLERS}
              {isResellersActive() && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
            <div
              onClick={() => { window.location.href = '/examples'; }}
              className={`font-bold text-4 leading-8 cursor-pointer relative  transition-colors duration-300 ${
                isExamplesActive() 
                  ? "text-[#FF4206]" 
                  : "text-white hover:text-[#FF4206]"
              }`}
            >
              {constants.header.EXAMPLES}
              {isExamplesActive() && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4206]"></div>
              )}
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div
              onClick={handleSignIn}
              className="text-[#FF4206] font-bold text-4 leading-4 cursor-pointer"
            >
              {constants.header.login}
            </div>
            <FilledButton
              buttonTitle={constants.buttons.getStarted}
              className="h-10 w-[141px] bg-[#FF4206] rounded-[8px] font-bold text-4 leading-4 text-white ml-8"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};
