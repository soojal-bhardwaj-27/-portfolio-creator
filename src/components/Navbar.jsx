import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyPortfolio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio-info" className="nav-links">
              Portfolio Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
