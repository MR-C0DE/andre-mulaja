import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Articles from '../../pages/Articles';
import Contact from '../../pages/Contact';
import NoFound from '../../pages/404';
import Details from '../../pages/Details';

const Content = () => {
  return (
    <div className='Content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<NoFound />} />
        </Routes>

    </div>
  );
}

export {Content}