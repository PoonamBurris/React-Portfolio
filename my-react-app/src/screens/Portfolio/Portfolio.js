import { useState } from "react";
import "./Portfolio.css";
import { projects } from "./projects.js";
import { Modal } from "./Modal.js";

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
