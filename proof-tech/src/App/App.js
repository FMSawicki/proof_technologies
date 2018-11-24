import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./proof-logo.png";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img id="logo" src="logo" alt="logo" /> */}
          <h1 className="companyName">Proof Technologies LLC</h1>
          <ul className="routeLinks">
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
