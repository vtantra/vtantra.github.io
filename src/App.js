import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Skills from "./components/skills";
import Experience from "./components/experiences";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Hero></Hero>
            <About></About>
            {/* <Blog></Blog> */}
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
