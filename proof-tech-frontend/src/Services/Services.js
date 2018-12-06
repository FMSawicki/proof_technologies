import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    // let page = this.props.location.pathname.substr(1);
    // if (!page) page = "home";
    return (
      <div className="servicesMain">
        <h2 className="servicesHeader">Available Services</h2>
        <div className="divider" />
        <ul>
          <li className="mainItem">
            <h4 className="subHeader">Migration to cloud</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <div className="divider" />
          <li className="mainItem">
            <h4 className="subHeader">
              Network and system security monitoring
            </h4>
            <p className="mainItem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <div className="divider" />
          <li className="mainItem">
            <h4 className="subHeader">Backups</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <div className="divider" />
        </ul>
      </div>
    );
  }
}
export default Services;
