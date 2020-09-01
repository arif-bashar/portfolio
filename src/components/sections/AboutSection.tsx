import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { graphql, useStaticQuery } from "gatsby";

// Components
import Tag from "../Tag";
import SectionNumber from "../SectionNumber";

// Animations
import moveNumElement from "../../animations/moveNumElement";

function AboutSection() {
  let titleRef = useRef<HTMLHeadingElement | null>(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(titleRef.current, {
  //     delay: 0.5,
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: ".about-section",
  //       // start: "+=100",
  //       // markers: true,
  //       scrub: true,
  //     },
  //     // scale: 2,
  //     x: 50,
  //     opacity: 0.5,
  //     ease: "power3.easeIn",
  //   });
  // }, []);

  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 40, maxHeight: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section
      onMouseMove={event => moveNumElement(event)}
      id="about"
      className="about-section"
    >
      <div className="section-container">
        <div className="top-section">
          <h2 ref={titleRef}>About Me</h2>
          <div className="profile-pic">
            <img src={require("../../images/profile-pic.jpg")} />
          </div>
        </div>
        <div className="about-mid-section">
          <p>
            Hi there! I'm Arif. I'm a Computer Science student graduating from
            <a href="https://www.mtsu.edu/"> MTSU</a> in December 2020.
            <br></br>
            <br></br>
            In my free time, I’ve been learning to build applications in React
            and React Native. While my main focus has been on React, I’ve also
            been dabbling in NLP and using it to reinforce some of the
            fundamental topics I’ve learned about in Artificial Intelligence.
          </p>
          Most recent tech stack:
          <div className="tech-stack">
            <Tag label="TypeScript" />
            <Tag label="React" />
            <Tag label="React Native" />
            <Tag label="Node.js" />
            <Tag label="Python" />
          </div>
        </div>
        <div className="bottom-section">
          <div className="horizontal-line"></div>
          <SectionNumber num="01" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
