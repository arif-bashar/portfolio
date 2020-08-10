import * as React from "react";
import { Link } from "gatsby";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">Arif Bashar.</Link>
            Software Engineer
          </div>
          <div className="navigation">
            <nav>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
