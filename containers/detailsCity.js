import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    if (!this.props.citys) {
      return <p>Выберите город</p>;
    }
    return (
      <div>
        <h2>{this.props.citys.name}</h2>

        <br />
        <p>{this.props.citys.desc}</p>
        <p>
          Описание: {this.props.citys.descr}, дата основания:{" "}
          {this.props.citys.dateOfFoun}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citys: state.activeCity
  };
}

export default connect(mapStateToProps)(Details);
