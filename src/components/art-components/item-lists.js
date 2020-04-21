import React from "react";
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list";

const { getAllItems, getAllPeople } = new SwapiService();

const DrawingsList = () => {};
const PaintingsList = () => {};
const PhotographsList = () => {};
const PeopleList = () => {};

export { DrawingsList, PaintingsList, PeopleList, PhotographsList };
