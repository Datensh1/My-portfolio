import './App.css';
import css from './images/CSS3 dark.png';
import react from './images/React Native dark.png';
import js from './images/JavaScript Logo dark.png';
import pic from './images/bern.png';
import jrvm from './images/JRVM.png';
import fl from './images/Flashlesson.png';
import fb from './images/Fb.png';
import github from './images/github.png';
import lightmode from './images/lightmode.png';
import linkedin from './images/linkedin.png';
import ig from './images/Ig.png';

function App() {
  return (
    <>
      {/* Header Section */}
      <header id="Header">
        <a href='#About-me'>About</a>
        <a href='#Projects'>Projects</a>
        <a href='#Skills'>Skills</a>
      </header>

      {/* Main Section */}
      <section className="Main">
        <div className='contact-right'>
          <div className='icons'>
            <a href='https://www.facebook.com/profile.php?id=100088040026992'><img className='fb' src={fb} alt="Facebook" /></a>
            <a href='https://github.com/Datensh1'><img className='github' src={github} alt="GitHub" /></a>
            <img className='lightmode' src={lightmode} alt="Light Mode" />
            <a href='https://www.linkedin.com/in/vincent-paul-berlas-b48256334/'><img className='linkedin' src={linkedin} alt="LinkedIn" /></a>
            <a href='https://www.instagram.com/vp_is_vncntpl/'><img className='ig' src={ig} alt="Instagram" /></a>
          </div>
        </div>

        <div className='design'></div>

        <p>Hello,</p>
        <h1>I am Vincent Paul</h1>
        <h2>Front-end Developer</h2>
      </section>

      {/* About Section */}
      <section id='About-me'>
        <h1>About Me</h1>
        <div className='line'></div>
        <img className='pic' src={pic} alt="Profile" />
        <div className='text-content'>
          <h2>Hi, I'm Vincent Paul!</h2>
          <p>
            A front-end developer focused on creating responsive, user-friendly websites. I build clean, intuitive interfaces 
            that work seamlessly across devices. With a passion for delivering high-quality code and engaging experiences, 
            I’m always learning and exploring new web technologies. Let’s bring your ideas to life!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id='Skills'>
        <h1>Skills</h1>
        <div className='line-1'></div>
        <div className='skillset'>
          <div className='html'>
            <img className='html-logo' src={css} alt="HTML & CSS" />
            <h1>HTML & CSS</h1>
            <p>Proficient in writing clean, semantic HTML and modern CSS for building responsive and accessible web pages.</p>
          </div>
          <div>
            <img src={react} alt="React" />
            <h1>REACT</h1>
            <p>Experienced in building fast and scalable user interfaces with React, leveraging its component-based architecture for efficient code management.</p>
          </div>
          <div className='js'>
            <img src={js} alt="JavaScript" />
            <h1>JAVASCRIPT</h1>
            <p>Strong in JavaScript fundamentals and its modern features (ES6+), enabling dynamic interactivity and functionality in web applications.</p>
          </div>
        </div>

        <div className='skillset2'>
          <div className='github'>
            <img src={css} alt="GitHub" />
            <h1>GITHUB</h1>
            <p>Proficient in using GitHub for code hosting, collaborating on projects, managing repositories, pull requests, and facilitating team development workflow.</p>
          </div>
          <div className='git'>
            <img src={css} alt="Git" />
            <h1>GIT</h1>
            <p>Strong command of Git for version control, including managing branches, merging, and handling code history efficiently.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='Projects'>
        <h1>Projects</h1>
        <div className='line-3'></div>
        <div className='proj'>
          <div className='left-side'>
            <img className='proj-1' src={jrvm} alt="JRVM Anime Website" />
            <h1>JRVM ANIME WEBSITE</h1>
            <p>JRVM Anime is your gateway to the vibrant world of Japanese animation. From classic series to the latest releases, explore in-depth reviews, character insights, and episode guides.</p>
          </div>
          <div className='right-side'>
            <h1>FLASHLESSON APP</h1>
            <p>FlashLesson is a mobile app designed for quick, bite-sized learning. It delivers concise lessons across various subjects, perfect for users looking to gain new skills or knowledge in just minutes a day.</p>
            <img className='proj-2' src={fl} alt="FlashLesson App" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className='line-2'></div>
        <h1>Have any project in your mind? <span className='highlight'>Let’s discuss the project</span></h1>
      </footer>


    </>
  );
}

export default App;
