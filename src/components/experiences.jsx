import React, { Component } from "react";
import Experience from "./experience";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">
                  My Career History
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <Experience
                    title="Software Engineering Intern"
                    company="Roblox"
                    description="I was part of Roblox's first virtual intern class during the global Covid-19 pandemic. As part of the Modeling Team, I researched and developed procedural generation tools for Roblox Studio, their proprietary game engine. My tool was able to smartly decorate a game's terrain with a designer's assets to create dynamic environments. This research is used at Roblox to this day!"
                    color="color-3"
                    date="Jun - Aug 2020"
                  />
                  <Experience
                    title="Software Developer"
                    company="Middesk (via CodeBase)"
                    description="My second semester in CodeBase (a student organization at Berkeley) led me to develop a fully-hosted signup flow for Middesk, a company that focuses on business onboarding. I built React components with robust input fields, and was even able to suggest lasting UI improvements to the original design."
                    color="color-4"
                    date="Jan - May 2020"
                  />
                  <Experience
                    title="Software Developer"
                    company="Storr, Inc. (via CodeBase)"
                    description="My first semester in CodeBase led me to work with Storr, a mobile retail app that allows users to create their own mobile store. I worked on a social backend service for their app, specifically an endpoint that used Twilio's and Sendgrid's API to send invite links to a user's connections. I also worked on testing to ensure the endpoint's isolated functionality."
                    color="color-1"
                    date="Sep - Dec 2019"
                  />
                  <Experience
                    title="Software Engineering Intern"
                    company="21 Labs, Inc."
                    description="I worked on a QA automation web service that provided smart test suite creation and management to simplify mobile app testing. As the startup was small, I worked on important endpoints such as a DOM analyser that could compare app screens through their structure. I also improved the service by building an updater that detects changes in one test suite and updates similar ones accordingly."
                    color="color-5"
                    date="Jun - Aug 2019"
                  />
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
