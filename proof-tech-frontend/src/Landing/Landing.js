import React, { Component } from "react";
import "./Landing.css";
import Services from "../Services/Services";
class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="body">
            {/* <h1 className="companyName">
              Proof
              <br /> Technology <br /> LLC
            </h1>
            <div className="landingText">
              <h2 className="landingHead"> Burden of Proof:</h2>
              <p className="description">
                The requirement and obligation of providing sound, reasonable
                evidence supporting a charge or allegation. Originating and used
                primarily in law, it can be applied more broadly to any
                situation in which a contentious dispute arises.
              </p>
            </div> */}
          </div>
        </div>
        <Services />
      </div>
    );
  }
}
export default Landing;
