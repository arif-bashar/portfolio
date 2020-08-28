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
    window.addEventListener("mousemove", mouseCursorHandler);

    return () => {
      window.removeEventListener("mousemove", mouseCursorHandler);
    };
  }, []);

  useEffect(() => {
    gsap.to(rootRef.current, {
      duration: 1,
      opacity: 1,
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
      <div ref={mouseCursor} className="cursor"></div>
      <Header mouseCursor={mouseCursor} />
      <main ref={containerRef}>
        <WelcomeSection />
        <AboutSection />
        <ExperienceSection />
      </main>
      <Footer mouseCursor={mouseCursor} />
    </div>
  );
}

export default Layout;
