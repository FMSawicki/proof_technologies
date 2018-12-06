import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Contacted from "../Contact/Contacted";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        {/* Navbar is static subcomponent in App */}
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contacted" compponent={Contacted} />
            <Route exact path="/services" component={Services} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
