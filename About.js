import './about.css';
import log_about from './images.jpeg';
import log_about0 from './img00.png';
function About() {
  return (

    <div className="About">
      <img src={log_about} className="About-logo" />
      <img src={log_about0} className="About-logo-img" />
      <header className="About-header">
      </header>
    </div>
  );
}

export default About;
