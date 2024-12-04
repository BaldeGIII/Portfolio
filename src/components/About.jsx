import React from 'react';
import "./About.css";

const About = () => {
    const skills = [
        {
            title: "Frameworks",
            skills: ["Ruby on Rails", "MySQL", "Sinatra", "React", "Microntrollers", "Electronics"]
        },
        {
            title: "Languages",
            skills: ["Python", "C++", "Ruby", "C", "HTML/CSS", "Java"]
        },
        {
            title: "Developer Tools",
            skills: ["Git", "VS Code", "Visual Studio 2022", "PyCharm", "Quartus II", "Cadence", "Keil uVision", "Power Apps"]
        }
    ];
    return (
        <div className="about" id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <p>
                    Hello, I'm Baldemar Guajardo, I am passionate about AI, Machine Language, Deep Learning, Software Engineering
                    and Web Development. I am currently studying a Bachelor's degree in Computer Science and Minor in Electrical Engineering   
                    at the University of Texas Rio Grande Valley. I am a hardworking and dedicated individual
                    who is always looking for new challenges and opportunities to learn and grow. 
                </p>
            
            <div className="skills-section">
                <h2>Technical Skills</h2>
                <div className="skills-container">
                    {skills.map((category,index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="skill">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;