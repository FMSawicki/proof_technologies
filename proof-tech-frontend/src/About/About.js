import React, { Component } from "react";
import "./About.css";
import Mission from "./SubComponents/Mission";
import Self from "./SubComponents/Self";
import Tech from "./SubComponents/Tech";
class About extends Component {
  render() {
    return (
      <div className="mainCom">
        <h2 className="subHeader">About Proof Technologies</h2>
        <Mission />
        <Self />
        <Tech />
      </div>
    );
  }
}

export default About;
