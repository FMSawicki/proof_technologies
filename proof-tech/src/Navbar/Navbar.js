import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          {/* <div className="nav"> */}
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>

          {/* </div> */}
        </ul>
      </div>
    );
  }
}
export default Navbar;
