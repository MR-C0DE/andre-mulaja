import React from 'react'
import { Footer } from '../components/partials/Footer';
import { Header } from '../components/partials/Header';

const Articles = () => {
  return (
    <React.Fragment>
      <Header />
        <div className='page-content wrapper-1'>
          <p>Articles</p>
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Articles