import React from "react";
import { PhotographsList } from "../art-components";
import { useHistory } from "react-router-dom";

const PhotographsPage = () => {
  let history = useHistory();
  return (
    <PhotographsList onItemSelected={(itemId) => history.push(`${itemId}`)} />
  );
};
export default PhotographsPage;
