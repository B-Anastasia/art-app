import React from "react";
import { Link } from "react-router-dom";

const ErrorIndicator = () => {
  return (
    <div className="error">
      <h1>Sorry</h1>
      {/*<img src={icon} />*/}
      <span>Looks like something went wrong on our end.</span>
      <span>Head back to the Art Lives Forever Homepage.</span>
      <Link className="btn draw-border outline-none" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorIndicator;
