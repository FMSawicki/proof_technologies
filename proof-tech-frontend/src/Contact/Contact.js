import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", company: "", email: "", phone: 0, message: "" };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    // Email Stuff
    return <Redirect to="/contacted" />;
  };
  //onChange functions will update contact information state by the keystroke. onClick function tied to submit button will trigger email, sending snapshot of contact info states in said email.
  render() {
    return (
      <div className="mainCom">
        <h2 id="contactHeader" className="subHeader">
          Contact Us
        </h2>
        <p id="contactItem" className="mainItem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <div className="divider" />
        <form id="contactForm">
          <div id="colDiv">
            <div id="col1">
              <h4 className="contactPrompt">Name:</h4>
              <input
                onChange={this.onChange}
                name="name"
                type="text"
                cols="50"
              />
              <h4 className="contactPrompt">Company:</h4>
              <input onChange={this.onChange} name="company" type="text" />
            </div>

            <div id="col2">
              <h4 className="contactPrompt">Email:</h4>
              <input onChange={this.onChange} name="email" type="email" />
              <h4 className="contactPrompt">Phone:</h4>
              <input
                onChange={this.onChange}
                name="phone"
                type="number"
                min="10"
              />
            </div>
          </div>
          {/* <div id="formBottom"> */}
          <h4 id="messagePrompt" className="contactPrompt">
            Message:
          </h4>
          <textarea
            id="message"
            onChange={this.onChange}
            type="text"
            cols="95"
            rows="10"
            name="message"
          />
          <input
            id="formSubmit"
            type="button"
            value="Submit"
            onClick={this.onClick}
          />
          {/* </div> */}
        </form>
      </div>
    );
  }
}

export default Contact;

// <CSSTransition in={true} appear={true} timeout={300} className="fade">
//   {" "}
//   ...
// </CSSTransition>;
