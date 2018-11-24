import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="body">
        <div classname="landingText">
          <h2> What We Can Do For You</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
            eu lacus condimentum vehicula.
          </p>
        </div>
        <img id="landingImg" src="#" alt="picture" />
      </div>
    );
  }
}
export default Landing;
