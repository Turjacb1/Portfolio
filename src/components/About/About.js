import React from 'react';
import './About.css';
import myimage from '../Image/me.jpg';
import { FaFacebook, FaLinkedin, FaTwitter,FaBeer } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { SiHackerrank, SiLeetcode, SiCodeforces } from 'react-icons/si'; // For HackerRank, LeetCode, and Beecrowd

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
            <span className="tooltip">Facebook</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://www.linkedin.com/in/turja-chakraborty-258125248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
            <span className="tooltip">LinkedIn</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://x.com/Turjackb" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
            <span className="tooltip">Twitter</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://github.com/Turjacb1" target="_blank" rel="noopener noreferrer">
            <FaBeer className="social-icon" />
            <span className="tooltip">GitHub</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://www.hackerrank.com/profile/turjackb28" target="_blank" rel="noopener noreferrer">
            <SiHackerrank className="social-icon" />
            <span className="tooltip">HackerRank</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://leetcode.com/u/ijFQrCWjE6/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="social-icon" />
            <span className="tooltip">LeetCode</span>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://judge.beecrowd.com/en/profile/853727" target="_blank" rel="noopener noreferrer">
            <SiCodeforces className="social-icon" />
            <span className="tooltip">Beecrowd</span>
          </a>
        </div>
      </div>
    </div>
    <img src={myimage} alt="Turja Chakraborty" className="profile-img" />
  </section>
);

export default About;
