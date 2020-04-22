import React, { Component } from "react";
import Header from "../header";
import { BrowserRouter as Router } from "react-router-dom";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { DrawingsList } from "../art-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    itemId: 296421,
  };

  onItemSelected = (itemId) => {
    this.setState({
      itemId: itemId,
    });
  };

  render() {
    const { getItem } = this.swapiService;
    return (
      <ErrorBoundry>
        <Router>
          <div>
            <Header />
            <ItemDetails itemId={this.state.itemId} getData={getItem} />
            <DrawingsList onItemSelected={this.onItemSelected} />
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
