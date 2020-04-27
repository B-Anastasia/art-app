import React from "react";
import { HeaderMenu, HeaderLogo, ToggleMenu } from "./index";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <ToggleMenu />
      <HeaderMenu />
    </div>
  );
};

export default Header;
