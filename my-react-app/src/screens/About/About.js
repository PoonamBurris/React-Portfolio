import "./About.css";
import pic from "./profilepic.jpg"


function About() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src ={process.env.PUBLIC_URL + pic} alt="aboutme"/>
      <div>
        <h1>About</h1>
        <p>I am driven to learn and apply expertise to solve challenging problems and teach others. </p>
        <p>After I graduated with master’s degree in Biotechnology, I learned how essential cross function collaboration was in implementing concepts and turning them in to real products as Senior R&D Engineer at Nondestructive testing industry. </p>
        <p>I then moved to US where I took a role in the quality department at polymer manufacturing firm where I focused on growing my team and improving cross functional collaboration between sales, operations, logistics, and purchasing.</p>
        <p>Over the next 5 years, I not only grew to become the manager of the quality department, but also took on the role of Director of R&D creating recipes for thermoplastic elastomers. </p>
        <p>Outside of work, I enjoys exploring the wilderness, travelling, spending time with family and continuing to learn new skills.</p>
      </div>
    </div>
  )
}

export default About