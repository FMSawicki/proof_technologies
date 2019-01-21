import React, { Component } from "react";
import "./Services.css";
import ServiceSub from "./ServiceSub";
import networkIcon from "./Icons/network.svg";
import eutIcon from "./Icons/eut.svg";
import bdrIcon from "./Icons/bdr.svg";
import identityIcon from "./Icons/proof-identity.svg";
import securityIcon from "./Icons/security.svg";
import cloudIcon from "./Icons/cloud.svg";
import emailIcon from "./Icons/email.svg";
import consultingIcon from "./Icons/consulting.svg";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: true,
      network: false,
      eut: false,
      bdr: false,
      identity: false,
      security: false,
      cloud: false,
      email: false,
      consulting: false
    };
    //State will be used to toggle content of centeral square in grid, provide description for selected item
  }
  onClick = e => {
    console.log("clicked");
    if (e.target.name !== "default") {
      this.setState({ default: false });
    }
    if (e.target.name !== "network") {
      this.setState({ network: false });
    } else {
      this.setState({
        network: true
      });
    }
    if (e.target.name !== "eut") {
      this.setState({ eut: false });
    } else {
      this.setState({
        eut: true
      });
    }
    if (e.target.name !== "bdr") {
      this.setState({ bdr: false });
    } else {
      this.setState({
        bdr: true
      });
    }
    if (e.target.name !== "identity") {
      this.setState({ identity: false });
    } else {
      this.setState({
        identity: true
      });
    }
    if (e.target.name !== "security") {
      this.setState({ security: false });
    } else {
      this.setState({
        security: true
      });
    }
    if (e.target.name !== "cloud") {
      this.setState({ cloud: false });
    } else {
      this.setState({
        cloud: true
      });
    }
    if (e.target.name !== "email") {
      this.setState({ email: false });
    } else {
      this.setState({
        email: true
      });
    }
    if (e.target.name !== "consulting") {
      this.setState({ consulting: false });
    } else {
      this.setState({
        consulting: true
      });
    }
    // onClick function checks clicked element's name, compares event target name to states.
    // For every state it is not, that state is set to false.
    // The state it matches will be set to true by else statement.
    // This ensures no more than one state will be set to true at any point.
  };
  render() {
    let viewText;
    if (this.state.default === true) {
      viewText = "Hover over a service for more details!";
    }
    if (this.state.network === true) {
      viewText =
        "Communication and productivity go hand and hand and Proof Technology knows that. That’s why we believe in a providing a network that communicates quickly and securely. Our networks are designed around speed, security, and wireless access.";
    }
    if (this.state.eut === true) {
      viewText = `92% of malware is delivered via email these days. Unfortunately your spam filters can not catch every single one of these. 14 billion malicious emails are sent out daily - and with this many sent out, they are successful. Proof Technology can help ensure your employees make conscious computer decisions.`;
    }
    if (this.state.bdr === true) {
      viewText = `Work productivity generates data and data provides revenue. Make sure your data and servers are safe and recoverable in the event of a disaster. Proof Technology believes in not only backing up your data but also doing "disaster tests" on our end to ensure that your equipment is recoverable in a speedy manner. `;
    }
    if (this.state.identity === true) {
      viewText = `Hiring and managing employees can be a busy task. Technology doesn't necessarily make it any easier either with all of these extra accounts and permissions employees may need. We can help by implementing "Proof Identity Management". Your identity manager assists us both!`;
    }

    if (this.state.security === true) {
      viewText = `Proof Technology has experience in analyzing security audits and identifying, triaging, and mitigating known vulnerabilities. Let us audit your network and come up with a plan to mitigate vulnerabilities and create a more secure environment.`;
    }
    if (this.state.cloud === true) {
      viewText =
        "The cloud is revolutionary and still in the early stages of its existence! The cloud offers some immense benefits to your business. However, not every cloud offering is the right fit for your business. Let Proof Technology assist you in; finding, migrating, and maintaining cloud technologies that focus on making your business as reliable as possible.";
    }
    if (this.state.email === true) {
      viewText = `Email is the hub of almost every business. It's the easiest way to quickly communicate and archive communications for many business needs. Email can quickly become a big task to manage. Whether if it is cloud based or on-premise. Proof Technology makes sure your email is always available and protected. 
`;
    }
    if (this.state.consulting === true) {
      viewText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet pharetra arcu at suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis eu lacus condimentum vehicula.";
    }
    return (
      <div className="servicesMain">
        <ServiceSub />
        <div className="divider" />
        <h2 className="servicesHeader">
          Professional & Managed <br /> Business Solutions
        </h2>

        <div className="grid-container">
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img className="icon" name="network" src={networkIcon} alt="icon" />

            <p className="serHead">Network & Wifi</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img className="icon" name="cloud" src={cloudIcon} alt="icon" />
            <p className="serHead">Cloud Technologies</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img
              className="icon"
              name="identity"
              src={identityIcon}
              alt="icon"
            />
            <p className="serHead">Proof Identity Management</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img className="icon" name="bdr" src={bdrIcon} alt="icon" />
            <p className="serHead">BDR</p>
          </div>
          <div className="mainItem grid-item viewport">
            <p className="serText">{viewText}</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img
              className="icon"
              name="security"
              src={securityIcon}
              alt="icon"
            />
            <p className="serHead">Security Audits and Remediation</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img className="icon" name="eut" src={eutIcon} alt="icon" />
            <p className="serHead">End User Training</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img
              className="icon"
              name="consulting"
              src={consultingIcon}
              alt="icon"
            />
            <p className="serHead">Consulting</p>
          </div>
          <div className="mainItem grid-item" onMouseOver={this.onClick}>
            <img className="icon" name="email" src={emailIcon} alt="icon" />
            <p className="serHead">Email</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
