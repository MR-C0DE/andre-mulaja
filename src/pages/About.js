import React from 'react';
import { Helmet } from 'react-helmet';
import AboutInformation from '../components/partials/AboutInformation';
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About - Andre Mulaja</title>
        <meta name="description" content="Learn more about Andre Mulaja, his mission, and his team." />
        <meta property="og:image" content={'%PUBLIC_URL%/and.jpg'} />
      </Helmet>
      <Header />
        <div className='page-content wrapper-1'>
          <AboutInformation />
        </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
