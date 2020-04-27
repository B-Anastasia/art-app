import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const arr = ["Main", "Drawings", "Paintings", "Photographs", "People"];

  const items = arr.map((value, index) => {
    if (value === "Main") {
      return (
        <li className="header__menu--item" key={index}>
          <Link to="/" className="header__menu--link un">
            {value}
          </Link>
        </li>
      );
    }
    const url = "/" + value.toLowerCase().trim() + "/";
    return (
      <li className="header__menu--item" key={index}>
        <Link to={url} className="header__menu--link un">
          {value}
        </Link>
      </li>
    );
  });
  return (
    <div className="header__menu">
      <ul className="header__menu--list">{items}</ul>
    </div>
  );
};

export default HeaderMenu;
