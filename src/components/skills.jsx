import React, { Component } from "react";
import Skill from "./skill";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-services" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Here's What I Do</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <Skill
                header="Languages"
                body="Python, Lua, Java, JavaScript, SQL, HTML/CSS, and more. VCS experience with git."
                color="color-1"
                icon="icon-code"
              />
              <Skill
                header="Protocols & Libraries"
                body="React | JSON | NumPy | spaCy | XMLUtils | REST | OpenCV | GraphQL | PyTorch | Tensorflow"
                color="color-3"
                icon="icon-spanner"
              />
              <Skill
                header="Frameworks"
                body="Some of the frameworks I've used: Flask, React Native, Appium/Selenium, Ruby on Rails and Bootstrap."
                color="color-5"
                icon="icon-cog"
              />
              {/* <Skill
                header="Web Development"
                body="I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS"
                color="color-2"
                icon="icon-data"
              ></Skill>
              <Skill
                header="Web Development"
                body="I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS"
                color="color-4"
                icon="icon-layers2"
              ></Skill>
              <Skill
                header="Web Development"
                body="I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS"
                color="color-6"
                icon="icon-phone3"
              ></Skill> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
