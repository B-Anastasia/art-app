import React from "react";
import PropTypes from "prop-types";

const ToggleMenu = ({ onActive }) => {
  return (
    <div className="toggle-menu__button" onClick={() => onActive()}>
      <div className="toggle-menu__line" />
      <div className="toggle-menu__line" />
      <div className="toggle-menu__line" />
    </div>
  );
};

ToggleMenu.propTypes = {
  onActive: PropTypes.func.isRequired,
};

export default ToggleMenu;
