import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/partials/Footer";
import { Header } from "../components/partials/Header";
import "../styles/NoFound.css"; // Assurez-vous d'importer le fichier CSS

const NoFound = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <React.Fragment>
      <Header />
      <div className="NoFound-content wrapper-1">
        <div className="NoFound-container">
          <h1>404</h1>
          <p>
            Oops! The page <strong>{path}</strong> was not found.
          </p>
          <a href="/" className="home-link">
            Go back to Home
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NoFound;
