import "./App.css";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom"

import Navbar from "./screens/Navbar/Navbar";
import Landing from "./screens/Landing/Landing";
import About from "./screens/About/About.js";
import Portfolio from "./screens/Portfolio/Portfolio.js";
import Contact from "./screens/Contact/Contact";
import React, { useState } from 'react';
// svgrepo.com

function App() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

export default App;
