import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list";

const { getAllItems, getAllPeople } = new SwapiService();

const DrawingsList = withData(ItemList, getAllItems, "Drawings");
const PaintingsList = withData(ItemList, getAllItems, "Paintings");
const PhotographsList = withData(ItemList, getAllItems, "Photographs");
const PeopleList = withData(ItemList, getAllPeople);

export { DrawingsList, PaintingsList, PeopleList, PhotographsList };
