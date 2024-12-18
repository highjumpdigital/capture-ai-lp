import React from "react";
export const FilledButton: React.FC<{
  className: string;
  buttonTitle: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  titleClassName?: string;
}> = ({ className = "", buttonTitle, onClick, titleClassName = "" }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-lg cursor-pointer ${
        className.includes("bg-black")
          ? ""
          : ""
      } ${className.includes("bg-") ? className : `bg-primaryColor ${className}`}`}
      onClick={onClick}
    >
      <span className={`   ${titleClassName} sofia`}>
        {buttonTitle}
      </span>
    </div>
  );
};