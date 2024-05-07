import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
   setIsOpen(!isOpen);
  }
  return (
    <div className="navbar">
      <div className="navbar-big">
        <div className="navbar-img-container">
          <img src={logo} alt="sec" className="navbar-img" />
        </div>
        <ul className="navbar-link-container">
          <li>
            <Link to="/" className="text-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/report" className="text-link">
              Report
            </Link>
          </li>
          <li>
            <Link to="/entry" className="text-link">
              Entry
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-link">
              Login
            </Link>
          </li>
        </ul>
        <div className="mobile-menubar" >
          <IoIosMenu  onClick={handleClick}/>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav">
         <div>
          <div>
            <Link to="/" className="text-link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/entry" className="text-link">
              Entry
            </Link>
          </div>
          <div>
            <Link to="/report" className="text-link">
              Report
            </Link>
          </div>
          <div>
            <Link to="/login" className="text-link">
              Login
            </Link>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
