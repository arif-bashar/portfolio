import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";

// Components
import { Puddle } from "../SvgIcons";

function IntroScreen() {
  let circleRef = useRef<HTMLDivElement | null>(null);
  let screenRef = useRef<HTMLDivElement | null>(null);
  let dropletSVG = useRef<SVGSVGElement | null>(null);
  let dropletPath = useRef<SVGPathElement | null>(null);

  // Droplet Animation Timeline
  const dropletTL = useMemo(() => gsap.timeline({ delay: 1 }), []);

  // Lets us know whether the intro animation has completed or not
  const [introDone, setIntroDone] = useState(false);

  // Callback function after animation completes to update introDone variable
  const onIntroDone = () => {
    setTimeout(() => {
      setIntroDone(true);
    }, 500);
  };

  /* Droplet + Screen Fill Animation on Load:
     The idea is to animate a droplet falling down onto a puddle, soaking up
     the color of the puddle, bouncing back up, and 'exploding' to fill the screen
     with the primary color of the site
  */
  useEffect(() => {
    // Set the droplet to start from a high point
    gsap.set(dropletSVG.current, {
      y: -500,
      opacity: 1,
    });

    // Droplet falls down onto the puddle
    dropletTL
      .to(
        dropletSVG.current,
        {
          duration: 0.5,
          y: 120,
          transformOrigin: "50% 50%",
          ease: "power1.easeIn",
        },
        "bounce2"
      ) // Squash the droplet
      .to(
        dropletSVG.current,
        {
          duration: 0.15,
          transformOrigin: "50% 100%",
          scaleX: 1.5,
          scaleY: 0.6,
          ease: "power1.easeInOut",
        },
        "bounce3-=0.04"
      ) // Droplet bounces back up
      .to(
        dropletSVG.current,
        {
          duration: 0.4,
          y: -60,
          rotation: 180,
          transformOrigin: "50% 50%",
          ease: "power1.easeOut",
        },
        "bounce"
      ) // When the droplet bounces back up, change the fill to soak up the puddle color
      .to(
        dropletPath.current,
        {
          duration: 0.05,
          attr: {
            fill: "#221C47",
          },
          ease: "power1.easeIn",
        },
        "<"
      ) // Bring the tiny circle div into view as soon as droplet bounces up to max height
      .to(
        circleRef.current,
        {
          duration: 0,
          opacity: 1,
        },
        "bounce+=0.4"
      ) // Explode the circle to fill the screen
      .to(
        circleRef.current,
        {
          duration: 0.5,
          scale: 200,
          ease: "power3.easeOut",
        },
        "bounce+=0.4"
      ) // Fade out the circle after it has filled to bring the main site into view
      .to(
        screenRef.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power3.easeOut",
          onComplete: () => onIntroDone(),
        },
        ">"
      );
  }, []);

  if (!introDone) {
    return (
      <div ref={screenRef} className="intro-screen">
        <div className="droplet-container">
          <div ref={circleRef} className="circle-expand"></div>
          <svg
            opacity="0"
            ref={dropletSVG}
            width="34"
            height="67"
            viewBox="0 0 34 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={dropletPath}
              d="M34 45.2133C34 57.2458 26.3888 67 17 67C7.61116 67 0 57.2458 0 45.2133C0 33.1808 7.61116 0 17 0C26.3888 0 34 33.1808 34 45.2133Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="puddle-container">
          <Puddle />
        </div>
      </div>
    );
  } else return null;
}

export default IntroScreen;
