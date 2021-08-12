import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const Navbar = ({ handleLogout }) => {
    return (
      <nav className="navbar navbar-expand-lg ml-auto navbar-light bg-dark main">
        
        <div className="container"> 
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="burger" />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" id="test">

            <li className="nav-item active">
              <Link  to="header" spy={true} smooth={true} offset={0} duration={250} className="nav-link"> Home </Link>
            </li>

            <li className="nav-item">
            <Link  to="about" spy={true} smooth={true} offset={0} duration={250} className="nav-link">About me</Link>
            </li>

            <li className="nav-item">
            <Link  to="studies" spy={true} smooth={true} offset={0} duration={250} className="nav-link">Studies</Link>
            </li>

            <li className="nav-item">
            <Link  to="contact" spy={true} smooth={true} offset={0} duration={250} className="nav-link">Contact</Link>
            </li>
          </ul>
          
        </div>
        </div>
  
      </nav>
    );
  }


export default Navbar;