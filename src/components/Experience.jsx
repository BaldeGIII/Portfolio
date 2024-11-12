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
            Led the development of a fully digital Apprentice Lineman program, 
            transforming a paper-based system into an interactive platform, 
            enhancing access and engagement for over 100 apprentices and reducing onboarding time by 35%.
            </li>
            <li>
            Collaborated with IT, HR, and training teams to build and integrate requirements, 
            testing, and administration portals on Power Apps and SharePoint, boosting program tracking 
            and operational efficiency by 30%, enabling streamlined access for staff and apprentices.
            </li>
            <li>
            Conducted targeted research to identify process improvements, implementing 
            changes that increased program interactivity by 25% and optimized workflows, 
            resulting in faster, more efficient processes for users and administrators.
            </li>
            <li>
            Managed the digital rollout of the training program, achieving a user-friendly 
            experience aligned with the Cooperative’s mission; improvements led to projected cost 
            savings of 20% due to reduced manual processes and enhanced digital adoption.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;