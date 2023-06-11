import "./App.css";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom"

import Navbar from "./screens/Navbar/Navbar";
import Landing from "./screens/Landing/Landing";
import About from "./screens/About/About.js";
import Portfolio from "./screens/Portfolio/Portfolio.js";
import Contact from "./screens/Contact/Contact";

// svgrepo.com

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
