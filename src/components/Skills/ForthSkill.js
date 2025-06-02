import React from 'react';
import {  FaJava } from 'react-icons/fa'; // ✅ FaJava added
import { } from 'react-icons/si';
import './Skills.css';

const ForthSkill = () => (
  <section id="skills">
    <h2>App-Development Skills</h2>
    <div className="skills-grid">
      {[
        { name: "Java", icon: <FaJava />, proficiency: 85 }, // ✅ Java added here
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

export default ForthSkill;
