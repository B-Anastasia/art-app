import React, { Component } from "react";
import Header from "../header";
import { BrowserRouter as Router } from "react-router-dom";
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    itemId: null,
  };

  onItemSelected = (itemId) => {
    this.setState({
      itemId: itemId,
    });
  };

  render() {
    const { getAllItems, getItem } = this.swapiService;
    return (
      <ErrorBoundry>
        <Router>
          <div>
            <Header />
            <ItemDetails itemId={this.state.itemId} getData={getItem} />
            <ItemList
              getData={getAllItems}
              classification="Photographs"
              onItemSelected={this.onItemSelected}
            />
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
