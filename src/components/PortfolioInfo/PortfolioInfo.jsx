import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioInfo.css';

const PortfolioInfo = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [about, setAbout] = useState('');
  const [projects, setProjects] = useState('');
  const [photo, setPhoto] = useState(null);
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolioData = {
      name,
      title,
      skills,
      about,
      projects,
      photo,
      instagram,
      linkedin,
      github,
    };
  
    // Navigate to PortfolioDisplay with state
    navigate('/portfolio-display', { state: portfolioData });
  };
  
  return (
    <div className="portfolio-info-container">
      <div className="portfolio-info-card">
        <h2>Create Your Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="photo">Profile Picture:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="photo-input"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <select
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
              <option value="">Select Title</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Designer">Designer</option>
              <option value="Data Scientist">Data Scientist</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="about">About Me:</label>
            <textarea
              id="about"
              name="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="projects">Projects:</label>
            <textarea
              id="projects"
              name="projects"
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instagram">Instagram:</label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="github">GitHub:</label>
            <input
              type="url"
              id="github"
              name="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="generate-button">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioInfo;
