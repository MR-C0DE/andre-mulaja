import React, { useState } from "react";
import { user } from "../../data/user";

import { Link } from "react-router-dom";
import { shuffleArray } from "../../services/shuffleArray";

import "../../styles/projets.comp.css";

const Project = ({ doSlice }) => {
  const [selected, setSelected] = useState(0);
  const [projects, setProjects] = useState(doSlice ? shuffleArray(user.projects) : user.projects);

  const handleFilter = (index) => {
    setSelected(index);

    const filterProjects = (category, slice = false) => {
      const filtered = user.projects.filter(project => project.category === category);
      return slice ? filtered.slice(0, 6) : filtered;
    };

    switch (index) {
      case 1:
        setProjects(filterProjects("School", doSlice));
        break;
      case 2:
        setProjects(filterProjects("Personal", doSlice));
        break;
      case 3:
        setProjects(filterProjects("Taskflow-labs", doSlice));
        break;
      default:
        setProjects(doSlice ? shuffleArray(user.projects) : user.projects);
        break;
    }
  };

  return (
    <div className="projet-comp-container">
      
      <div className="filter">
        Filter by: 
        <div>
            <span className={selected === 0 ? "select" : ""} onClick={() => handleFilter(0)}>All</span> /{" "}
            <span className={selected === 1 ? "select" : ""} onClick={() => handleFilter(1)}>School</span> /{" "}
            <span className={selected === 2 ? "select" : ""} onClick={() => handleFilter(2)}>Personal</span> /{" "}
            <span className={selected === 3 ? "select" : ""} onClick={() => handleFilter(3)}>Taskflow Labs</span>
        </div>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
            <Link to={"/details?id="+project.id}> 
            <div key={index} className="project">
                <div>
                <img className="image-cover" src={project.media.cover} alt="Project cover" />
                </div>
                <div>
                <h3>{project.name}</h3>
                <p>{project.technologies.join(", ")}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
