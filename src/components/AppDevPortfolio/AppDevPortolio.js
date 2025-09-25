import React, { useState } from 'react';
import './AppDevPortolio.css';

// Import video files instead of images
import video1 from '../Image/Digital_Count.mp4';
import video2 from '../Image/Bmi_calculator.mp4';
import video3 from '../Image/NewsApp.mp4';
 import video4 from '../Image/EasyChatt.mp4';
 import video5 from '../Image/TextToVoice.mp4';
 import video7 from '../Image/HealthCare.mp4';
 import video6 from '../Image/SRMS.mp4';
 import video8 from '../Image/FoodGorila.mp4';

const AppDevPortolio = () => {
  const initialVisibleProjects = 3;
  const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);

  // Define projects
  const projects = [
    { id: 1, src: video1, title: 'Digital Count' },
    { id: 2, src: video2, title: 'Bmi Calculator' },
    { id: 3, src: video3, title: 'News App'},
     { id: 4, src: video5, title: 'Text To Voice' },
     { id: 5, src: video4, title: 'Easy Chat'},
     { id: 6, src: video6, title: 'Student Result System' },
     { id: 7, src: video7, title: 'HealthCare' },
     { id: 8, src: video8, title: 'FoodGorila' }
  ];

  const handleViewMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 3);
  };

  const handleViewLess = () => {
    setVisibleProjects(initialVisibleProjects);
  };

  return (
    <section id="portfolio">
      <h2>App Development Projects</h2>
      <div className="portfolio-grid">
        {projects.slice(0, visibleProjects).map(project => (
          <div key={project.id} className="portfolio-item">
            <video src={project.src} controls muted width="100%" />
            <h5>{project.title}</h5>
          </div>
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

export default AppDevPortolio;
