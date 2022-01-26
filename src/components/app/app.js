import React, { Component } from "react";
import Header from "../header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetails from "../item-details";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {
  MainPage,
  DrawingPage,
  PeoplePage,
  PhotographsPage,
  PaintingsPage,
} from "../pages";
import Person from "../person";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const { getItem } = this.swapiService;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={MainPage} />

                <Route exact path="/drawings/" component={DrawingPage} />
                {/*<DrawingsList onItemSelected={this.onItemSelected} />*/}

                <Route
                  path="/drawings/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <ItemDetails itemId={id} getData={getItem} />;
                  }}
                />

                <Route exact path="/photographs/" component={PhotographsPage} />

                <Route
                  path="/photographs/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <ItemDetails itemId={id} getData={getItem} />;
                  }}
                />

                <Route exact path="/paintings/" component={PaintingsPage} />

                <Route
                  path="/paintings/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <ItemDetails itemId={id} getData={getItem} />;
                  }}
                />

                <Route exact path="/people/" component={PeoplePage} />

                <Route
                  path="/people/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <Person id={id} />;
                  }}
                />

                <Route
                  path="/work/:id"
                  render={({ match }) => {
                    console.log(match);
                    const { id } = match.params;
                    return <ItemDetails itemId={id} getData={getItem} />;
                  }}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
