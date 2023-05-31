import "./App.css";

import Navbar from "./screens/Navbar/Navbar";
// import Landing from "./screens/Landing/Landing";
import About from "./screens/About/About";
import Portfolio from "./screens/Portfolio/Portfolio.js";

// svgrepo.com

function App() {
  return (
    <div>
      <Navbar />
      {/* <Landing /> */}
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
