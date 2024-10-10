import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-expand-md navbar fixed-top">
  <a className="navbar-brand" href="/">
    <span className="logo-text">A K A M E</span>
  </a>

    
      <span className="menu-toggler ml-auto" role="button" onClick={handleToggle}>
        <span className="line"></span>
        <span></span>
        <span></span>
      </span>

  
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="../">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" id="about-link">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" id="projects-link">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" id="contact-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
