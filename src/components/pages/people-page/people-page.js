import React from "react";
import { PeopleList } from "../../art-components";
import { useHistory } from "react-router-dom";

const PeoplePage = () => {
  const history = useHistory();
  return (
    <div className="people-page">
      <PeopleList onItemSelected={(id) => history.push(`${id}`)} />
    </div>
  );
};
export default PeoplePage;
