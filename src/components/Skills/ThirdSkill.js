import React from 'react';
import { SiGoogle, SiFiverr } from 'react-icons/si';
import video from '../Image/video.mp4';
import './Skills.css';

// SkillCard Component
const SkillCard = ({ skill }) => (
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
);

// VideoCard Component
const VideoCard = () => (
  <div className="video-card">
    <video className="video-frame" controls>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>My All Digital Marketing Skills</p>
  </div>
);

// HireLink Component
const HireLink = () => (
  <a 
    href="https://www.fiverr.com/cbturja/buying?source=avatar_menu_profile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hire-link"
  >
    <SiFiverr className="fiverr-icon" /> Hire Me on Fiverr
  </a>
);

// Main ThirdSkill Component
const ThirdSkill = () => (
  <section id="skills">
    <h2>Digital Marketing Skill</h2>
    <div className="skills-grid">
      {/* Skill Cards */}
      
      {[{ name: "Digital Marketing", icon: <SiGoogle />, proficiency: 85 }].map(skill => (
        <SkillCard skill={skill} key={skill.name} />
      ))}

      {/* Video Card */}
      <VideoCard />
    </div>
    
    {/* Hire Link */}
    <HireLink />
  </section>
);

export default ThirdSkill;
