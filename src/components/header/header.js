import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/#">
          <h2>
            <span className="first">Art lives</span>
            <span className="secondary">forever</span>
          </h2>
        </a>
      </div>
      <div className="header__menu">
        <ul className="header__menu--list">
          <li className="header__menu--item">
            <a className="header__menu--link un" href="/">
              Main
            </a>
          </li>
          <li className="header__menu--item">
            <a className="header__menu--link un" href="/">
              Drawings
            </a>
          </li>
          <li className="header__menu--item">
            <a className="header__menu--link un" href="/">
              Paintings
            </a>
          </li>
          <li className="header__menu--item">
            <a className="header__menu--link un" href="/">
              Photographs
            </a>
          </li>
          <li className="header__menu--item">
            <a className="header__menu--link un" href="/">
              People
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
