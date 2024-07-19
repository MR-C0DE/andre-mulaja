import React from "react";
import { Link } from "react-router-dom";

import "../../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer-container wrapper-0">
    <nav className="navigation-container">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/projects'}>Projects</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </nav>

    <p>© {year} André Mulaja. All Rights Reserved.</p>
  </div>;
};

export { Footer };
