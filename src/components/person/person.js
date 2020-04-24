import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PersonImages from "./person-images/person-images";
import PersonDetails from "./person-details/person-details";

export default class Person extends Component {
  state = {
    data: null,
    images: null,
    error: false,
    loading: true,
  };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
    this.updatePersonImages();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id !== this.props.id) {
      this.updateItem();
      this.updatePersonImages();
    }
  }

  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  updatePerson() {
    const { id } = this.props;
    this.setState({
      loading: true,
      error: false,
    });
    this.swapiService
      .getPerson(id)
      .then((data) => {
        this.setState({
          data,
          loading: false,
          error: false,
        });
      })
      .catch(this.onError);
  }

  updatePersonImages() {
    const { id } = this.props;
    this.setState({
      loading: true,
      error: false,
    });
    this.swapiService
      .getPersonItems(id)
      .then((images) => {
        this.setState({
          images,
          loading: false,
          error: false,
        });
      })
      .catch(this.onError);
  }

  render() {
    const { loading, error, data, images } = this.state;

    if (!data || !images || loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const { onItemSelected } = this.props;

    return (
      <div className="people item container">
        <PersonDetails data={data} />
        <PersonImages images={images} onItemSelected={onItemSelected} />
      </div>
    );
  }
}
