import React from "react";

const ToggleMenu = ({ onActive }) => {
  return (
    <div className="toggle-menu__button" onClick={() => onActive()}>
      <div className="toggle-menu__line" />
      <div className="toggle-menu__line" />
      <div className="toggle-menu__line" />
    </div>
  );
};

export default ToggleMenu;
