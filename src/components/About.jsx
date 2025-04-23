import React, { useState, useEffect, useCallback } from "react";
import "./About.css";

const About = React.forwardRef((props, ref) => {
  const skills = [
    {
      title: "Structural Design",
      icon: "🏗️",
      description: "Experience in designing and analyzing structural components for civil engineering projects with focus on stability and safety."
    },
    {
      title: "CAD Drafting",
      icon: "📐",
      description: "Proficient in creating detailed technical drawings and plans using industry-standard CAD software."
    },
    {
      title: "Surveying",
      icon: "🔭",
      description: "Skilled in land surveying techniques and equipment for precise site measurement and analysis."
    },
    {
      title: "Material Testing",
      icon: "🧪",
      description: "Knowledge of testing procedures for construction materials to ensure quality and compliance with standards."
    },
    {
      title: "Project Management",
      icon: "📋",
      description: "Ability to coordinate construction activities, schedules, and resources effectively."
    },
    {
      title: "Sustainability Practices",
      icon: "♻️",
      description: "Understanding of environmentally friendly construction methods and materials for sustainable development."
    }
  ];

  return (
    <div ref={ref} className="about-container">
      <h2 className="about-title">About Me</h2>
      
      <div className="about-summary">
        <p>I am a detail-oriented Civil Technology professional with expertise in construction methods, structural design, and project management. Skilled in drafting, surveying, and material testing, I collaborate with engineers and contractors to deliver high-quality, sustainable projects. Passionate about innovation and committed to excellence in the built environment.</p>
      </div>
      
      <div className="technical-skills-section">
        <h3 className="section-title">
          <i className="skills-icon">🎯</i> Technical Skills
        </h3>
        
        <div className="skills-scroll-container">
          <div className="skills-scroll-wrapper">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p className="skill-description">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          <div className="scroll-indicator">
            <span>Scroll to see more</span>
            <i className="arrow-icon">→</i>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;