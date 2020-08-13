import * as React from "react";
import { Link } from "gatsby";

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>;
};

function Header(props: HeaderProps) {

  const [logoHovered, setLogoHovered] = React.useState(false);

  const logoStyleProps = {
    color: "white"
  }

  // Makes the mouse cursor bigger when hovering over nav links
  const onHoverLinks = () => {
    props.mouseCursor.current?.classList.add("cursor-grow");
    setLogoHovered(true);

  };

  // Removes the cursor growth effect after no longer hovering on nav links
  const onLeaveLinks = () => {
    props.mouseCursor.current?.classList.remove("cursor-grow");
    setLogoHovered(false);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link  style={ logoHovered ? logoStyleProps : undefined } onMouseLeave={onLeaveLinks} onMouseOver={onHoverLinks} to="/">
              Arif Bashar.
            </Link>
            Software Engineer
          </div>
          <div className="navigation">
            <nav>
              <Link
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
                to="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
