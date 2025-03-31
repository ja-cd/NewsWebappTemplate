import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">TechHub</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/news"
              className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}
            >
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/research"
              className={`nav-link ${location.pathname === '/research' ? 'active' : ''}`}
            >
              Research
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(NavBar);
