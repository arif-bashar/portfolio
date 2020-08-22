import React, { useRef, useEffect, useState, useMemo } from "react";
import "../styles/styles.scss";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import gsap, { TimelineMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WelcomeSection from "../components/sections/WelcomeSection";
import Slide2 from "../components/sections/AboutSection";

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import AboutSection from "../components/sections/AboutSection";

function IndexPage(props: PageProps) {
  let containerRef = useRef<HTMLDivElement>(null);
  let slidingRef = useRef<HTMLDivElement | null>(null);
  let mouseCursor = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidingBG, setSlidingBG] = useState("paused");

  const slidingTL = useMemo(() => gsap.timeline({ paused: true }), []);

  let isScrolling: NodeJS.Timeout;

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

  return (
    <>
      <div ref={mouseCursor} className="cursor"></div>
      <Header mouseCursor={mouseCursor} />
      <main ref={containerRef}>
        <WelcomeSection />
        <AboutSection />
      </main>
      <Footer mouseCursor={mouseCursor}/>
    </>
  );
}

export default IndexPage;
