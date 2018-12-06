import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="mainCom">
        <h2 className="subHeader">About Proof Technologies</h2>
        <ul>
          <li className="mainItem">
            <h4 className="subHeader">The Mission</h4>

            <p className="mainItem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </li>
          <div className="divider" />
          <li className="mainItem">
            <h4 className="subHeader">The Technologies</h4>
            <p className="mainItem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </li>
          <div className="divider" />
          <li className="mainItem">
            <h4 className="subHeader">The Founder</h4>
            <p className="mainItem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </li>
          <div className="divider" />
        </ul>
      </div>
    );
  }
}

export default About;
