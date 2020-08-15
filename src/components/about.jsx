import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a product-oriented software engineer with a year of
                        industry experience, based in the Bay Area. I've worked
                        on products varying from QA automation systems to web
                        applications to professional game development engines. I
                        love building anything visual, and my fields of interest
                        include frontend development, game development, computer
                        vision, and VR/AR.
                      </p>
                      <p>
                        In my free time I train as a hip-hop/street-inspired
                        choreographer and dancer, play a lot of video games and
                        burn things in the kitchen. I love creating, competing
                        with others, and the process of growth. Nice to meet
                        you!
                      </p>
                    </div>
                  </div>
                </div>
                <h6 className="colorlib-heading-2">My Core Values</h6>
                <div class="row">
                  <div
                    class="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="services color-1">
                      <span class="icon2">
                        <i class="icon-puzzle"></i>
                      </span>
                      <h3>Have Fun</h3>
                      <p>Enjoy what I'm doing and create happiness!</p>
                    </div>
                  </div>
                  <div
                    class="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div class="services color-2">
                      <span class="icon2">
                        <i class="icon-heart"></i>
                      </span>
                      <h3>Love People</h3>
                      <p>Listen to my peers and serve my community.</p>
                    </div>
                  </div>
                  <div
                    class="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div class="services color-3">
                      <span class="icon2">
                        <i class="icon-chart-line"></i>
                      </span>
                      <h3>Seek Growth</h3>
                      <p>
                        Never settle, find the next challenge and push myself.
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div class="services color-4">
                      <span class="icon2">
                        <i class="icon-flag"></i>
                      </span>
                      <h3>Build A Legacy</h3>
                      <p>Own the things I create and leave lasting benefits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
