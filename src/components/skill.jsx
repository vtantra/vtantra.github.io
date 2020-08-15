import React, { Component } from "react";

/* Props
    string header
    string body
    string color
    string icon
*/
export default class Skill extends Component {
  render() {
    return (
      <div className="col-md-4 text-center animate-box">
        <div className={"services " + this.props.color}>
          <span className="icon">
            <i className={this.props.icon} style={{ fontSize: 50 }} />
          </span>
          <div className="desc">
            <h3>{this.props.header}</h3>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    );
  }
}
