import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", company: "", email: "", phone: 0, message: "" };
  }
  onChangeName = e => {
    this.setState({ Name: e.target.value });
  };
  onChangeCompany = e => {
    this.setState({ company: e.target.value });
  };
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangePhone = e => {
    this.setState({ phone: e.target.value });
  };
  onChangeMessage = e => {
    this.setState({ message: e.target.value });
  };

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
              <input onChange={this.onChangeName} type="text" cols="50" />
              <h4 className="contactPrompt">Company:</h4>
              <input onChange={this.onChangeCompany} type="text" />
            </div>

            <div id="col2">
              <h4 className="contactPrompt">Email:</h4>
              <input onChange={this.onChangeEmail} type="email" />
              <h4 className="contactPrompt">Phone:</h4>
              <input onChange={this.onChangePhone} type="number" min="10" />
            </div>
          </div>
          {/* <div id="formBottom"> */}
          <h4 id="messagePrompt" className="contactPrompt">
            Message:
          </h4>
          <textarea
            id="message"
            onChange={this.onChangeMessage}
            type="text"
            cols="95"
            rows="10"
          />
          <input id="formSubmit" type="button" value="Submit" onClick={""} />
          {/* </div> */}
        </form>
      </div>
    );
  }
}

export default Contact;
