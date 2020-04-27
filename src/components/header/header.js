import React, { useState } from "react";
import { HeaderMenu, HeaderLogo, ToggleMenu } from "./index";

const Header = () => {
  const [wrapperRef] = useState(React.createRef());
  function onActive() {
    const wrapper = wrapperRef.current;
    wrapper.classList.toggle("hide-menu");
  }
  return (
    <div className="header">
      <HeaderLogo />
      <ToggleMenu onActive={onActive} />
      <div className="header__menu hide-menu" ref={wrapperRef}>
        <HeaderMenu onActive={onActive} />
      </div>
    </div>
  );
};

export default Header;
