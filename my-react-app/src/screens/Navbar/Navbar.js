import { useState, useEffect } from "react";
import "./Navbar.css";
import hamBtn from "./hamburger-menu.svg";
import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => setShowLinks(!showLinks);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  })

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  }, [])

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <div>Poonam Burris</div>
        {showBtn && <img alt="hamburger menu" src={hamBtn} onClick={handleClick}/>}
      </div>
      {showLinks && (
        <div className="navbar-links-container">
          <a href="#Landing" 
          onClick={() => handlePageChange('Landing')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}
          >
            Home</a>
          <a href="#About"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a>
          <a href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio</a>
          <a href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
