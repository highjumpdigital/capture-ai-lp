import React, { useRef, useEffect, useState } from "react";

export const FilledButton: React.FC<{
  className: string;
  buttonTitle: string;
  hoverText?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  titleClassName?: string;
}> = ({ className = "", buttonTitle, hoverText, onClick, titleClassName = "" }) => {
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonHeight(buttonRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`group flex items-center justify-center rounded-lg cursor-pointer transform transition-all duration-200 hover:shadow-lg active:scale-95 hover:shadow-inner hover:brightness-95 relative before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-200 before:opacity-0 hover:before:opacity-100 before:bg-black/5 ${
        className.includes("bg-black") ? "" : ""
      } ${
        className.includes("bg-")
          ? className
          : `bg-primaryColor ${className}`
      }`}
      onClick={onClick}
    >
      <span className={`relative overflow-hidden w-full flex items-center justify-center ${titleClassName} sofia`}>
        <span
          className="block transform translate-y-0 group-hover:-translate-y-[100%] transition-transform duration-300 flex items-center justify-center w-full"
          style={{ height: buttonHeight ? `${buttonHeight}px` : 'auto' }}
        >
          {buttonTitle}
        </span>
        <span
          className="block absolute left-0 top-[100%] transform translate-y-0 group-hover:-translate-y-[100%] transition-transform duration-300 flex items-center justify-center w-full"
          style={{ height: buttonHeight ? `${buttonHeight}px` : 'auto' }}
        >
          {hoverText || buttonTitle}
        </span>
      </span>
    </div>
  );
};