import React from "react";
import { useState } from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import Menu from "./Menu";
const Header = () => {
  const { width } = useScreenSize();
  return (
    <div className="header-container">
      <div className="header-content wrapper-0">
        <img className="logo" src="logo.png" alt="" />
        {width >= 580 ? (
          <nav className="navigation-container">
            <ul>
              <li className="route">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="route">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="route">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="route">
                <Link to={"/articles"}>Articles</Link>
              </li>
              <li className="route">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <a href={"/Software_Developer.pdf"} download>
                  <button>Resume</button>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <Menu />
        )}
      </div>
    </div>
  );
};

export { Header };
