import { useState } from "react";
import "./Portfolio.css";
import projects from "./projects.json";
import  Modal from "../components/Modal/Modal.js";

function Portfolio() {
  const [currentIdx, setCurrentIdx] = useState(null);

  const handleClick = (idx) => setCurrentIdx(idx);
  const clearCurrent = () => setCurrentIdx(null);

  const projectList = projects.map((project, idx) => {
    return (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className="profolio-projects-frame"
      >
        <img src={project.image} alt={project.title} />
        <h1>{project.title}</h1>
        <button><a href={projects.liveUrl}>Live</a></button>
        <button><a href={projects.repoUrl}>Repo</a></button>
      </div>
    );
  });

  let currentProject = currentIdx >= 0 && projects[currentIdx];

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
        This is my github page{" "}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          https://somewhere.net
        </a>
      </p>
      <div className="portfolio-grid">
        {currentProject && (
          <Modal
            onClick={clearCurrent}
            title={currentProject.title}
            description={currentProject.description}
            image={currentProject.image}
            url={currentProject.url}
          />
        )}
        {projectList}
      </div>
    </div>
  );
}

export default Portfolio;
