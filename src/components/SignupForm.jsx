import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and signup logic here

    // After signup, navigate to the PortfolioInfo page
    navigate('/portfolio-info');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
