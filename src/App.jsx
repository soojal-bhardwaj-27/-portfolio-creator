import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignupForm from './components/SignupForm';
import PortfolioInfo from './components/PortfolioInfo/PortfolioInfo';
import PortfolioDisplay from './components/PortfolioDisplay';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <Routes>
        {/* Route without Navbar */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Routes with Navbar */}
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignupForm />
            </>
          }
        />
        <Route
          path="/portfolio-info"
          element={
            <>
              <Navbar />
              <PortfolioInfo />
            </>
          }
        />
        <Route
          path="/portfolio-display"
          element={
            <>
              <Navbar />
              <PortfolioDisplay />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
