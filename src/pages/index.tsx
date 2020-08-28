import React, { useRef, useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../slices/rootReducer";
import "../styles/styles.scss";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import gsap, { TimelineMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

import WelcomeSection from "../components/sections/WelcomeSection";
import Slide2 from "../components/sections/AboutSection";

// Components
import { wrapRootElement } from "../../gatsby-browser.js";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import { Puddle, Droplet } from "../components/SvgIcons";
import IntroScreen from "../components/screens/IntroScreen";

function IndexPage(props: PageProps) {
  let containerRef = useRef<HTMLDivElement | null>(null);
  let mouseCursor = useRef<HTMLDivElement | null>(null);

  const  { introDone } = useSelector((state: RootState) => state.intro);

  const [scrollPos, setScrollPos] = useState(window.scrollY);

  const scrollHandler = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    let currentScrollPos = window.scrollY;
    setScrollPos(currentScrollPos);
    console.log(scrollPos);
    console.log(containerRef.current.offsetTop);
    console.log(e);
  };

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

  useEffect(() => {}, []);

  const images = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    console.log(introDone);
  if (introDone)
    return (
      <>
        <div ref={mouseCursor} className="cursor"></div>
        <Header mouseCursor={mouseCursor} />
        <main onScroll={scrollHandler} ref={containerRef}>
          <WelcomeSection />
          <AboutSection />
          <ExperienceSection />
        </main>
        <Footer mouseCursor={mouseCursor} />
      </>
    )
  else return <IntroScreen />;
}

export default IndexPage;
