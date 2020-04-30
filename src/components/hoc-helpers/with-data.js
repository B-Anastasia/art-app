import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";

const withData = (View) => {
  return class extends Component {
    //created new class without name => returned new Component with method render()
    state = {
      data: [],
      loading: true,
      error: false,
      from: 0,
      page: 1,
      size: 9,
      totalPages: null,
      scrolling: false,
      showBtn: true,
      pages: null,
    };

    componentDidMount() {
      this.updateList();

      //on scroll loading more items
      window.onscroll = () => {
        if (this.state.scrolling) {
          if (this.state.page <= this.state.pages) {
            this.handleScroll();
          }
        }
      };
    }

    updateList = () => {
      const { from, size, page, data } = this.state;
      this.props
        .getData(this.props.property, from, size, page)
        .then((res) => {
          this.setState({
            data: [...data, ...res[1]],
            loading: false,
            error: false,
            scrolling: true,
            pages: res[0],
          });
        })
        .catch(this.onError);
    };

    loadMore = () => {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
          from: prevState.from + 9,
          // scrolling: true,
          loading: false,
        }),
        this.updateList
      );
    };

    handleScroll = () => {
      const findLastElement = document.querySelector(
        "ul>li.item-list__item:last-child"
      );
      if (!findLastElement) {
        return;
      }
      const calcOffsetLastEl =
        findLastElement.offsetTop + findLastElement.clientHeight;
      const calcPageOffset = window.pageYOffset + window.innerHeight;

      if (calcPageOffset > calcOffsetLastEl) {
        this.loadMore();
        this.setState({
          scrolling: false,
          showBtn: false,
        });
      }
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    render() {
      const { data, loading, error, showBtn } = this.state;

      if (loading || !data) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      const btn = showBtn ? (
        <div className="btn-blue" onClick={() => this.loadMore()}>
          Load more
        </div>
      ) : null;
      return (
        <ErrorBoundry>
          <View {...this.props} data={data} />
          {btn}
        </ErrorBoundry>
      );
    }
  };
};

export default withData;
