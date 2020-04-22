import React, { Component } from "react";
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { DrawingsList } from "../art-components";
import { MainPage } from "../pages";
import ErrorIndicator from "../error-indicator";

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
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/drawings/:id">
                <DrawingsList onItemSelected={this.onItemSelected} />
              </Route>
              <Route exact path="/photographs/:id">
                <DrawingsList onItemSelected={this.onItemSelected} />
              </Route>
              <Route exact path="/paintings/:id">
                <DrawingsList onItemSelected={this.onItemSelected} />
              </Route>
            </Switch>
            <ItemDetails itemId={this.state.itemId} getData={getItem} />
            <ErrorIndicator />
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
