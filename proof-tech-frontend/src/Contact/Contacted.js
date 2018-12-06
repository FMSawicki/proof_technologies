import React, { Component } from "react";

class Contacted extends Component {
  render() {
    return (
      <div className="mainCom">
        <h1 className="subHeader">
          Message recieved, ${`this.props.name`}! Thank you for your interest;
          we'll be in contact!
        </h1>
      </div>
    );
  }
}
export default Contacted;
