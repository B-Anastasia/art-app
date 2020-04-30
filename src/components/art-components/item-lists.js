import React from "react";
import { withData, withChildFunction, withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

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

const mapDrawingsMethodsToProps = (swapiservice) => {
  return { getData: swapiservice.getAllItems, property: "Drawings" };
};
const mapPaintingsMethodsToProps = (swapiservice) => {
  return { getData: swapiservice.getAllItems, property: "Paintings" };
};
const mapPhotographsMethodsToProps = (swapiservice) => {
  return { getData: swapiservice.getAllItems, property: "Photographs" };
};
const mapPeopleMethodsToProps = (swapiservice) => {
  return {
    getData: swapiservice.getAllPeople,
    property: "Drawings|Paintings|Photographs",
  };
};

const DrawingsList = withSwapiService(
  withData(withChildFunction(ItemList, renderListItems)),
  mapDrawingsMethodsToProps
);
const PaintingsList = withSwapiService(
  withData(withChildFunction(ItemList, renderListItems)),
  mapPaintingsMethodsToProps
);
const PhotographsList = withSwapiService(
  withData(withChildFunction(ItemList, renderListItems)),
  mapPhotographsMethodsToProps
);
const PeopleList = withSwapiService(
  withData(withChildFunction(ItemList, renderListPeople)),
  mapPeopleMethodsToProps
);

export { DrawingsList, PaintingsList, PeopleList, PhotographsList };
