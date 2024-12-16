import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import { FilledButton } from "./FilledButton";
import { Sofia_Sans_Semi_Condensed } from "next/font/google";

const sofiaSans = Sofia_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Header = () => {
  return (
    <div className={`flex px-[100px] justify-between items-center w-full h-20 bg-black ${sofiaSans.className}`}>
      <div>
        <Image src={Logo} alt="Logo" width={190} height={19} />
      </div>
      <div className="flex gap-5">
        <div className="font-bold text-4 leading-4 text-white">FEATURES</div>
        <div className="font-bold text-4 leading-4 text-white">
          HOW IT WORKS
        </div>
        <div className="font-bold text-4 leading-4 text-white">SOLUTIONS</div>
        <div className="font-bold text-4 leading-4 text-white">FAQ'S</div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="text-[#FF4206] font-bold text-4 leading-4">
          LOG IN
        </div>
        <FilledButton
          buttonTitle="GET STARTED"
          className="h-10 w-[141px] rounded-[8px] font-bold text-4 leading-4 text-white"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
