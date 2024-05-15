import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/stacks';
import Skills from './components/skills';
import Projects from './components/projects';
import Contacts from './components/contacts';
import OpeningAnimation from './components/Animation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainContent(true);
    }, 2000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative z-0">
      <BrowserRouter>
        {showMainContent ? (
          <div className='ml-10 mr-10'>
            <Navbar />
            <div className= "mt-6">
            <Home />
            <About />
            
            <Stack />
            <Skills />
            <Projects />
            <Contacts />

            </div>
          </div>
        ) : (
          <OpeningAnimation />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
