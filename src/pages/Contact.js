import React from 'react'
import ContactInformation from '../components/partials/ContactInformation';
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
        <div className='page-content wrapper-1'>
          <ContactInformation />
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact