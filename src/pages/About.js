import React from 'react'
import AboutInformation from '../components/partials/AboutInformation';
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';

const About = () => {
  return (
    <React.Fragment>
      <Header />
        <div className='page-content wrapper-1'>
          <AboutInformation />
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default About