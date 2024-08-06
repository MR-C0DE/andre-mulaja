import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';
import Project from '../components/partials/Project';
import ProjectInfo from '../components/partials/ProjectInfo';

const Projects = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Projects - Andre Mulaja</title>
        <meta name="description" content="Explore the various projects developed by Andre Mulaja, showcasing skills in web, desktop, and mobile app development, as well as cloud computing." />
      </Helmet>
      <Header />
        <div className='page-content wrapper-1'>
          <ProjectInfo />
          <Project />
        </div>
      <Footer />
    </React.Fragment>
  );
}

export default Projects;
