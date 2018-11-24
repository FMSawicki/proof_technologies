import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Contact Us</h3>
        <form>
          <input onChange="" type="text">
            Name
          </input>
          <input onChange="" type="text">
            Company
          </input>
          <input onChange="" type="text">
            Email
          </input>
          <input type="button" value="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
