import  Typewritter from "../components/Typewritter/Typewritter";
import  AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";

import "./Landing.css"

let msgArray = [
  " ",
  "A Software Engineer",
  "Also known as an",
  "Front-end developer",
  "Back-end developer",
  "Full stack developer",
  "Or!",
  '"a coder"',
  " ",
];

function Landing() {
  return (
    <div id="home">
    <AnimatedBackground >
      <div  className="landing-type">
        <div>What am I?</div>
        <Typewritter data={msgArray} />
      </div>
    </AnimatedBackground>
    </div>
  );
}

export default Landing;