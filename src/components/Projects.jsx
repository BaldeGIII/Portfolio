import React from 'react';
import { useState } from 'react';
import "./Projects.css";

const projects = [
    {
        title: "Aqua-Mundi",
        description: "An app called Aqua Mundi that informs the user what county in Texas a body of water is located and also informs a user on the endangered species know to inhabit that body of water.",
        technologies: ["Python","","JavaScript","Android Studio"],
        link:"https://github.com/godxrs/Aqua-Mundi",
    }
];
const Projects = () => {
    return (
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              {project.embedLink ? (
                <iframe 
                  src={project.embedLink} 
                  className="project-embed" 
                  title={`${project.title} Presentation`} 
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Projects;