import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import { BrowserMock } from "../SvgIcons";

function WelcomeSection() {
  let contentRef = useRef<HTMLDivElement>(null);
  let nameRef = useRef<HTMLHeadingElement>(null);
  let proRef = useRef<HTMLElement>(null);
  let defRef = useRef<HTMLParagraphElement>(null);
  let helloRef = useRef<SVGSVGElement | null>(null);
  let pathRef = useRef<SVGPathElement | null>(null);
  const [animStatus, setAnimStatus] = useState("pause");
  const scaleHelloTL = useMemo(() => gsap.timeline({ paused: true }), []);

  let isScrolling: NodeJS.Timeout;

  // Calls name entrance animation after page load
  useEffect(() => {
    gsap.from(contentRef.current, {
      delay: 0.2,
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power3.easeIn"
    });
  }, []);


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
          <h1 ref={nameRef}>Arif Bashar.</h1>
          <em ref={proRef}>ah-reef &nbsp; &nbsp; bah-shar</em>
          <p ref={defRef}>
            A human being (not a robot &#128559;) who took 3.5 years to become a
            software engineer and realized that he really likes designing and
            building beautiful applications in React and React Native.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
