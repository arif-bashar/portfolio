import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap, { TimelineMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/styles.scss";

// Components
import Header from "./header";
import Footer from "./footer";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";

function Layout() {
  let rootRef = useRef<HTMLDivElement | null>(null);
  let containerRef = useRef<HTMLDivElement | null>(null);
  let mouseCursor = useRef<HTMLDivElement | null>(null);

  const mouseCursorHandler = (event: MouseEvent) => {
    if (mouseCursor.current != null) {
      mouseCursor.current.style.top = event.pageY + "px";
      mouseCursor.current.style.left = event.pageX + "px";
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("mousemove", mouseCursorHandler);

    return () => {
      window.removeEventListener("mousemove", mouseCursorHandler);
    };
  }, []);

  useEffect(() => {
    gsap.to(rootRef.current, {
      duration: 1,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    gsap.set(".tracking-circle", {
      opacity: 0,
    })

    gsap.to(".tracking-circle", {
      duration: 0.3,
      scaleX: .5,
      scaleY: .5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".empty-div",
        // end: "+=500",
        // markers: true,
        scrub: true,
      }
    })
  }, []);

  // const images = useStaticQuery(graphql`
  //   query {
  //     background: file(relativePath: { eq: "bg.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div ref={rootRef} className="root">
      {/* <div className="tracking-circle-container">
        <div className="tracking-circle"></div>
      </div> */}
      <div ref={mouseCursor} className="cursor"></div>
      <Header mouseCursor={mouseCursor} />
      <main ref={containerRef}>
        <WelcomeSection />
        {/* <div className="empty-div"></div> */}
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer mouseCursor={mouseCursor} />
    </div>
  );
}

export default Layout;
