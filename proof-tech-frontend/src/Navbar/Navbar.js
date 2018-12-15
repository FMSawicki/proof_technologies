import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import Logo from "./proof-logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <ul className="routeLinks">
          <li>
            <NavLink to="/">Proof Technology</NavLink>
          </li>
          {/* Logo picture will be NavLink  for Landing component */}
          <div className="navLinks">
            <li>
              <NavLink to="about" activeStyle={{ color: "white" }}>
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="services" activeStyle={{ color: "white" }}>
                Services
              </NavLink>
            </li> */}
            <li>
              <NavLink to="contact" activeStyle={{ color: "white" }}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="blog" activeStyle={{ color: "white" }}>
                Blog
              </NavLink>
            </li>
            {/* <li>
              <a href="#linkedin">LinkedIn</a>
            </li> */}
          </div>
        </ul>
      </div>
    );
  }
}
export default Navbar;
