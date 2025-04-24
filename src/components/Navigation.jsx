import { useState, useEffect } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          
          {!isMobile && (
            <div className="desktop-menu">
              <div className="nav-links">
                <span onClick={() => scrollToSection('hero')} className="nav-link">Home</span>
                <span onClick={() => scrollToSection('about')} className="nav-link">About</span>
                <span onClick={() => scrollToSection('projects')} className="nav-link">Projects</span>
                <span onClick={() => scrollToSection('contacts')} className="nav-link">Contacts</span>
              </div>
            </div>
          )}
          
          {isMobile && (
            <button 
              className="hamburger-button" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          )}
        </div>
        
        {isMobile && isOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              <span onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</span>
              <span onClick={() => scrollToSection('about')} className="mobile-nav-link">About</span>
              <span onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</span>
              <span onClick={() => scrollToSection('contacts')} className="mobile-nav-link">Contacts</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}