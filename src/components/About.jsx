import React, { useState, useEffect, useCallback } from "react";
import "./About.css";

const About = React.forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const awards = [
    {
      title: "NCII Passer Certificate",
      institution: "Nambalan National High School",
      year: "2020",
      description: "description."
    },
    {
      title: "Basic Carpentry",
      institution: "Valenzuela City Technological College",
      year: "year",
      description: "description"
    },
    {
      title: "Certificate Title",
      institution: "institution",
      year: "year",
      description: "description"
    },
    {
      title: "Certificate Title",
      institution: "institution",
      year: "year",
      description: "description"
    }
  ];

  // Wrap nextSlide in useCallback to prevent recreating on each render
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => 
      prevSlide === awards.length - 1 ? 0 : prevSlide + 1
    );
  }, [awards.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? awards.length - 1 : prevSlide - 1
    );
  }, [awards.length]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div ref={ref} className="about-container">
      <h2 className="about-title">About Me</h2>
      
      <div className="about-summary">
        <p>I am a detail-oriented Civil Technology professional with expertise in construction methods, structural design, and project management. Skilled in drafting, surveying, and material testing, I collaborate with engineers and contractors to deliver high-quality, sustainable projects. Passionate about innovation and committed to excellence in the built environment.</p>
      </div>
      
      <div className="about-details-container">
        <div className="about-education">
          <h3 className="section-title">
            <i className="education-icon">📋</i> Educational Background
          </h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Valenzuela City Technological College</h4>
                <p className="degree">Civil Technology</p>
                <p className="year">2021 - Present</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Nambalan National High School</h4>
                <p className="degree">General Academic Strand (GAS)</p>
                <p className="year">2018 - 2020</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Nambalan National High School</h4>
                <p className="degree">Junior High School</p>
                <p className="year">2014 - 2018</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Pugo Cecilio Elementary School</h4>
                <p className="degree">Junior High School</p>
                <p className="year">2008 - 2014</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-awards">
          <h3 className="section-title">
            <i className="certificate-icon">✨</i> Awards/Certificates
          </h3>
          
          <div className="carousel-container">
            <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {awards.map((award, index) => (
                <div className="award-card carousel-slide" key={index}>
                  <h4>{award.title}</h4>
                  <div className="certificate-details">
                    <p className="institution">{award.institution}</p>
                    <p className="year">{award.year}</p>
                  </div>
                  <p className="description">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-control prev" onClick={prevSlide}>❮</button>
              <div className="carousel-indicators">
                {awards.map((_, index) => (
                  <button 
                    key={index} 
                    className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
              <button className="carousel-control next" onClick={nextSlide}>❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;