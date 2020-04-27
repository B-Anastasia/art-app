import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <Link to="/">
        <h2>
          <span className="first">Art lives</span>
          <span className="secondary">forever</span>
        </h2>
      </Link>
    </div>
  );
};

export default HeaderLogo;
