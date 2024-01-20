// Layout.jsx
import React from 'react';
import Home from './Home';
import About from './About';
import Stack from './stacks';
import Skills from './skills';
import Projects from './projects';
import Contacts from './contacts';

const Layout = () => {
  return (
    <>
      <Home />
      <About />
      <Stack />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default Layout;
