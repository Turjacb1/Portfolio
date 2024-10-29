import React from 'react';
import './About.css';
import myimage from '../Image/me.jpg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const About = () => (
  <section id="about">
    <div id="about-content">
      <h1>I'M Turja Chakraborty</h1>
      <h2>Student of Computer Science And Engineering</h2>
      
      <div className="social-buttons">
        <div className="social-icon-container">
          <div className="dancing-arrow"><FaArrowRight /></div>
          <a href="https://web.facebook.com/turja.chakraborty.52/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
        </div>
        <div className="social-icon-container">
          
          <a href="https://www.linkedin.com/in/turja-chakraborty-258125248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div className="social-icon-container">
          
          <a href="https://x.com/Turjackb" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </div>
    <img src={myimage} alt="Turja Chakraborty" className="profile-img" />
  </section>
);

export default About;
