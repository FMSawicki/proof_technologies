import React, { Component } from "react";
import Logo from "./Icons/proof-logo.png";
import "./Services.css";
// import pexels from "./pexels.jpeg";
//Renders three short columns describing professional services, managed services, and a picture
class ServiceSub extends Component {
  render() {
    return (
      <div className="ServiceSubMain">
        <section className="ServiceSubSect">
          <h5 className="SubText subHeader">Professional Services</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>
        <section className="ServiceSubSect subImg">
          <img className="subImg" src={Logo} alt="" />
        </section>
        <section className="ServiceSubSect">
          <h5 className="ServiceSubText subHeader">Managed Services</h5>
          <p>
            Quisque laoreet pharetra arcu at suscipit. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Nam luctus turpis vitae nisl pretium congue.
          </p>
        </section>
      </div>
    );
  }
}

export default ServiceSub;
