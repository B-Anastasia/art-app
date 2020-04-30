import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiservise) => {
          const serviceProps = mapMethodsToProps(swapiservise);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;
