import * as React from "react";
import { Link } from "gatsby";

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>;
};

function Header(props: HeaderProps) {
  const [logoHovered, setLogoHovered] = React.useState(false);

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

  return (
    <header>
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
