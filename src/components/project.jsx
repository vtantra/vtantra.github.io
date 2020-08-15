import React, { Component } from "react";

/* Props
    string background
    string link
    string title
    string body
*/
export default class Project extends Component {
  render() {
    const fadeDirs = ["fadeInLeft", "fadeInRight", "fadeInTop", "fadeInBottom"];
    let fadeDir = fadeDirs[Math.floor(Math.random() * fadeDirs.length)];
    return (
      <a href={this.props.link} target="_blank">
        <div className="col-md-6 animate-box" data-animate-effect={fadeDir}>
          <div
            className="project"
            style={{ backgroundImage: "url(images/" + this.props.background }}
          >
            <div className="desc">
              <div className="con">
                <h3>
                  <a href={this.props.link} target="_blank">
                    {this.props.title}
                  </a>
                </h3>
                <span>{this.props.body}</span>
                {/* <p className="icon">
                  <span>
                    <a href="#">
                      <i className="icon-share3" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="icon-eye" /> 100
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="icon-heart" /> 49
                    </a>
                  </span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
