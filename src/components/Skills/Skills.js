import React from 'react';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb,SiReact } from 'react-icons/si';
import './Skills.css';

const Skills = () => (
  <section id="skills">
    <h2>Web-Development Skill</h2>
    <div className="skills-grid">
      {[
        
        { name: "React", icon: <SiReact/> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "HTML & CSS", icon: <><FaHtml5 /> <FaCss3Alt /></> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        
        
        
      ].map(skill => (
        <div className="skill" key={skill.name}>
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
          
          
        </div>
        
      ))}
    </div>
    
  </section>
);

export default Skills;
