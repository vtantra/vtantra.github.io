import React, { Component } from "react";

/* Props
    string title
    string company
    string description
    string color
*/
export default class Experience extends Component {
  render() {
    return (
      <div>
        <article
          className="timeline-entry animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="timeline-entry-inner">
            <div className={"timeline-icon " + this.props.color}>
              <i className="icon-pen2" />
            </div>
            <div className="timeline-label">
              <h2>
                {this.props.title + " @" + this.props.company}{" "}
                <span> {this.props.date}</span>
              </h2>
              <p>{this.props.description}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
