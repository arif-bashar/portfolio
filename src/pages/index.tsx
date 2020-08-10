import React, { useRef, useEffect, useState } from "react";
import "../styles/styles.scss";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import gsap from "gsap";

// Components
import Header from "../components/header";
import Image from "../components/image";

function IndexPage(props: PageProps) {
  let nameRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const rotateNameonMouse = (
    event: React.MouseEvent,
    nameNode: React.RefObject<HTMLDivElement>
  ) => {
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;

    gsap.to(nameNode.current, 0.6, {
      // delay: ,
      x: x * 30,
      y: y * 30,
      // rotationY: x * 100,
      // rotationX: -y * 100,
      ease: "power4.easeOut",
    });
  };

  const animateName = (nameNode: React.RefObject<HTMLDivElement>) => {
    gsap.from(nameNode.current, {
      duration: 2,
      opacity: 0,
      y: 40,
      skewY: 5,
      delay: 0.1,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    animateName(nameRef);
    window.addEventListener("mousemove", updateMousePosition);
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
    <>
      <Header />
      <BackgroundImage
        className="bg-image"
        fluid={images.background.childImageSharp.fluid}
      >
        <div
          onMouseMove={event => rotateNameonMouse(event, nameRef)}
          className="gradient-overlay"
        >
          <div ref={nameRef} className="name-title">
            <h1>Arif Bashar</h1>
          </div>
          <div className="info-card">
            <div className="profile-pic">
              <Img fluid={images.profile.childImageSharp.fluid} />
            </div>
            <div className="info">
              <div className="bullet">
                <div className="card-subhead">Currently</div>
                <div className="description">
                  <p>
                    Learning about NLP and building applications in React and
                    React Native
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      {/* <BackgroundImage
      className="main-bg"
      fluid={bg.indexImage.childImageSharp.fluid}>
        <div className="gradient-overlay">
          hi
        </div>
      </BackgroundImage> */}
    </>
  );
}

export default IndexPage;
