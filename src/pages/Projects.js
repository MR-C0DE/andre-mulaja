import React from 'react'
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';
import Project from '../components/partials/Project';
import ProjectInfo from '../components/partials/ProjectInfo';
const Projects = () => {
  return (
    <React.Fragment>
      <Header />
        <div className='page-content wrapper-1'>
          <ProjectInfo />
          <Project />
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Projects