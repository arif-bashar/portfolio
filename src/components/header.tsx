import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "gatsby";
import gsap from "gsap";

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>;
};

function Header(props: HeaderProps) {
  const [logoHovered, setLogoHovered] = useState(false);
  const [animStatus, setAnimStatus] = useState("pause");

  let headerRef = useRef<HTMLElement | null>(null);

  const showHeaderTL = useMemo(() => gsap.timeline({ paused: true }), []);
  
  let prevScroll = window.pageYOffset;

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

  const scrollHandler = () => {
    let currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll)
      setAnimStatus("play");
    else
      setAnimStatus("reverse")
  }

  const wheelHandler = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      setAnimStatus("play");
    } else if (event.deltaY < -1) {
      setAnimStatus("reverse");
    }
  };

  useEffect(() => {
    // window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("scroll", scrollHandler, { passive: false});
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    showHeaderTL.to(headerRef.current, {
      duration: 0.2,
      opacity: 0,
      ease: "power3.easeOut",
    });
  }, []);

  useEffect(() => {
    if (animStatus == "play") showHeaderTL.play();
    else if (animStatus == "reverse") showHeaderTL.reverse();
  }, [animStatus]);

  return (
    <header ref={headerRef}>
      <div className="inner-header">
        <div className="logo">
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
            <Link
              onMouseLeave={onLeaveLinks}
              onMouseOver={onHoverLinks}
              to="/#about"
            >
              About
            </Link>
            <Link
              onMouseLeave={onLeaveLinks}
              onMouseOver={onHoverLinks}
              to="/#experience"
            >
              Experience
            </Link>
            <Link
              onMouseLeave={onLeaveLinks}
              onMouseOver={onHoverLinks}
              to="/#projects"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
