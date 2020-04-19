import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {};

  componentDidMount() {
    // this.swapiService.getAllItems("Drawings").then((res) => {
    //   console.log(res);
    //
    //   this.setState(res[0]);
    //   console.log("res:", res);
    // });

    // this.swapiService.getItem(304069).then((res) => {
    //   console.log(res);
    // });
    // this.swapiService.getAllPeople().then((res) => {
    //   console.log(res);
    // });
    this.swapiService.getPerson(33266);
  }

  render() {
    const { title, name, date, imageUrl } = this.state;
    return (
      <div className="list-grid container">
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img src={imageUrl} alt="art" />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img
              src="https://nrs.harvard.edu/urn-3:HUAM:71920_dynmc?width=280"
              alt="art"
            />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img
              src="https://nrs.harvard.edu/urn-3:HUAM:INV167216_dynmc"
              alt="art"
            />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img
              src="https://nrs.harvard.edu/urn-3:HUAM:INV167216_dynmc"
              alt="art"
            />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img
              src="https://nrs.harvard.edu/urn-3:HUAM:INV167216_dynmc"
              alt="art"
            />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="list-grid__item">
          <figure className="list-grid__item--image">
            <img
              src="https://nrs.harvard.edu/urn-3:HUAM:INV167216_dynmc"
              alt="art"
            />
          </figure>
          <div className="list-grid__item--title">
            <h4>&#x201C; {title} &#x201D;</h4>
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }
}
