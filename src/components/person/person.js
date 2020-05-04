import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PersonImages from "./person-images/person-images";
import PersonDetails from "./person-details/person-details";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Person extends Component {
  state = {
    data: null,
    images: null,
    error: false,
    loading: true,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
    this.updatePersonImages();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id !== this.props.id) {
      this.updatePerson();
      this.updatePersonImages();
    }
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
    console.log("fun");
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
  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }
  render() {
    const { loading, error, data, images } = this.state;
    const { history } = this.props;

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    const showDetails = !data ? <Spinner /> : <PersonDetails data={data} />;
    const showImages = !images ? (
      <Spinner />
    ) : (
      <PersonImages
        images={images}
        onItemSelected={(id) => history.push(`/work/${id}`)}
      />
    );

    return (
      <div className="people item container">
        {showDetails}
        {showImages}
      </div>
    );
  }
}

export default withRouter(Person);
