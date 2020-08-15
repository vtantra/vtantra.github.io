import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside
            id="colorlib-aside"
            role="complementary"
            className="border js-fullheight"
          >
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/profile.png)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Vincent Tantra</a>
              </h1>
              {/* <span className="email">
                <i className="icon-mail"></i> vincentxtantra@gmail.com
              </span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/vincentxtantra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" style={{ fontSize: 20 }} />
                  </a>
                  {"   "}
                  <a
                    href="https://twitter.com/v_tantra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" style={{ fontSize: 20 }} />
                  </a>
                  {"   "}
                  <a
                    href="https://www.instagram.com/v_tantra/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" style={{ fontSize: 20 }} />
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/vincenttantra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin22" style={{ fontSize: 20 }} />
                  </a>
                  {"   "}
                  <a
                    href="https://github.com/vtantra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github" style={{ fontSize: 20 }} />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  {/* Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i> */}
                  <br></br>
                  Template inspired by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                  .
                </small>
                <br />
                <small>This website is built with React.</small>
                <br />
                <small>Copyright © Vincent Tantra 2020</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
