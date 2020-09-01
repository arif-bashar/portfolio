import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";
import { graphql, useStaticQuery } from "gatsby";

// Components
import MenuButton from "../MenuButton";
import SectionNumber from "../SectionNumber";

// Animations
import moveNumElement from "../../animations/moveNumElement";

function ExperienceSection() {
  let menuRef = useRef<HTMLDivElement | null>(null);

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
    if (menuRef.current != null) {
      menuRef.current.scrollTop = pos.top - dy;
      menuRef.current.scrollLeft = pos.left - dx;
    }
  };

  const mouseUpHandler = function () {
    if (menuRef.current != null) {
      menuRef.current.style.cursor = "grab";
      menuRef.current.style.removeProperty("user-select");
    }

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  useEffect(() => {}, []);

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
    <section
      onMouseMove={event => moveNumElement(event)}
      id="experience"
      className="experience-section"
    >
      <div className="section-container">
        <div className="top-section">
          <h2>Experience</h2>
        </div>
        <div
          ref={menuRef}
          className="exp-mid-section"
          onMouseDown={mouseDownHandler}
        >
          <div className="menu-container">
            <MenuButton label="Cigna" active={true} />
            <MenuButton label="Plz Hire Me" active={false} />
          </div>
        </div>
        <div className="exp-content-section">
          <h3>
            Full Stack Intern <a href="https://www.cigna.com/">@Cigna</a>
          </h3>
          <div className="job-date">May 2019 - May 2020</div>
          <div className="exp-job-desc">
            <ul>
              <li>
                Built a serverless RESTful API using Node.js, AWS DynamoDB, AWS
                Lambda, and AWS API Gateway
              </li>
              <li>
                Translated SQL batch scripts from the Apache Impala engine over
                to Apache Hive in order to reduce the poor performance end-users
                were experiencing running small queries
              </li>
              <li>
                Designed the UI/UX for a progressive web application (PWA) that
                won the Cigna Summer Innovations Project against 5 other teams
              </li>
              <li>
                Used the Angular framework to build components in Typescript for
                the mentioned PWA
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-section">
          <div className="horizontal-line"></div>
          <SectionNumber num="02" />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
