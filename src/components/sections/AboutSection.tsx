import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";

function AboutSection() {


  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div id="about" className="about-section">
      about me
    </div>
  );
}

export default AboutSection;
