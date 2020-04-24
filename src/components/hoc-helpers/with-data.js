import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";

const withData = (View, getData, property) => {
  return class extends Component {
    //created new class without name => returned new Component with method render()
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      this.updateList();
    }

    updateList = () => {
      this.setState({ loading: true });
      getData(property)
        .then((data) => {
          console.log(data);
          this.setState({ data, loading: false, error: false });
        })
        .catch(this.onError);
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };
    render() {
      const { data, loading, error } = this.state;

      if (loading || !data) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }

      return (
        <ErrorBoundry>
          <View {...this.props} data={data} />
        </ErrorBoundry>
      );
    }
  };
};

export default withData;
