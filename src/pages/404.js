import React from "react";
import { useLocation } from "react-router-dom";
const NoFound = () => {
    const location = useLocation();
    const path = location.pathname.replace("/", "");
  return (
    <div className="NoFound-content wrapper-1">
      <p>404 {path}</p>
    </div>
  );
};

export default NoFound;
