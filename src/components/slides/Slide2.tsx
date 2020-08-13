import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";

import { graphql, useStaticQuery } from "gatsby";

function Slide2() {
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
    <div className="slide-2">
      <div className="info-card">
        <div className="profile-pic">
          <Img fluid={images.profile.childImageSharp.fluid} />
        </div>

        <div className="info-section">
          <div className="bullet">
            <div className="card-subhead">Currently</div>
            <div className="description">
              <p>
                Learning about NLP and building applications in React and React
                Native
              </p>
            </div>
          </div>
          <div className="bullet">
            <div className="card-subhead">Previously</div>
            <div className="description">
              <p>Worked at Cigna for 1 year as a Full Stack Intern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
