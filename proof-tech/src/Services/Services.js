import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div id="serviceList">
        <h2 className="serviceSub">Available Services:</h2>
        <ul>
          <li className="service">
            <h4 className="serviceSub">Migration to cloud</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <li className="service">
            <h4 className="serviceSub">
              Network and system security monitoring
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <li className="service">
            <h4 className="serviceSub">Backups</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Services;
