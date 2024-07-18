import React from 'react';
import "../../styles/ProjectDetails.css";
import ProjectFiles from './ProjectFiles';

const ProjectDetails = ({ project }) => {
  return (
    <div className='project-details-container'>
      <h2>{project.name}</h2>
      <p>{project.description}</p>

      {/* Affichage des fichiers */}
      <ProjectFiles files={project.media.files} />
      
      
      <p>{project.detail}</p>
      
      {/* Affichage des technologies utilisées */}
      <div className='technologies-section'>
        <p>{project.technologies.join(", ")}</p>
        
      </div>
      
      {/* Affichage des liens */}
      <div className='links-section'>
        <h3>Liens:</h3>
        <ul>
          <li><a href={project.links.GitHub} target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          <li><a href={project.links.production} target='_blank' rel='noopener noreferrer'>Production</a></li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProjectDetails;
