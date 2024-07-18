import React from 'react';
import { Header } from '../components/partials/Header';
import { Footer } from '../components/partials/Footer';
import { useLocation, useHistory } from 'react-router-dom';
import { user } from '../data/user';
import ProjectDetails from '../components/partials/ProjectDetails';

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get('id');

  // Vérifier si user et user.projects existent
  if (!user || !user.projects) {
    return (
      <React.Fragment>
        <Header />
        <div className='page-content wrapper-1'>
          <h2>Aucun projet trouvé.</h2>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  // Trouver le projet par itemId
  const project = user.projects.find(p => p.id == itemId);

  // Si aucun projet n'est trouvé
  if (!project) {
    return (
      <React.Fragment>
        <Header />
        <div className='page-content wrapper-1'>
          <h2>Projet non trouvé pour l'ID {itemId}.</h2>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  // Si le projet est trouvé, afficher les détails
  return (
    <React.Fragment>
      <Header />
      <div className='page-content wrapper-1'>
        <div>
          <ProjectDetails project={project} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Details;
