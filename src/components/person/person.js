import React, { Component } from "react";
import SwapiService from "../../../services/swapi-service";
import PersonDetails from "./person-details/person-details";
import PersonImages from "./person-images/person-images";

export default class Pesron extends Component {
  state = {
    data: null,
    images: null,
  };
  swapiService = new SwapiService();

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
    const { data, images } = this.state;
    return (
      <div className="people">
        <PersonDetails data={data} />
        <PersonImages images={images} />
      </div>
    );
  }
}
