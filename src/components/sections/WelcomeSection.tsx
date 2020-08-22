import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
} from "react";
import gsap from "gsap";
import { Transition } from "react-transition-group";
import { BrowserMock } from "../SvgIcons";

function WelcomeSection() {
  let nameRef = useRef<HTMLDivElement>(null);
  let helloRef = useRef<SVGSVGElement | null>(null);
  let pathRef = useRef<SVGPathElement | null>(null);
  const [animStatus, setAnimStatus] = useState("pause");
  const scaleHelloTL = useMemo(() => gsap.timeline({ paused: true }), []);

  let isScrolling: NodeJS.Timeout;

  // Calls name entrance animation after page load
  useEffect(() => {
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

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  useEffect(() => {
    gsap.set(helloRef.current, {
      attr: {
        width: 620,
        height: 300,
        viewBox: "-20 0 144 41",
      },
    });
    scaleHelloTL
      .to(helloRef.current, {
        ease: "power3.easeOut",
        attr: {
          width: 920,
          height: 165,
          viewBox: "0 0 620 165",
        },
      })
      .to(
        nameRef.current,
        {
          ease: "power3.easeOut",
          height: 300,
        },
        0
      )
      .to(nameRef.current, {
        background: "transparent",
      })
      .to(
        ".sliding-bg",
        {
          duration: 1,
          ease: "back.out(1.7)",
          scaleX: 0,
        },
        "+=0.2"
      )
      .to(
        helloRef.current,
        {
          duration: 0.5,
          ease: "power3.easeOut",
          attr: {
            viewBox: "0 160 620 165",
          },
        },
        "+=0.2"
      );
    // scaleHelloTL.from()
    // scaleHelloTL.from(".top-title", {
    //   scale: 10,
    //   left: '50%',
    //   xPercent: -50,
    //   ease: "power3.easeOut",
    //   onComplete: () => {
    //     props.setRevealed(true);
    //   },
    // });
  }, []);

  useEffect(() => {
    if (animStatus == "play") scaleHelloTL.play();
    else if (animStatus == "reverse") scaleHelloTL.reverse();
    else if (animStatus == "pause") scaleHelloTL.pause();
  }, [animStatus]);

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
    <div
      className="welcome-section"
      onMouseMove={event => moveNameonMouse(event, nameRef)}
    >
      <div className="browser-content">
        <h1>Arif Bashar.</h1>
        <em>ah-reef &nbsp; &nbsp; bah-shar</em>
        <p>
          A human being (not a robot &#128559;) who took 3.5 years to become a software
          engineer and realized that he really likes designing and building
          beautiful applications in React and React Native.
        </p>
      </div>
      <div className="browser-svg">
        <BrowserMock />
      </div>
    </div>
  );
}

export default WelcomeSection;
