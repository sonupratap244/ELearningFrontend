

//import React, { useState } from 'react';
import { useState } from "react";
import "./Header.css";
//import logo from './images/vsg.png';
import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
{/*         <div className="logo"><img src={logo} alt="Logo" /></div> */}
         <div className="logo">Study-Zone</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to={"/contect"} onClick={() => setMenuOpen(false)}>Contact</Link>
          {isAuth ? (
            <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
          ) : (
            <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

