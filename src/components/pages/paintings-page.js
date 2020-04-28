import React from "react";
import { PaintingsList } from "../art-components";
import { useHistory } from "react-router-dom";

const PaintingsPage = () => {
  const history = useHistory();
  return <PaintingsList onItemSelected={(id) => history.push(`${id}`)} />;
};

export default PaintingsPage;
