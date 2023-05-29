import "./App.css";
import About from "./screens";
import Landing from "./screens";
import Contact from "./screens";
import Portfolio from "./screens/Portfolio";
import Navbar from "./screens/Navbar";

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
