import React, { useState } from 'react';
import './Portfolio.css';
import project1 from '../Image/1pro (1).png';
import project2 from '../Image/2pro.png';
import project3 from '../Image/3pro.png';
import project4 from '../Image/4pro.png';
import project5 from '../Image/5pro.png';
import project6 from '../Image/6pro.png';
import project7 from '../Image/7pro.png';
import project8 from '../Image/8pro.png';


const Portfolio = () => {
  const initialVisibleProjects = 3;
  const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);

  // Define projects
  const projects = [
    { id: 1, src: project1, alt: 'Project 1', link: 'https://doctors-portal-ad.firebaseapp.com/', title: 'Doctors-Portal' },
    { id: 2, src: project2, alt: 'Project 2', link: 'https://ama-john-second.web.app/', title: 'Shopping' },
    { id: 3, src: project7, alt: 'Project 3', link: 'https://air-agency-ec79e.web.app/', title: ' Air-Agency' },
    { id: 4, src: project8, alt: 'Project 4', link: 'https://calculator-f1d27.firebaseapp.com/', title: ' Calculator' },
    { id: 5, src: project4, alt: 'Project 5', link: 'https://link-to-project4.com', title: 'Top Businessmen' },
    { id: 6, src: project5, alt: 'Project 6', link: 'https://link-to-project5.com', title: 'Country Information' },
    { id: 7, src: project6, alt: 'Project 7', link: 'https://link-to-project6.com', title: 'Pin Matcher' },
    { id: 8, src: project3, alt: 'Project 8', link: 'https://link-to-project7.com', title: 'Money Transaction' }
  ];

  // Handle "View More" click to show more projects
  const handleViewMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  // Handle "View Less" click to reset to initial number of projects
  const handleViewLess = () => {
    setVisibleProjects(initialVisibleProjects);
  };

  return (
    <section id="portfolio">
      <h2>Web Development Projects</h2>
      <div className="portfolio-grid">
        {projects.slice(0, visibleProjects).map(project => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.src} alt={project.alt} />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
      <div className="portfolio-buttons">
        {visibleProjects < projects.length && (
          <button onClick={handleViewMore}>View More</button>
        )}
        {visibleProjects > initialVisibleProjects && (
          <button onClick={handleViewLess}>View Less</button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
