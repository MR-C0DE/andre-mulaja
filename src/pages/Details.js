import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/partials/Header';
import { Footer } from '../components/partials/Footer';
import { useLocation } from 'react-router-dom';
import { user } from '../data/user';
import ProjectDetails from '../components/partials/ProjectDetails';

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get('id');

  if (!user || !user.projects) {
    return (
      <React.Fragment>
        <Helmet>
          <title>No Projects Found - Andre Mulaja Portfolio</title>
          <meta name="description" content="No projects are available at this time. Please check back later for more updates." />
          <meta property="og:image" content="/logo.png" />
        </Helmet>
        <Header />
        <div className='page-content wrapper-1'>
          <h2>Aucun projet trouvé.</h2>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  const project = user.projects.find(p => p.id == itemId);

  if (!project) {
    return (
      <React.Fragment>
        <Helmet>
          <title>Project Not Found - Andre Mulaja Portfolio</title>
          <meta name="description" content={`No project found for ID ${itemId}. Please verify the ID or check other projects.`} />
          <meta property="og:image" content="/logo.png" />
        </Helmet>
        <Header />
        <div className='page-content wrapper-1'>
          <h2>Projet non trouvé pour l'ID {itemId}.</h2>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{project.name} - Andre Mulaja Portfolio</title>
        <meta name="description" content={`Details about the project named "${project.name}".`} />
        <meta property="og:image" content={project.cover} />
      </Helmet>
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
