import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";

function Slide2() {
  let cardRef = useRef<HTMLDivElement | null>(null);
  let picRef = useRef<HTMLDivElement | null>(null);
  let infoRef = useRef<HTMLDivElement | null>(null);

  const revealCard = () => {
    gsap.to(cardRef.current, {
      duration: .8,
      scaleY: 1,
      ease: "power3.inOut"
    });

    gsap.from(picRef.current, {
      delay: 0.5,
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.inOut"
    });

    gsap.from(infoRef.current, {
      delay: .5,
      duration: 1,
      x: 50,
      opacity: 0,
      ease: "power3.inOut"
    });

    
}


  useEffect(() => {
    revealCard();
  }, [])

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
      <div ref={cardRef} className="info-card">
        <div ref={picRef} className="profile-pic">
          <Img fluid={images.profile.childImageSharp.fluid} />
        </div>

        <div ref={infoRef} className="info-section">
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
