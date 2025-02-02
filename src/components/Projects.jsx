import React from 'react';
import { useState } from 'react';
import "./Projects.css";
import profileImage from '../assets/profile.png'; // Import the new placeholder image

const projects = [
    {
        title: "Aqua-Mundi",
        description: "An app called Aqua Mundi that informs the user what county in Texas a body of water is located and also informs a user on the endangered species know to inhabit that body of water.",
        technologies: ["Python","JavaScript","Android Studio"],
        link:"https://github.com/godxrs/Aqua-Mundi",
        image: profileImage // Use the new placeholder image
    }, 
    {
      title: "Chip-8 Emulator",
      description: "A Python-based CHIP-8 emulator implementing a complete set of opcodes to emulate the original system architecture. Features include instruction decoding, memory management, and graphics rendering.",
      technologies: ["Python", "Assembly", "Binary", "Tkinter", "Pygame" ],
      link: "https://github.com/godxrs/Chip-8Emulator",
      image: profileImage // Use the new placeholder image
    }
];

const Projects = () => {
    const [showMore, setShowMore] = useState({});

    const toggleShowMore = (index) => {
        setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <img src={project.image} className="project-image" alt={`${project.title} logo`} />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-technologies">
                <strong></strong> {project.technologies.map((tech, i) => (
                  <span key={i} className={`tech-${tech.toLowerCase()}`}>{tech}</span>
                )).reduce((prev, curr) => [prev, ', ', curr])}
              </p>
              <p className={`project-description ${showMore[index] ? 'show-more' : ''}`}>
                {project.description}
              </p>
              {project.description.length > 100 && (
                <a
                  href="#!"
                  className="see-more"
                  onClick={() => toggleShowMore(index)}
                >
                  {showMore[index] ? 'See Less' : 'See More'}
                </a>
              )}
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