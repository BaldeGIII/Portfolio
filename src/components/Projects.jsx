import React from 'react';
import { useState } from 'react';
import "./Projects.css";

const projects = [
    {
        title: "Aqua-Mundi",
        description: "An app called Aqua Mundi that informs the user what county in Texas a body of water is located and also informs a user on the endangered species know to inhabit that body of water.",
        technologies: ["Python","JavaScript","Android Studio"],
        link:"https://github.com/godxrs/Aqua-Mundi",
        image: "path/to/image.jpg" // Add the image path here
    }, 
    {
      title: "Chip-8 Emulator",
      description: "A Python-based CHIP-8 emulator implementing a complete set of opcodes to emulate the original system architecture. Features include instruction decoding, memory management, and graphics rendering.",
      technologies: ["Python", "Assembly", "Binary", "Tkinter", "Pygame" ],
      link: "https://github.com/godxrs/Chip-8Emulator"
    }
];

const Projects = () => {
    return (
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <img src={project.image}className="project-image" />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-technologies">
                <strong></strong> {project.technologies.map((tech, i) => (
                  <span key={i} className={`tech-${tech.toLowerCase()}`}>{tech}</span>
                )).reduce((prev, curr) => [prev, ', ', curr])}
              </p>
              <p className="project-description">{project.description}</p>
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