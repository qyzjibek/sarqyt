// NavBar.jsx
import React from 'react';
import './NavBar.css'; // Make sure the path to your CSS file is correct'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-items topbar-active">
        <a href="/overview">Overview</a>
        <a href="/features">Features</a>
        <a href="/roadmap">Roadmap</a>
        <a href="/faq">FAQ</a>
        <a href="/about">About Dora</a>
      </div>
      <button className="get-started">Get Started</button>
    </nav>
  );
};

export default NavBar;
