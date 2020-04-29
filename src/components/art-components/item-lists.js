import React from "react";
import SwapiService from "../../services/swapi-service";
import { withData, withChildFunction } from "../hoc-helpers";
import ItemList from "../item-list";

const { getAllItems, getAllPeople } = new SwapiService();

// const withChildFunction = (Wrapped, fn) => {
//   return (props) => {
//     return <Wrapped {...props}>{fn}</Wrapped>;
//   };
// };

const renderListItems = ({ title, name, date, imageUrl }) => (
  <React.Fragment>
    <figure className="item-list__item--image">
      <img src={imageUrl[0] + `?width=280`} alt="art" />
    </figure>
    <div className="item-list__item--title">
      <h4>&#x201C; {title} &#x201D;</h4>
      <span>{name}</span>
      <span>{date}</span>
    </div>
  </React.Fragment>
);

const renderListPeople = ({ name, culture, displayDate }) => (
  <div>
    <h4>{name} </h4>
    <div>
      ( {culture}, {displayDate} )
    </div>
  </div>
);

const DrawingsList = withData(
  withChildFunction(ItemList, renderListItems),
  getAllItems,
  "Drawings"
);
const PaintingsList = withData(
  withChildFunction(ItemList, renderListItems),
  getAllItems,
  "Paintings"
);
const PhotographsList = withData(
  withChildFunction(ItemList, renderListItems),
  getAllItems,
  "Photographs"
);
const PeopleList = withData(
  withChildFunction(ItemList, renderListPeople),
  getAllPeople,
  "Drawings|Paintings|Photographs"
);

export { DrawingsList, PaintingsList, PeopleList, PhotographsList };
