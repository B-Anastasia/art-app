import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h2>
            <span className="first">Art lives</span>
            <span className="secondary">forever</span>
          </h2>
        </Link>
      </div>
      <div className="header__menu">
        <ul className="header__menu--list">
          <li className="header__menu--item">
            <Link to="/" className="header__menu--link un">
              Main
            </Link>
          </li>
          <li className="header__menu--item">
            <Link to="/drawings/" className="header__menu--link un">
              Drawings
            </Link>
          </li>
          <li className="header__menu--item">
            <Link to="/paintings/" className="header__menu--link un">
              Paintings
            </Link>
          </li>
          <li className="header__menu--item">
            <Link to="/photographs/" className="header__menu--link un">
              Photographs
            </Link>
          </li>
          <li className="header__menu--item">
            <Link to="/people/" className="header__menu--link un">
              People
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
