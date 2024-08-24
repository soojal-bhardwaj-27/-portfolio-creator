import React, { useState } from 'react';
import './WelcomePage.css';
import SignupForm from './SignupForm'; // Import the signup form component

const templates = [
  { id: 1, src: '/templates/1.png', alt: 'Template 1' },
  { id: 2, src: '/templates/2.png', alt: 'Template 2' },
  { id: 3, src: '/templates/3.png', alt: 'Template 3' },
  { id: 4, src: '/templates/4.png', alt: 'Template 4' },
  { id: 5, src: '/templates/5.png', alt: 'Template 5' },
];

const WelcomePage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleGetStartedClick = () => {
    setShowSignup(true);
  };

  return (
    <>
      {showSignup ? (
        <SignupForm /> // Display the signup form if `showSignup` is true
      ) : (
        <div className="welcome-container">
          <div className="templates-section">
            {templates.map((template, index) => (
              <div key={template.id} className="template-background">
                <img src={template.src} alt={template.alt} className="template-image" />
                {index === 0 && (
                  <div className="button-container">
                    <button className="get-started-button" onClick={handleGetStartedClick}>
                     GET STARTED 
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePage;
