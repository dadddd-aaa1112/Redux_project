import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectCity } from "../actions/index";

class citysList extends Component {
  showList() {
    return this.props.citys.map((city) => {
      return (
        <li onClick={() => this.props.select(city)} key={city.id}>
          {city.name}
        </li>
      );
    });
  }
  render() {
    return <ul>{this.showList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    citys: state.citys
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: selectCity }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(citysList);
