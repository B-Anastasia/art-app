import React from "react";
// import { PeopleList } from "../../art-components";
// import { useHistory } from "react-router-dom";
import Person from "../../person";

const PeoplePage = () => {
  // const history = useHistory();
  return (
    <div className="people-page">
      <Person id="22730" />
      {/*<PeopleList onItemSelected={(id) => history.push(`${id}`)} />*/}
    </div>
  );
};
export default PeoplePage;
