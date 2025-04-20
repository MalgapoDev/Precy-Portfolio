import React from "react";
import profileImage from "../assets/precy.jpg";
import "./Heropage.css";

const Hero = ({ aboutRef }) => {
  // Function to smoothly scroll to the About section
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container">
      <img className="profile-picture" src={profileImage} alt="Precy Ibarra Elebado" />
      <h1 className="quote">“There are no straight lines or sharp corners in nature.”</h1>
      <p className="name">Hi! I am Precy Ibarra Elebado</p>

      <div className="social-icons">
        <a href="https://www.facebook.com/elx.presylaa" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/presylaae/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Scroll-down arrow triggers the scrolling */}
      <div className="scroll-down" onClick={scrollToAbout}>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Hero;
