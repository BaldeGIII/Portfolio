import { TypeAnimation } from "react-type-animation";
import React from "react";
import "./Home.css";
import githubIcon from "../assets/github-mark-white.png";
import linkedinIcon from "../assets/linkedin-app-white-icon.webp";
import profilePic from "../assets/67811850.png"

const Home = () => {
    const handleNameClick = (name) => {
        const bouncingText = document.createElement("div");
        bouncingText.className = "bouncing-text";
        bouncingText.innerText = name;
        document.body.appendChild(bouncingText);

        setTimeout(() => {
            document.body.removeChild(bouncingText);
        }, 5000);
    };

    return (
        <div className="home" id="home" style={{ display: "flex", alignItems: "center", height: "100vh" }}>
            <div className="home-content">
                <div className="home-image">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="home-text">
                    <h1>
                        <span onClick={() => handleNameClick("Balde")}>Baldemar</span>{" "}
                        <span onClick={() => handleNameClick("III")}>Guajardo</span>
                    </h1>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            "Hi, I'm a Web Developer",
                            1000,
                            "Hi, I'm a FullStack Developer",
                            1000,
                            "Hi, I'm a Software Engineer",
                            1000,
                            "Hi, I'm a AI Engineer",
                            1000,
                            "Hi, I'm a Machine Learning Engineer",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: "2em" }}
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
            </div>
        </div>
    );
}

export default Home;