import React, { useState } from 'react';
import './Portfolio.css';
import project1 from '../Image/1pro (1).png';
import project2 from '../Image/2pro.png';
import project3 from '../Image/3pro.png';
import project4 from '../Image/4pro.png';
import project5 from '../Image/5pro.png';
import project6 from '../Image/6pro.png';

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Define projects
  const projects = [
    { id: 1, src: project1, alt: 'Project 1', link: 'https://doctors-portal-ad.web.app/',title:'Doctors-Portal' },
    { id: 2, src: project2, alt: 'Project 2', link: 'https://ama-john-second.firebaseapp.com/',title:'Shopping' },
    { id: 3, src: project3, alt: 'Project 3', link: 'https://link-to-project3.com' ,title:'Money Tranjection'},
    { id: 4, src: project4, alt: 'Project 4', link: 'https://link-to-project4.com' ,title:'Top Businessmen'},
    { id: 5, src: project5, alt: 'Project 5', link: 'https://link-to-project5.com' ,title:'Country Information'},
    { id: 6, src: project6, alt: 'Project 6', link: 'https://link-to-project6.com' ,title:'Pin Matcher'}
  ];

  // Decide which projects to display
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {displayedProjects.map(project => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.src} alt={project.alt} />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
      <button onClick={() => setShowAllProjects(!showAllProjects)}>
        {showAllProjects ? 'Show Less' : 'View More'}
      </button>
    </section>
  );
};

export default Portfolio;
