import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
