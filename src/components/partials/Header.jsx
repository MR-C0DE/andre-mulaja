import React from "react";
import { useState } from "react";
import "../../styles/header.css";
import { Link, Outlet } from "react-router-dom";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import Menu from "./Menu";
import DownloadCVButton from "./DownloadCVButton";
const Header = () => {
  const { width } = useScreenSize();
  return (
    <div className="header-container">
      <div className="header-content wrapper-0">
        <Link to={"/"}>
          <img className="logo" src="logo.png" alt="" />
          <h1 style={{ display: "none" }}>Andre Mulaja</h1>
        </Link>
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
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                  <DownloadCVButton />
              </li>
            </ul>
          </nav>
        ) : (
          <Menu />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export { Header };
