import * as React from "react";
import { Link } from "gatsby";

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>;
};

function Footer(props: HeaderProps) {
  const [logoHovered, setLogoHovered] = React.useState(false);

  const logoStyleProps = {
    color: "white",
  };

  // Makes the mouse cursor bigger when hovering over nav links
  const onHoverLinks = () => {
    props.mouseCursor.current?.classList.add("cursor-grow");
  };

  // Removes the cursor growth effect after no longer hovering on nav links
  const onLeaveLinks = () => {
    props.mouseCursor.current?.classList.remove("cursor-grow");
    setLogoHovered(false);
  };

  return (
    <footer>
      <div className="container">
        <Link
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
          to="https://github.com/arif-bashar"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
          to="https://www.behance.net/arifbashar/"
          target="_blank"
        >
          Behance
        </Link>
        <Link
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
          to="https://www.linkedin.com/in/arif-bashar/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
