import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class citysList extends Component {
  showList() {
    return this.props.citys.map((city) => {
      return <li key={city.id}>{city.name}</li>;
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

export default connect(mapStateToProps)(citysList);
