import React from "react";
import { PeopleList } from "../../art-components";
import { useHistory } from "react-router-dom";

const PeoplePage = () => {
  const history = useHistory();
  return <PeopleList onItemSelected={(id) => history.push(`${id}`)} />;
};
export default PeoplePage;
