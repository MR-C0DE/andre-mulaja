import React from 'react'
import Experience from '../components/partials/Experience';
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';
import Project from '../components/partials/Project';
import Resume from '../components/partials/Resume';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
        <div className='page-content wrapper-1'>
          <Resume />
          <Project doSlice={true} />
          <Experience />
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home