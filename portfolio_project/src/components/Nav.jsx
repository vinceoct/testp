import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navcont'>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
    </div>
  );
};

export default Nav;
