import React, { Component } from "react";
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { PhotographsList, PaintingsList } from "../art-components";
import { MainPage, DrawingPage, PeoplePage } from "../pages";

export default class App extends Component {
  swapiService = new SwapiService();

  // state = {
  //   itemId: 296421,
  // };
  //
  // onItemSelected = (itemId) => {
  //   console.log(itemId);
  //   this.setState({
  //     itemId: itemId,
  //   });
  // };

  render() {
    const { getItem } = this.swapiService;
    return (
      <ErrorBoundry>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/drawings/" component={DrawingPage} />
              {/*<DrawingsList onItemSelected={this.onItemSelected} />*/}
              {/*</Route>*/}
              <Route
                path="/drawings/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <ItemDetails itemId={id} getData={getItem} />;
                }}
              />

              <Route exact path="/photographs/">
                <PhotographsList onItemSelected={this.onItemSelected} />
              </Route>
              <Route exact path="/paintings/">
                <PaintingsList onItemSelected={this.onItemSelected} />
              </Route>
              <Route exact path="/people/" component={PeoplePage} />
              {/*<ItemDetails itemId={this.state.itemId} getData={getItem} />*/}
            </Switch>
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
