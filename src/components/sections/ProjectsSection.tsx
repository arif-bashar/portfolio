import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { graphql, useStaticQuery } from "gatsby";

// Components
import SectionNumber from "../SectionNumber";

// Animations
import moveNumElement from "../../animations/moveNumElement";

function ProjectsSection() {
  return (
    <section
      onMouseMove={event => moveNumElement(event)}
      id="projects"
      className="projects-section"
    >
      <div
        style={{ background: "none", boxShadow: "none" }}
        className="section-container"
      >
        <div className="top-section">
          <SectionNumber num="03" />
          <h2>Projects</h2>
        </div>
        <table cellPadding={0} cellSpacing={0} className="projects-table">
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Technologies</th>
            <th>Link</th>
          </tr>
          <tr>
            <td className="project-name">Spacejam</td>
            <td>2020</td>
            <td className="project-tech">React Native, Redux, TypeScript</td>
            <td>
              <a href="https://github.com/arif-bashar/spacejam" target="_blank">
                Git
              </a>
            </td>
          </tr>
          {/* <tr>
            <td colSpan={4} className="project-desc">
              A music sharing mobile application that allows users to create
              rooms and invite other users. Members of the room can queue music
              that will play through the host's speaker device. Likewise,
              members can also hear playback of the music on their own devices,
              but it will be synced with the host's current timestamp.
            </td>
          </tr> */}
          <tr>
            <td className="project-name">Discord Bot</td>
            <td>2020</td>
            <td className="project-tech">Node.js, Discord.js, TypeScript</td>
            <td>
              <a href="https://github.com/arif-bashar/goon-bot" target="_blank">
                Git
              </a>
            </td>
          </tr>
          {/* <tr>
            <td colSpan={4} className="project-desc">
              A Discord bot that detects when users are messaging profane words
              and reacts by yelling at the user. Currently in the process of
              labeling hundreds of chat messages unique to each user in a server
              to pass through a Naive Bayes classifier in order to predict the
              'emotion' of the particular user.
            </td>
          </tr> */}
          <tr>
            <td className="project-name">Lab Scheduler</td>
            <td>2020</td>
            <td className="project-tech">Node.js, React.js</td>
            <td>
              <a href="https://github.com/arif-bashar/gta-scheduler" target="_blank">
                Git
              </a>
              <a href="https://gtascheduler.netlify.app/" target="_blank">
                Live
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className="bottom-section"></div>
    </section>
  );
}

export default ProjectsSection;
