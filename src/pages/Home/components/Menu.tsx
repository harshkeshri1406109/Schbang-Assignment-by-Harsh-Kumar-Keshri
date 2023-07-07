import React, { useState } from "react";
import Logo from "./Logo";
import MenuText from "./MenuText";
import { menuOptions } from "../static-data/Menu";
import { Button } from "../../../components/Button";

const Menu = () => {
  const [option, setOption] = useState<number>(0);

  return (
    <div className="w-full flex flex-row py-[2rem] px-[10.31rem] box-border items-center justify-between text-[0.88rem] text-black">
      <Logo className="text-[1.5rem]" />
      <div className="flex flex-row items-start justify-start gap-[4rem] ">
        {menuOptions.map((title, i) => (
          <MenuText
            key={`${title}-${i}`}
            active={i == option}
            onClick={() => {
              setOption(i);
            }}
          >
            {title}
          </MenuText>
        ))}
      </div>
      <div className="flex flex-row items-start justify-start">
        <Button>Login</Button>
        <Button filled>Sign Up</Button>
      </div>
    </div>
  );
};

export default Menu;
