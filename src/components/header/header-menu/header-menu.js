import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderMenu = ({ onActive }) => {
  const arr = ["Main", "Drawings", "Paintings", "Photographs", "People"];

  const items = arr.map((value, index) => {
    if (value === "Main") {
      return (
        <li className="header__menu--item" key={index}>
          <Link
            to="/"
            className="header__menu--link un"
            onClick={() => onActive()}
          >
            {value}
          </Link>
        </li>
      );
    }
    const url = "/" + value.toLowerCase().trim() + "/";
    return (
      <li className="header__menu--item" key={index}>
        <Link
          to={url}
          className="header__menu--link un"
          onClick={() => onActive()}
        >
          {value}
        </Link>
      </li>
    );
  });
  return <ul className="header__menu--list">{items}</ul>;
};

HeaderMenu.propTypes = {
  onActive: PropTypes.func.isRequired,
};

export default HeaderMenu;
