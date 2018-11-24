import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="companyName">Proof Technologies LLC</h1>
        </header>
        <div className="body">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
            eu lacus condimentum vehicula. Phasellus egestas lobortis tellus
            quis vehicula. Nulla at condimentum sem. Nunc et commodo metus. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nam mattis tortor in porta hendrerit. Aliquam sed
            sollicitudin massa. Etiam eget ullamcorper sem. Morbi condimentum,
            nisi sit amet mollis aliquam, tortor enim sollicitudin dui, sit amet
            lobortis dolor dolor non sapien. Nam sit amet molestie tortor, sed
            volutpat augue. Aliquam mollis auctor mi, ac facilisis velit
            hendrerit sit amet. In posuere ipsum quis magna dignissim, a mattis
            orci maximus. Donec iaculis quam a convallis scelerisque.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
