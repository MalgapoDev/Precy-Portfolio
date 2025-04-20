import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
// Import additional sample images for each project
import project1Sample1 from '../assets/project1-sample1.jpg';
import project1Sample2 from '../assets/project1-sample2.jpg';
import project2Sample1 from '../assets/project2-sample1.jpg';
import project2Sample2 from '../assets/project2 -sample2.jpg';
import project3Sample1 from '../assets/project3-sample1.jpg';
import project3Sample2 from '../assets/project3-sample2.jpg';

import './Projects.css';

const ProjectsPage = () => {
  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // project data with extended descriptions and additional images
  const projects = [
    {
      id: 1,
      name: "CONSTRUCTION OF BARANGAY HEALTH CENTER OF PADAPADA - PHASE 1",
      description: "Description:",
      fullDescription: "Phase 1 of the Barangay Health Center project includes foundation work, structural framing, roofing, and basic utilities installation. This facility will provide essential healthcare services to the local community including maternal care, immunization services, and basic medical consultations.",
      imageUrl: project1,
      sampleImages: [project1Sample1, project1Sample2, project1]
    },
    {
      id: 2,
      name: "CONSTRUCTION OF COVERED COURT ROOFING EXTENSION AT BARANGAY VARGAS",
      description: "Description:",
      fullDescription: "The covered court roofing extension project at Barangay Vargas aims to provide additional weather protection for community activities. The design includes steel trusses, metal roofing, and proper drainage systems to ensure durability during various weather conditions.",
      imageUrl: project2,
      sampleImages: [project2Sample1, project2Sample2, project2]
    },
    {
      id: 3,
      name: "RENOVATION AND EXTENSION OF 2-STOREY RESIDENCE (PUNZALAN RESIDENCE)",
      description: "Description:",
      fullDescription: "Comprehensive renovation and extension of the Punzalan Residence featuring modern architectural elements while preserving the original character of the home. The project includes structural reinforcement, room additions, updated electrical and plumbing systems, and contemporary interior finishes.",
      imageUrl: project3,
      sampleImages: [project3Sample1, project3Sample2, project3]
    }
  ];

  // Open modal with selected project
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      
      <div className="projects-grid-container">
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt="Project thumbnail" 
                    className="project-image"
                  />
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-footer">
                <button 
                  className="view-project-button"
                  onClick={() => openProjectModal(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.name}</h2>
              <button className="modal-close-button" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-gallery">
                {selectedProject.sampleImages.map((image, index) => (
                  <div key={index} className="gallery-image-container">
                    <img 
                      src={image} 
                      alt={`${selectedProject.name} sample ${index + 1}`} 
                      className="gallery-image"
                    />
                  </div>
                ))}
              </div>
              
              <div className="modal-description">
                <h3>Project Description</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;