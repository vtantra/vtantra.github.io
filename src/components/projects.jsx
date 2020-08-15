import React, { Component } from "react";
import Project from "./project";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading animate-box">My Recent Work</h2>
              </div>
            </div>
            {/* <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="col-md-12">
                <p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
              </div>
            </div> */}
            {/* use col-md-4 for skinnier boxes */}
            <div className="row">
              <Project
                background="pathtracer_ex.png"
                link="https://drive.google.com/drive/folders/1TQuirFlJgruktn93gR92dZAADRRjX4h4?usp=sharing"
                title="Lighting Renderer and Pathtracer"
                body="A project done in the computer graphics course at UC
                        Berkeley, this pathtracer simulates the physics of
                        lights and illumination, as well as different textures
                        and focii."
              />
              <Project
                background="lightfield.png"
                link="https://vtantra.github.io/DepthRefocusingApertureAdjustmentLightfield/"
                title="Post-Shot Aperture and Focus Manipulation with Lightfields"
                body="1 of 2 final projects for my computer vision course. I took publicly available lightfield data and programmed the post-processing algorithms that allow us to simulate aperture and focus modificiations after a photo has been taken. I also experiement with a test dataset taken from game footage, simulating photographic depth in a video game screenshot."
              />
              <Project
                background="seamcarving.png"
                link="https://vtantra.github.io/SeamCarving/"
                title="Seam Carving for Context-Aware Cropping"
                body="1 of 2 final projects for my computer vision course. Using research by Shai Avidan and Ariel Shamir presented at SIGGRAPH 2007, I implemented a seam carving algorithm in Python. It allows you to crop images in a context-aware manner, reducing size while mainly cropping unnecessary visual information. I also added seam stretching, which allows stretching of images by inserting sections of filler pixels."
              />
              <Project
                background="processing.png"
                link="https://youtu.be/G9u7_aJpQDg"
                title="Processing Music Video"
                body="A culmination of a month's exploration in the visually-oriented coding language Processing. Using some concepts I learned, I created a short animation that paired with a song. Processing is an interesting language with a heavy focus on art and creativity, so it was nice to explore something different from what I usually encounter in my field of software engineering and technology."
              />
              <Project
                background="mosaicing.png"
                link="https://vtantra.github.io/ImageWarpingAndMosaicing/"
                title="Image Warping and Mosaicing"
                body="I used linear algebra to warp images to be on the same visual 2D plane. Furthermore, using the ideas of the paper “Multi-Image Matching using Multi-Scale Oriented Patches” by Brown et al., I was able to automate the process of choosing coordinates that correlate visually-semantic points between 2 different images."
              />
              <Project
                background="imageclassification.png"
                link="https://vtantra.github.io/ImageClassificationAndSegmentation/"
                title="Image Classification"
                body="I tried using several Python libraries to explore neural network classification. I used data from the Fashion MNIST dataset and trained a network to classify their images into different item categories. I ended up training the network on 60,000 images, and testing it on 10,000 images. Credit to the PyTorch tutorials for some of the functions that my code is based on!"
              />
            </div>
            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
