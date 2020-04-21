import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import Details from "../details";

export default class ItemDetails extends Component {
  state = {
    loading: true,
    data: null,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateItem = () => {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      loading: true,
      error: false,
    });
    getData(itemId)
      .then((data) => {
        this.setState({
          data,
          loading: false,
          error: false,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { data, error, loading } = this.state;
    if (loading || !data) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <Details data={data} />;
  }
}
