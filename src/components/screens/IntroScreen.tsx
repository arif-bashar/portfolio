import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import gsap from "gsap";

import { graphql, useStaticQuery } from "gatsby";
import { Droplet, Puddle } from "../SvgIcons";

function IntroScreen() {
  return (
    <div className="intro-screen">
      <div className="droplet-container">
        <Droplet />
      </div>
      <div className="puddle-container">
        <Puddle />
      </div>
    </div>
  );
}

export default IntroScreen;
