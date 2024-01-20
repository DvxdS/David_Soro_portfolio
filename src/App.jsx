// App.jsx
// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/stacks';
import Skills from './components/skills';
import Projects from './components/projects';
import Contacts from './components/contacts';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <div className="relative z-0">
  <BrowserRouter>
      <Navbar />

      <Home />
      <About />
      <Stack />
      <Skills />
      <Projects />
      <Contacts />
  </BrowserRouter>
      
      

      
    </div>

  
  );
}

export default App;





