
import './Navbar.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
 

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img
        alt="logo"
        src="/Navlogo.png" // Set your logo source here
        />
      </div>
      <div className="navbar-links">
        <ul>
          <li className="navbar-link">
            <Link to='/'>Home</Link>
          </li>
          <li className="navbar-link">
            <Link to='/test'>Skill Test</Link>
          </li>
          
          <li className="navbar-link">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="navbar-link">
          <Link to="/resume">Resume</Link> 
          </li>
          
        </ul>
      </div>
      <div className="navbar-buttons">
  
      </div>
    </div>
  );
};

export default Navbar;
