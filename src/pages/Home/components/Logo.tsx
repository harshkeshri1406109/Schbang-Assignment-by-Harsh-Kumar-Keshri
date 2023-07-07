import React from "react";
import { LogoProps } from "../interfaces/Logo.interface";

function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[1rem] ${className}`}
    >
      <img
        className="relative w-[2.5rem] h-[2.5rem]"
        alt=""
        src="/vector1.svg"
      />
      <div className="relative leading-[2.5rem] font-black">Travlog</div>
    </div>
  );
}

export default Logo;
