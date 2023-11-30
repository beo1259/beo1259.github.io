import './App.css';
import React, { useEffect, useState } from 'react';
import python from './python.png';
import js from './js.png';
import java from './java.png';
import cpp from './C++_logo.png';
import sql from './sql.png';
import toggle from './toggle.png';
import wai from './wai.png';
import mcdonalds from './mcdonalds.png';
import headshot from './Headshot.png';
import github from './github.png';
import linkedin from './linkedin.png';
import react from './react.png';
import reactnative from './reactnative.png';
import flutter from './flutter.png';



function Header({ currentSection, setCurrentSection }) {
  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const headerOffset = document.querySelector('.header').offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    
    const centerOffset = (windowHeight - sectionHeight) / 2;
    
    const offsetPosition = sectionTop - Math.max(headerOffset, centerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const getButtonClass = (sectionName) => {
    return `button ${currentSection === sectionName ? 'active' : ''}`;
  };
  
  return (
    <header className="header">
      <button type="name-button"
        className='name-button'
        onClick={() => scrollToSection('name')}
      >
        BRAYDEN O'NEIL
      </button>

      <div className="button-container">
        <button
          type="button"
          className={getButtonClass('about-me')}
          onClick={() => scrollToSection('about-me')}
        >
          ABOUT ME
        </button>
        <button
          type="button"
          className={getButtonClass('skills')}
          onClick={() => scrollToSection('skills')}
        >
          SKILLS
        </button>
        <button
          type="button"
          className={getButtonClass('experience')}
          onClick={() => scrollToSection('experience')}
        >
          EXPERIENCE
        </button>
        <button
          type="button"
          className={getButtonClass('projects')}
          onClick={() => scrollToSection('projects')}
        >
          PROJECTS
        </button>
        <input
          type="button"
          className={getButtonClass('resume')}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1aUXksLi6YUqksVmEPc_fmX5LpffzbZPw/view?usp=sharing'
            )
          }
          value="RESUME"
        />
      </div>
    </header>
  );
}

function App() {

  const [currentSection, setCurrentSection] = useState('about-me'); 

  useEffect(() => {
    
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            entry.target.classList.add('visible');
            if (entry.target.id === 'about-me') {
              document.querySelector('.headshot').classList.add('headshot-visible');
            }
            const containers = entry.target.querySelectorAll('.item-container');
            containers.forEach(container => {
              container.classList.add('item-container-visible');
            });
          } else {
            entry.target.classList.remove('visible');
            if (entry.target.id === 'about-me') {
              document.querySelector('.headshot').classList.remove('headshot-visible');
            }
            const containers = entry.target.querySelectorAll('.item-container');
            containers.forEach(container => {
              container.classList.remove('item-container-visible');
            });
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <>
    <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
    
    <div className='App'>
      
      <section id='name' className='section-container'>
      <div class="wrapper">
        <div class="static-txt">I'm a...</div>
        <ul class="dynamic-txts">
          <li><span>Software Engineer</span></li>
          <li><span>Self Starter</span></li>
          <li><span>Student</span></li>
          <li><span>Friend</span></li>
          <li><span>Hardworker</span></li>
          <li><span>Obsessive Learner</span></li>
          <li><span>Curious Person</span></li>
          <li><span>Programmer</span></li>
        </ul>
      </div>
      </section>
      <section id='about-me' className='section-container fade-in'>
        <div className='about-me-content'>
          <img src={headshot} className="headshot" alt="Headshot" height="400" />
          <div class='section-text'>
            <div class='section-title' style={{paddingLeft: '10px'}}>HELLO!</div>
            <div className='gif-container'></div>
            <p>I'm Brayden! I am a hardworking Computer Science student, who enjoys pursuing hard-to-reach goals
            that require critical thinking and problem solving. I pursue these goals through the use
            of cutting edge technology that I find interesting, and maintain an optimistic attitude
            when faced with an issue.</p>
          </div>
          
        </div>
      </section>
      <section id='skills' className='section-container fade in'>
      <div class="section-title">Languages...</div>
      
        <button id='skills' className='item-container fade in'>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={python} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <h2 className='item-title'>Python</h2>
          </div>
          <ul className='item-text'>
              <li>Expertise in data analysis and visualization using libraries like Pandas and Matplotlib.</li>
              <p></p>
              <li>Proficient in developing efficient algorithms and problem-solving skills.</li>
              <p></p>
              <li>Strong background in machine learning and artificial intelligence with Python.</li>
              <p></p>
              <li>Experienced in web development using Python frameworks like Django and Flask.</li>
              <p></p>
              <li>Ability to write clean, maintainable, and well-documented code.</li>
          </ul>
        </button>
        
        <button id='skills' className='item-container fade in'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={java} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <h2 className='item-title'>Java</h2>
          </div>
          <ul className='item-text'>
              <li>Strong proficiency in object-oriented programming and design patterns with Java.</li>
              <p></p>
              <li>Experienced in building scalable, high-performance enterprise applications.</li>
              <p></p>
              <li>Skilled in Android app development and cross-platform solutions.</li>
              <p></p>
              <li>Adept at using Java frameworks like Spring and Hibernate for backend development.</li>
              <p></p>
              <li>Committed to writing efficient, secure, and well-documented Java code.</li>
          </ul>
        </button>
          <button id='skills' className='item-container fade in'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={cpp} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <h2 className='item-title'>C++</h2>
              </div>
            <ul className='item-text'>
                <li>Expert in system-level programming and memory management with C++.</li>
                <p></p>
                <li>Proficient in developing complex algorithms and data structures in C++.</li>
                <p></p>
                <li>Experience in building high-performance software and game development.</li>
                <p></p>
                <li>Adept at using C++ for hardware interfacing and embedded system programming.</li>
                <p></p>
                <li>Focused on writing optimized, modular, and well-documented C++ code.</li>
            </ul>
          </button>

          <button id='skills' className='item-container fade in'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={js} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10px' }} />
                <h2 className='item-title'>JavaScript</h2>
              </div>
            <ul className='item-text'>
                <li>Expertise in front-end development with JavaScript frameworks.</li>
                <p></p>
                <li>Proficient in creating dynamic, interactive web applications using JavaScript.</li>
                <p></p>
                <li>Skilled in server-side development with Node.js and Express.</li>
                <p></p>
                <li>Experience in developing and integrating RESTful APIs with JavaScript.</li>
                <p></p>
                <li>Commitment to writing clean, maintainable, and well-documented JavaScript code.</li>
            </ul>

          </button>
          <section className='frameworks-container fade in'>
          <div class="section-title"  style={{paddingTop: '80px', paddingLeft: '200px'}}>Frameworks...</div>
          
          <button id='skills' className='item-container fade in'>
            
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={react} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10px' }} />
                <h2 className='item-title'>React</h2>
              </div>
            <ul className='item-text'>
              <li>Proficient in building responsive web applications using React.</li>
              <p></p>
              <li>Experience with state management using tools like Redux and Context API.</li>
              <p></p>
              <li>Skilled in creating reusable UI components and optimizing performance.</li>
              <p></p>
              <li>Knowledge of React Router for handling client-side routing.</li>
              <p></p>
              <li>Experience with RESTful API integration and asynchronous data fetching.</li>
            </ul>
          </button>

        <button id='skills' className='item-container fade in'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={reactnative} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10px' }} />
                <h2 className='item-title'>React Native</h2>
              </div>
          <ul className='item-text'>
            <li>Developed cross-platform mobile apps using React Native for iOS and Android.</li>
            <p></p>
            <li>Proficient in building custom UI components and integrating third-party libraries.</li>
            <p></p>
            <li>Experience with navigation using React Navigation for seamless user journeys.</li>
            <p></p>
            <li>Knowledge of debugging tools like React Native Debugger.</li>
            <p></p>
            <li>Testing and deployment of React Native applications to app stores.</li>
          </ul>
        </button>

        <button id='skills' className='item-container fade in'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={flutter} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10px' }} />
                <h2 className='item-title'>Flutter</h2>
              </div>
          <ul className='item-text'>
            <li>Developed mobile apps for Android and iOS using the Flutter framework.</li>
            <p></p>
            <li>Experience in building beautiful and responsive UIs with Flutter widgets.</li>
            <p></p>
            <li>Proficient in state management using Provider and Bloc patterns.</li>
            <p></p>
            <li>Knowledge of platform-specific integrations for device features.</li>
            <p></p>
            <li>Testing, debugging, and deployment of Flutter applications.</li>
          </ul>
        </button>

        <button id='skills' className='item-container fade in'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={sql} alt="Python logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10px' }} />
            <h2 className='item-title'>SQL</h2>
          </div>
          <ul className='item-text'>
            <li>Expert in writing complex SQL queries for data retrieval and manipulation.</li>
            <p></p>
            <li>Experience in designing normalized database schemas for efficiency.</li>
            <p></p>
            <li>Proficient in using relational database management systems (RDBMS) like MySQL.</li>
            <p></p>
            <li>Knowledge of database optimization techniques and indexing strategies.</li>
            <p></p>
            <li>Ensuring data security and integrity through SQL best practices and permissions.</li>
          </ul>
        </button>
      </section>
      </section>
      <section id='experience' className='section-container fade-in'>
  <div className="section-title">Experiences...</div>

  <button id='experiences' className='item-container fade in'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={toggle} alt="Toggle Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <h2 className='item-title'>Full Stack Software Engineer Intern</h2>
      </div>
    <ul className='item-text'>
      <li>Utilized Google's Tesseract API for email text conversion, enhancing data accessibility.</li>
      <p></p>
      <li>Integrated OpenAI's GPT-4 to deliver accurate responses to user inquiries.</li>
      <p></p>
      <li>Designed and implemented a SQL database, with a Node.js/Express backend.</li>
      <p></p>
      <li>Created a web app interface using React, and a desktop app with Flutter.</li>
      <p></p>
      <li>Collaborated with teams on GitHub for project development and contributed to UI/UX design.</li>
    </ul>
  </button>

  <button id='experiences' className='item-container fade in'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={wai} alt="Toggle Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <h2 className='item-title'>Western AI Case Competiton Finalist</h2>
      </div>
    <ul className='item-text'>
      <li>Conceptualized an AI-based solution to improve human connection in video calls, involing replacing the low quality face with a 3D rendered version</li>
      <p></p>
      <li>Employed FSCNN to enhance video frame resolution in real-time.</li>
      <p></p>
      <li>Integrated Computer Vision for accurate facial structure recognition.</li>
      <p></p>
      <li>Utilized a 3D face model and GANs for high-quality video frame reconstruction.</li>
      <p></p>
      <li>Awarded Top 3 Finalist among 35 teams, my team and I received a cash prize for innovative approach.</li>
    </ul>
  </button>

  <button id='experiences' className='item-container fade in'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={mcdonalds} alt="McDonalds Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <h2 className='item-title'>McDonalds Crew Trainer</h2>
      </div>
    <ul className='item-text'>
      <li>Promoted to Crew Trainer, demonstrating leadership and teamwork skills.</li>
      <p></p>
      <li>Guided new employees through training processes and protocols.</li>
      <p></p>
      <li>Ensured high standards of customer service and operational efficiency.</li>
      <p></p>
      <li>Contributed to a positive work environment and team morale.</li>
      <p></p>
      <li>Implemented feedback mechanisms to improve training methods.</li>
    </ul>
  </button>

  <button id='experiences' className='item-container fade in'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={mcdonalds} alt="McDonalds Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <h2 className='item-title'>McDonalds Crew Trainer</h2>
      </div>
    <ul className='item-text'>
      <li>Promoted to Crew Trainer, demonstrating leadership and teamwork skills.</li>
      <p></p>
      <li>Guided new employees through training processes and protocols.</li>
      <p></p>
      <li>Ensured high standards of customer service and operational efficiency.</li>
      <p></p>
      <li>Contributed to a positive work environment and team morale.</li>
      <p></p>
      <li>Implemented feedback mechanisms to improve training methods.</li>
    </ul>
  </button>
</section>

<section id='projects' className='section-container fade-in'>
  <div className="section-title">Projects...</div>

    <button className='item-container fade in' >

        <h2 className='item-title'>Alarm Car</h2>

      <ul className='item-text'>
        <li>Engineered a mobile alarm clock to ensure waking through physical interaction.</li>
        <p></p>
        <li>Assembled a custom car with a Raspberry Pi for programmable control.</li>
        <p></p>
        <li>Developed a Python script for random movement upon alarm activation.</li>
        <p></p>
        <li>Integrated servo motors, buzzers, LEDs, and an ultrasonic module.</li>
        <p></p>
        <li>Designed a system that fosters user engagement and wakefulness.</li>
      </ul>
    </button>

    <button className='item-container fade in' >

        <h2 className='item-title'>NBA Player Comparison</h2>

      <ul className='item-text'>
        <li>Analyzed NBA players' abilities with a custom statistical weight algorithm.</li>
        <p></p>
        <li>Integrated data from an NBA API for historical and current player stats.</li>
        <p></p>
        <li>Developed a nuanced algorithm for comprehensive player performance assessment.</li>
        <p></p>
        <li>Executed complete front-end development for a user-centric web application.</li>
        <p></p>
        <li>Delivered an analytical tool for comparing players across different eras.</li>
      </ul>
    </button>



    <button className='item-container fade in' >

        <h2 className='item-title'>Study Helper Chrome Extension</h2>

      <ul className='item-text'>
        <li>Created a Chrome extension for improved study session organization.</li>
        <p></p>
        <li>Enabled customizable timers for focused study periods and planned breaks.</li>
        <p></p>
        <li>Facilitated a balanced study routine to enhance learning and prevent burnout.</li>
        <p></p>
        <li>Offered a simple, accessible interface for session planning and time management.</li>
        <p></p>
        <li>Addressed a market gap by providing an efficient study planning tool.</li>
      </ul>
    </button>

    <button className='item-container fade in' >

        <h2 className='item-title'>Study Helper Chrome Extension</h2>

      <ul className='item-text'>
        <li>Created a Chrome extension for improved study session organization.</li>
        <p></p>
        <li>Enabled customizable timers for focused study periods and planned breaks.</li>
        <p></p>
        <li>Facilitated a balanced study routine to enhance learning and prevent burnout.</li>
        <p></p>
        <li>Offered a simple, accessible interface for session planning and time management.</li>
        <p></p>
        <li>Addressed a market gap by providing an efficient study planning tool.</li>
      </ul>
    </button>

</section>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
  <div style={{ marginRight: '20px' }}>
    <a href="https://github.com/beo1259" target="_blank" rel="noopener noreferrer">
      <img src={github} className="hyperlink-imgs gold-filter" height="50" alt="GitHub"  style={{filter: 'hue-rotate(14deg)'}}/>
    </a>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
    <a href="https://www.linkedin.com/in/brayden-o-neil-32b405205/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} className="hyperlink-imgs gold-filter" height="45" alt="LinkedIn" />
    </a>
  </div>
</div>


<div style={{ textAlign: 'center', marginBottom: '10px', fontFamily: 'lato', fontSize: '10px', color: 'gold'}}>Copyright ©2023 | All rights reserved | Brayden O'Neil</div>
</div>
    </>
  );
}

export default App;
