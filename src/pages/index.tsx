import React, { useRef, useEffect, useState } from "react";
import "../styles/styles.scss";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";

// Components
import Header from "../components/header";
import Image from "../components/image";

function IndexPage(props: PageProps) {
  let containerRef = useRef<HTMLDivElement>(null);
  let mouseCursor = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nameRevealed, setNamedRevealed] = useState(false);

  const slides = [
    {
      src: <Slide1 revealed={nameRevealed} />,
    },
    {
      src: <Slide2 />,
    },
  ];

  const mouseCursorHandler = (event: MouseEvent) => {
    if (mouseCursor.current != null) {
      mouseCursor.current.style.top = event.pageY + "px";
      mouseCursor.current.style.left = event.pageX + "px";
    }
  };
  const wheelHandler = (event: WheelEvent) => {
    if (event.deltaY >= 1) {
      setCurrentSlide(1);
      if (!nameRevealed) setNamedRevealed(true);
    } else if (event.deltaY < 1) {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseCursorHandler);
    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      window.removeEventListener("wheel", wheelHandler);
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
      <BackgroundImage
        className="background-image"
        fluid={images.background.childImageSharp.fluid}
      >
        <div className="main-container" ref={containerRef}>
          {slides[currentSlide].src}
        </div>
      </BackgroundImage>
    </>
  );
}

export default IndexPage;
