import React, { useState } from 'react';
import {
  SiCplusplus,  SiJavascript, SiTypescript, SiMysql, SiHtml5,
  SiCss3, SiAngular, SiReact, SiNodedotjs, SiMongodb, SiGit, SiPostman,
  SiCircleci, SiDatabricks
} from 'react-icons/si';
import './About.css';
import img from './images/pic.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    if (activeTab === 'education') {
      return (
        <ul>
          <li>Bachelor of Computer Science - Chandigarh University (2019–2023)</li>
          <li>Front-End Development Certificate - Coursera</li>
          <li>Back-End Development Certificate - Linkedin</li>

        </ul>
      );
    }

    return (
      <div className="skills-horizontal-categories">
        <div className="skill-row">
          <h4>Frontend</h4>
          <div className="skill-items">
            <div className="skill-item"><SiHtml5 /> HTML</div>
            <div className="skill-item"><SiCss3 /> CSS</div>
            <div className="skill-item"><SiJavascript /> JavaScript</div>
            <div className="skill-item"><SiTypescript /> TypeScript</div>
            <div className="skill-item"><SiReact /> React</div>
            <div className="skill-item"><SiAngular /> Angular</div>
          </div>
        </div>

        <div className="skill-row">
          <h4>Backend</h4>
          <div className="skill-items">
            <div className="skill-item"><SiNodedotjs /> Node.js</div>
          </div>
        </div>

        <div className="skill-row">
          <h4>Database</h4>
          <div className="skill-items">
            <div className="skill-item"><SiMysql /> MySQL</div>
            <div className="skill-item"><SiMongodb /> MongoDB</div>
          </div>
        </div>

        <div className="skill-row">
          <h4>Programming & Tools</h4>
          <div className="skill-items">
            <div className="skill-item"><SiCplusplus /> C++</div>
            <div className="skill-item"><SiGit /> Git</div>
            <div className="skill-item"><SiPostman /> Postman</div>
            <div className="skill-item">< SiDatabricks /> VS Code</div>
          </div>
        </div>

        <div className="skill-row">
          <h4>Methodologies</h4>
          <div className="skill-items">
            <div className="skill-item"><SiCircleci /> Scrum</div>
            <div className="skill-item"><SiCircleci /> CI/CD</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={img} alt="Profile" />
        </div>

        <div className="about-content">
          <h2 className="section-title">ABOUT ME</h2>
          <p>
            I'm a passionate web developer focused on building sleek and responsive websites.
            I enjoy working with React,Angular,Node, JavaScript, and CSS to create elegant user experiences.
          </p>

          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
