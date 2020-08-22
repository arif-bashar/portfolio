import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";
import { DotGrid } from "../SvgIcons";
import Tag from "../Tag";

function ExperienceSection() {
  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 224, maxHeight: 224) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div id="experience" className="experience-section">
      <div className="inner-container">
        <div className="left-section">
          <div className="top-section">
            <div className="number-container">
              <div className="square"></div>
              <div className="number">
                <strong>02</strong>
              </div>
              <div className="dot-grid-svg">
                <DotGrid />
              </div>
            </div>
            <h2>Experience</h2>
          </div>
          <div className="mid-section">
          hi this is mid
          </div>
          <div className="bottom-section">
          <p>
              Hi there! I’m still a student in my final semester of college, on
              the grind to earn my degree in Computer Science.
              <br></br>
              <br></br>
              I’ve been designing things since I was 13, so I’ve always had a
              fixation for designing anything visual related as
              beautiful as I could. Ever since I started programming, I knew I
              wanted to use those skills to bring my designs to life.

            </p>
          </div>
        </div>
        <div className="right-section">
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
