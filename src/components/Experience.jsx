import React from 'react';
import './Experience.css';
import ExperienceImage from "../assets/profile.png";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="experience">
        <div className="experience-image-wrapper">
          <img 
            src={ExperienceImage}
            alt="Apprentice Lineman Program"
            className="experience-image"
          />
        </div>
        
        <div className="experience-content">
          <h2 className="title">IT Summer Programmer Intern</h2>
          
          <h3 className="company">Magic Valley Electric Cooperative</h3>

          <div className="dates">
            <span> May 2024 - August 2024</span>
          </div>

          <div className="location">
            <span>📍 Mercedes, TX</span>
          </div>

 
          
          <div className="program">Apprentice Lineman Program</div>
          
          <ul className="achievements">
            <li>
              Spearheaded the development of an electronic Apprentice Lineman program, 
              resulting in a 100% digital transformation and a 40% improvement in program 
              accessibility and engagement.
            </li>
            <li>
              Collaborated with cross-functional teams to design and integrate requirements, 
              testing, and administration portals on Power Apps and SharePoint, achieving 
              a 30% increase in program efficiency and tracking capabilities.
            </li>
            <li>
              Implemented data-driven process improvements, providing recommendations 
              that enhanced program interactivity by 25%, directly benefiting both 
              users and administrators.
            </li>
            <li>
              Managed the digital rollout of the training program, ensuring a 100% 
              user-friendly experience that aligned with the Cooperative's mission to 
              deliver reliable, cost-effective services.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;