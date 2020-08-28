import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import { BrowserMock } from "../SvgIcons";

function WelcomeSection() {
  let nameRef = useRef<HTMLDivElement>(null);
  let contentRef = useRef<HTMLDivElement>(null);
  let helloRef = useRef<SVGSVGElement | null>(null);
  let pathRef = useRef<SVGPathElement | null>(null);
  const [animStatus, setAnimStatus] = useState("pause");
  const scaleHelloTL = useMemo(() => gsap.timeline({ paused: true }), []);

  let isScrolling: NodeJS.Timeout;

  // Calls name entrance animation after page load
  useEffect(() => {
    gsap.from(contentRef.current, {
      duration: 0.5,
      // opacity: 0,
      y: -30,
      ease: "power3.easeIn"
    });
    // if (!props.revealed) animateName();
  }, []);

  const wheelHandler = (event: WheelEvent) => {
    window.clearTimeout(isScrolling);

    console.log(event.deltaY);
    if (event.deltaY > 0) {
      setAnimStatus("play");
      // setCurrentSlide(1);
      // if (!nameRevealed) setNamedRevealed(true);
    } else if (event.deltaY < 0) {
      setAnimStatus("reverse");
      // setCurrentSlide(0);
    }

    isScrolling = setTimeout(() => {
      // setAnimStatus("play");
    }, 66);
  };

  // useEffect(() => {
  //   window.addEventListener("wheel", wheelHandler, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (animStatus == "play") scaleHelloTL.play();
  //   else if (animStatus == "reverse") scaleHelloTL.reverse();
  //   else if (animStatus == "pause") scaleHelloTL.pause();
  // }, [animStatus]);

  // Name moves in direction of mouse
  const moveNameonMouse = (
    event: React.MouseEvent,
    nameNode: React.RefObject<HTMLDivElement>
  ) => {
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;

    gsap.to(nameNode.current, 0.6, {
      x: x * 30,
      y: y * 30,
      ease: "power4.easeOut",
    });
  };

  return (
    <section
      className="welcome-section"
      // onMouseMove={event => moveNameonMouse(event, nameRef)}
    >
      <div className="browser">
        <div ref={contentRef} className="content">
          <h1>Arif Bashar.</h1>
          <em>ah-reef &nbsp; &nbsp; bah-shar</em>
          <p>
            A human being (not a robot &#128559;) who took 3.5 years to become a
            software engineer and realized that he really likes designing and
            building beautiful a pplications in React and React Native.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
