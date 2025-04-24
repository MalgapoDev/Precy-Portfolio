import { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    // Close mobile menu when navigating
    setIsOpen(false);
    
    // Find the section element
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a onClick={() => scrollToSection('hero')} className="logo">PIE</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-menu">
            <div className="nav-links">
              <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
              <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
              <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
              <a onClick={() => scrollToSection('contacts')} className="nav-link">Contacts</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <div className="hamburger-icon">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            <a onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</a>
            <a onClick={() => scrollToSection('about')} className="mobile-nav-link">About</a>
            <a onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</a>
            <a onClick={() => scrollToSection('contacts')} className="mobile-nav-link">Contacts</a>
          </div>
        </div>
      )}
    </nav>
  );
}