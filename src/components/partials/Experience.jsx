import React from "react";
import { user } from "../../data/user"; // Assurez-vous d'importer correctement les données d'utilisateur
import "../../styles/experience.css"; // Assurez-vous d'importer correctement votre fichier de style

const Experience = () => {
  return (
    <div className="experience-container">
  
      {user.experience.map((exp, index) => (
        <div className="experience-item" key={index}>
          <h3>{exp.role}</h3>
          <p className="company">{exp.company}</p>
          <p className="dates">
            {exp.startDate} - {exp.endDate}
          </p>
          <p className="platform">{exp.platform.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
