import { TypeAnimation } from "react-type-animation";
import React from "react";
import "./Home.css";
import githubIcon from "../assets/github-mark-white.png";
import linkedinIcon from "../assets/linkedin-app-white-icon.webp";
import profilePic from "../assets/profile.png"

const  Home = () => {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="home-text">
                    <TypeAnimation
                    preRenderFirstString={true} 
                    sequence={[
                        "Hi, Im Baldemar Guajardo, a Web Developer",
                        1000,
                        "Hi, Im Baldemar Guajardo, a FullStack Developer",
                        1000,
                        "Hi, Im Baldemar Guajardo, a Software Engineer",
                        1000,
                        "Hi, Im Baldemar Guajardo, a AI Engineer",
                        1000,
                        "Hi, Im Baldemar Guajardo, a Machine Learning Engineer",
                        1000,
                    ]}
                        speed={50}
                        style={{ fontSize: "2em"}}
                        repeat={Infinity}
                    />
                    <div className="links">
                        <a
                        href="https://github.com/godxrs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-button"
                        >
                            <img src={githubIcon} alt="Github" className="icon" />
                        </a>

                        <a
                        href="https://www.linkedin.com/in/baldemar-guajardo-454132228/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-button"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                        </a>
                    </div>
                </div>
                <div className="home-image">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
            </div>
        </div>
    );
}

export default Home;