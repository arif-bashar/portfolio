import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";
import { DotGrid } from "../SvgIcons";
import Tag from "../Tag";
import MenuButton from "../MenuButton";
import SectionNumber from "../SectionNumber";

function ExperienceSection() {
  let menuRef = useRef<HTMLDivElement | null>(null);

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (menuRef.current != null) {
      menuRef.current.style.cursor = "grabbing";
      menuRef.current.style.userSelect = "none";
    
    pos = {
      left: menuRef.current.scrollLeft,
      top: menuRef.current.scrollTop,

      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = (e: MouseEvent) => {

    // Delta of mouse travel
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    if (menuRef.current != null){
    menuRef.current.scrollTop = pos.top - dy;
    menuRef.current.scrollLeft = pos.left - dx;
    }
};

const mouseUpHandler = function() {
  if (menuRef.current != null){
    menuRef.current.style.cursor = 'grab';
    menuRef.current.style.removeProperty('user-select');
  }

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

  useEffect(() => {

  }, []);

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
    <section id="experience" className="experience-section">
      <div className="inner-container">
        <div className="left-section">
          <div className="top-section">
            <SectionNumber num="02" />
            <h2>Experience</h2>
          </div>
          <div
            ref={menuRef}
            className="mid-section"
            onMouseDown={mouseDownHandler}
          >
            <MenuButton label="Cigna" active={true} />
            <MenuButton label="PlzHireMe" active={false} />
            <MenuButton label="Amazon" active={false} />
            <MenuButton label="MetaLab" active={false} />
            <MenuButton label="Dribbble" active={false} />
          </div>
          <div className="bottom-section">
            <p>
              Hi there! I’m still a student in my final semester of college, on
              the grind to earn my degree in Computer Science.
              <br></br>
              <br></br>
              I’ve been designing things since I was 13, so I’ve always had a
              fixation for designing anything visual related as beautiful as I
              could. Ever since I started programming, I knew I wanted to use
              those skills to bring my designs to life.
            </p>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </section>
  );
}

export default ExperienceSection;
