import React from 'react';
import { Helmet } from 'react-helmet';
import ContactInformation from '../components/partials/ContactInformation';
import { Footer } from '../components/partials/Footer';
import FormContact from '../components/partials/FormContact';
import { Header } from '../components/partials/Header';

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact - Andre Mulaja</title>
        <meta name="description" content="Get in touch with Andre Mulaja for inquiries, collaboration opportunities, or to learn more about his work and projects. Andre is always open to discussing new ideas and potential partnerships." />
      </Helmet>
      <Header />
        <div className='page-content wrapper-1'>
          <ContactInformation />
          <FormContact />
        </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
