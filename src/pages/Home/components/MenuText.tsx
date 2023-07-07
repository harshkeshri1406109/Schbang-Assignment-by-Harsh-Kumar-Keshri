import React, { ReactNode } from "react";

const MenuText = ({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <b
      className={`relative leading-[120%] ${
        active ? "text-gray-100" : "text-gray-300"
      } hover:text-gray-100 hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </b>
  );
};

export default MenuText;
