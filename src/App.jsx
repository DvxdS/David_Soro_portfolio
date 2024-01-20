// App.jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/stacks';
import Skills from './components/skills';
import Projects from './components/projects';
import Contacts from './components/contacts';

function App() {
  return (
    <BrowserRouter>
   
      <div className="relative z-0">
        <Navbar />
        
      </div>
      <div>
        <Home/>
        <About/>
      </div>
      <div>
        <Stack/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
    

</BrowserRouter>
  );
}

export default App;



