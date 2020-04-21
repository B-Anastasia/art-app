import React from "react";

const ErrorIndicator = () => {
  return (
    <div className="error">
      <h1>Sorry</h1>
      {/*<img src={icon} />*/}
      <span>Looks like something went wrong on our end.</span>
      <span>Head back to the Art Lives Forever Homepage.</span>
      <button className="btn draw-border">Go Back</button>
    </div>
  );
};

export default ErrorIndicator;
