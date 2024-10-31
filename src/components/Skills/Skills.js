import React from 'react';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiReact, SiFirebase } from 'react-icons/si';
import './Skills.css';

const Skills = () => (
  <section id="skills">
    <h2>Web-Development Skills</h2>
    <div className="skills-grid">
      {[
        { name: "React", icon: <SiReact />, proficiency: 90 },
        { name: "Git", icon: <FaGitAlt />, proficiency: 80 },
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 99 },
        { name: "HTML & CSS", icon: <><FaHtml5 /> <FaCss3Alt /></>, proficiency: 90 },
        { name: "JavaScript", icon: <FaJsSquare />, proficiency: 70 },
        { name: "Firebase", icon: <SiFirebase />, proficiency: 95 },
      ].map(skill => (
        <div className="skill" key={skill.name}>
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
          <div className="circular-progress">
            <svg className="progress-ring" viewBox="0 0 36 36">
              <circle className="progress-ring__background" cx="18" cy="18" r="16" />
              <circle
                className="progress-ring__circle"
                cx="18" cy="18" r="16"
                strokeDasharray="100"
                strokeDashoffset={100 - skill.proficiency}
              />
            </svg>
            <div className="proficiency-tooltip">
              <span className="proficiency-text">{skill.proficiency}%</span>
              <span className="tooltiptext">{skill.proficiency}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
