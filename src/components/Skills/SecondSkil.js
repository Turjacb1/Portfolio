import React from 'react';
import { } from 'react-icons/fa';
import { SiC,SiCoop } from 'react-icons/si';
import './Skills.css';
const SecondSkil = () => (
    <section id="skills">
      <h2>Programming Skills</h2>
      <div className="skills-grid">
        {[
          
          { name: "C", icon: <SiC/> },
          { name: "OOP", icon: <SiCoop/> },
        
          
          
          
        ].map(skill => (
          <div className="skill" key={skill.name}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
            
            
          </div>
          
        ))}
      </div>
      
    </section>
  );

export default SecondSkil;