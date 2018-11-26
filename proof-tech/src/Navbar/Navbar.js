import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "./proof-logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="routeLinks">
          <li>
            <Link to="/">
              <img id="logo" src="" alt="logo" />
            </Link>
          </li>
          <div className="navLinks">
            <li>
              <Link className="grow" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="grow" to="services">
                Services
              </Link>
            </li>
            <li>
              <Link className="grow" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="grow" to="blog">
                Blog
              </Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
export default Navbar;
