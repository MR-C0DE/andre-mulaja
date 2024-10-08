import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "../../styles/menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Menu">
      <div onClick={toggleMenu} className="MenuIcon">
        {menuOpen ? <FaTimes /> : <FaBars />}{" "}
       
      </div>
      {menuOpen && (
        <nav className={"MenuNav"}>
          <ul className={"MenuList"}>
            <li className="MenuItem">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="MenuItem">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="MenuItem">
              <Link to={"/projects"}>Projects</Link>
            </li>

            <li className="MenuItem">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
