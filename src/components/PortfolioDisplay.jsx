import React from 'react';
import { useLocation } from 'react-router-dom';
import './PortfolioDisplay.css';

const PortfolioDisplay = () => {
  const location = useLocation();
  const {
    name = '',
    title = '',
    skills = '',
    about = '',
    projects = '',
    photo = '',
    instagram = '',
    linkedin = '',
    github = '',
  } = location.state || {}; // Fallback to empty strings if state is null

  return (
    <div className="portfolio-display-container">
      <div className="portfolio-display-card">
        {photo && (
          <img
            src={URL.createObjectURL(photo)}
            alt="Profile"
            className="profile-picture"
          />
        )}
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p><strong>Skills:</strong> {skills}</p>
        <p><strong>About Me:</strong> {about}</p>
        <p><strong>Projects:</strong> {projects}</p>
        <div className="social-links">
          {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDisplay;
