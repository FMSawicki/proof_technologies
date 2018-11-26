import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App/App';
import About from './About/About'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Landing from './Landing/Landing'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'

const routes = (
    <BrowserRouter>
          <Route exact path="/" component={App}>
          <Route exact path="/sessionstate1" component={Template1}/>
          <Route exact path="/sessionstate2" component={Template2}/>
          <Route exact path="/sessionstate3" component={Template3}/>
    </BrowserRouter>
)

export default routes