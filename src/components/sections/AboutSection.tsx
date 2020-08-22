import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";
import { DotGrid } from "../SvgIcons";
import Tag from "../Tag";

function AboutSection() {
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
    <div id="about" className="about-section">
      <div className="inner-container">
        <div className="left-section">
          <div className="top-section">
            <div className="number-container">
              <div className="square"></div>
              <div className="number">
                <strong>01</strong>
              </div>
              <div className="dot-grid-svg">
                <DotGrid />
              </div>
            </div>
            <h2>About Me</h2>
          </div>
          <div className="mid-section">
            <p>
              Hi there! I’m still a student in my final semester of college, on
              the grind to earn my degree in Computer Science.
              <br></br><br></br>
              I’ve been designing things since I was 13, so I’ve always had a
              natural fixation for designing anything visual related as
              beautiful as I could. Ever since I started programming, I knew I
              wanted to use those skills to bring my designs to life.
              <br></br><br></br>
              In my free time, I’ve been learning to build applications in React
              and React Native. While my main focus has been in React, I’ve also
              been dabbling in NLP and using it to reinforce some of the
              fundamental topics I’ve learned about in Artificial Intelligence.
            </p>
          </div>
          <div className="bottom-section">
            <Tag label="TypeScript" />
            <Tag label="React" />
            <Tag label="React Native" />
            <Tag label="Node.js" />
            <Tag label="Python" />
          </div>
        </div>
        <div className="right-section">
          <div className="circle"></div>
          <Img className="profile-pic" fluid={images.profile.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
