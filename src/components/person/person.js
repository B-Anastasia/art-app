import React, { Component } from "react";
// import SwapiService from "../../../services/swapi-service";

export default class Pesron extends Component {
  state = {
    data: null,
    images: null,
  };
  // swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
    this.updatePersonImages();
  }

  updatePerson() {
    this.swapiService.getPerson(22730).then((data) => {
      console.log(data);
      this.setState({
        data,
      });
    });
  }
  updatePersonImages() {
    this.swapiService.getPersonItems(22730).then((images) => {
      this.setState({
        images,
      });
    });
  }

  render() {
    return (
      <div className="people">
        <div>Details</div>
        <div>Images</div>
      </div>
    );
  }
}
