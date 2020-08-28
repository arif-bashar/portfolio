import React, { useRef, useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../slices/rootReducer";
import "../styles/styles.scss";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import gsap, { TimelineMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


// Components
import IntroScreen from "../components/sections/IntroScreen";
import Layout from "../components/layout";

function IndexPage() {
  const { introDone } = useSelector((state: RootState) => state.intro);

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

  if (introDone) return <Layout />;
  else return <IntroScreen />;
}

export default IndexPage;
