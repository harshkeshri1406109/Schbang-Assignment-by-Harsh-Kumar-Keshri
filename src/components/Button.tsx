import React, { ReactNode } from "react";

export const Button = ({
  filled,
  children,
}: {
  filled?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`rounded-81xl ${
        filled ? "bg-slateblue text-whitesmoke" : "bg-white text-gray-100"
      } flex flex-row py-[1rem] px-[2rem] items-start justify-start hover:cursor-pointer hover:opacity-50`}
    >
      <b className="relative leading-[120%]">{children}</b>
    </div>
  );
};
