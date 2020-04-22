import React from "react";
import { DrawingsList } from "../art-components";
import { useHistory } from "react-router-dom";

const DrawingPage = () => {
  let history = useHistory();
  return (
    <DrawingsList onItemSelected={(itemId) => history.push(`${itemId}`)} />
  );
};
export default DrawingPage;
