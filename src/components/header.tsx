import React, { useEffect, useState, useRef, useMemo, RefObject } from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import gsap from "gsap";

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>;
};

function Header(props: HeaderProps) {
  const [logoHovered, setLogoHovered] = useState(false);
  const [animStatus, setAnimStatus] = useState("pause");
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  let headerRef = useRef<HTMLElement | null>(null);
  let logoRef = useRef<HTMLDivElement | null>(null);
  let aboutRef = useRef<HTMLDivElement | null>(null);
  let expRef = useRef<HTMLDivElement | null>(null);
  let projectsRef = useRef<HTMLDivElement | null>(null);

  const showHeaderTL = useMemo(() => gsap.timeline({ paused: true }), []);

  const logoStyleProps = {
    color: "white",
  };

  // Makes the mouse cursor bigger when hovering over nav links
  const onHoverLinks = () => {
    props.mouseCursor.current?.classList.add("cursor-grow");
  };

  // Makes the mouse cursor bigger and changes logo text color when hovering over logo
  const onHoverLogo = () => {
    props.mouseCursor.current?.classList.add("cursor-grow");
    setLogoHovered(true);
  };

  // Removes the cursor growth and changes logo text color back to its original
  const onLeaveLogo = () => {
    props.mouseCursor.current?.classList.remove("cursor-grow");
    setLogoHovered(false);
  };

  // Removes the cursor growth effect after no longer hovering on nav links
  const onLeaveLinks = () => {
    props.mouseCursor.current?.classList.remove("cursor-grow");
    setLogoHovered(false);
  };

  const scrollHandler = (e: Event) => {
    const newScrollPos = window.scrollY;

    if (newScrollPos > scrollPos) {
      console.log("we playin");
      setAnimStatus("play");
    } else {
      console.log("we reversin");
      setAnimStatus("reverse");
    }

    setScrollPos(newScrollPos);
  };

  const wheelHandler = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      setAnimStatus("play");
    } else if (event.deltaY < -1) {
      setAnimStatus("reverse");
    }
  };

  useEffect(() => {
    // window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollPos]);

  useEffect(() => {
    showHeaderTL.to([aboutRef.current, expRef.current, projectsRef.current], {
      duration: 0.1,
      stagger: 0.07,
      x: 20,
      background: "#afa1ff",
      opacity: 0,
      ease: "power3.easeOut",
    }).to(logoRef.current, {
      duration: 0.1,
      color: "red",
      x: 5,
      skewY: 2,
      opacity: 0
    }, "<")
  }, []);

  useEffect(() => {
    if (animStatus == "play") showHeaderTL.play();
    else if (animStatus == "reverse") showHeaderTL.reverse();
  }, [animStatus]);

  return (
    <header ref={headerRef}>
      <div className="inner-header">
        <div ref={logoRef} className="logo">
          <Link
            style={logoHovered ? logoStyleProps : undefined}
            onMouseLeave={onLeaveLogo}
            onMouseOver={onHoverLogo}
            to="/"
          >
            Arif Bashar.
          </Link>
          Software Engineer
        </div>
        <div className="navigation">
          <nav>
            <div ref={aboutRef}>
              <Link
                id="about-link"
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
                to="/#about"
              >
                About
              </Link>
            </div>
            <div ref={expRef}>
            <Link
              id="exp-link"
              onMouseLeave={onLeaveLinks}
              onMouseOver={onHoverLinks}
              to="/#experience"
            >
              Experience
            </Link>
            </div>
            <div ref={projectsRef}>
            <Link
              onMouseLeave={onLeaveLinks}
              onMouseOver={onHoverLinks}
              to="/#projects"
            >
              Projects
            </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
