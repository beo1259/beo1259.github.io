import './App.css';
import React, { useEffect } from 'react';
import python from './python.png';
import js from './js.png';
import java from './java.png';
import cpp from './C++_logo.png';
import sql from './sql.png';
import toggle from './toggle.png';
import wai from './wai.png';
import mcdonalds from './mcdonalds.png';
import headshot from './Headshot.jpg';
import github from './github.png';
import linkedin from './linkedin.png';

function Header({ currentSection }) {
  const scrollToSection = (sectionId) => {
    const headerOffset = document.querySelector('.header').offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionTop - headerOffset;

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
      <button type="button" className="name-button">
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
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
    <Header />
    <div className='App'>
      
      <section className='section-container'>
      <div class="wrapper">
        <div class="static-txt">I'm a...</div>
        <ul class="dynamic-txts">
          <li><span>Software Engineer</span></li>
          <li><span>Self Starter</span></li>
          <li><span>Student</span></li>
          <li><span>Friend</span></li>
        </ul>
      </div>
      </section>
      <section id='about-me' className='section-container fade-in'>
        <div className='about-me-content'>
          <img src={headshot} className="headshot" alt="Headshot" height="500" />
          <div class='section-text'>
            <div class='section-title'>Hello!</div>
            <p>I'm Brayden! I am a hardworking Computer Science student, who enjoys pursuing hard-to-reach goals
            that require critical thinking and problem solving. I pursue these goals through the use
            of cutting edge technology that I find interesting, and maintain an optimistic attitude
            when faced with an issue.</p>
            <p>
            Outside of Software Engineering, I enjoy things like film, mixed martial arts, and chess. Contact me if you would like to discuss these!
            </p>
          </div>
        </div>
      </section>
      <section id='skills' className='section-container fade-in'>
        <div class='section-title'>My Languages...</div>
        <div className="section-text">
          <h3>Python <img src={python} className="image-logo" alt="python" height="100" /></h3>
          <p>Adept at Python, adept at leveraging its powerful libraries for data analysis, machine learning, and web development. My experience ranges from automating tasks to developing complex algorithms, emphasizing clean, efficient code.</p>
        </div>
        <div className="section-text">
          <h3>JavaScript <img src={js} className="image-logo" alt="js" height="80" /></h3>
          <p>Skilled in JavaScript, with a strong grasp of both front-end and back-end development. I excel in creating dynamic, user-friendly web applications using frameworks like React and Node.js, with a focus on performance and scalability.</p>
        </div>
        <div className="section-text">
          <h3>Java <img src={java} className="image-logo" alt="java" height="100" /></h3>
          <p>Proficient in Java, with substantial experience in building robust, scalable applications. My expertise includes working with Spring Boot for backend services and Android app development, ensuring high-quality software solutions.</p>
        </div>
        <div className="section-text">
          <h3>C++ <img src={cpp} className="image-logo" alt="cpp" height="100" /></h3>
          <p>Experienced in C++, adept at developing high-performance software. My knowledge extends to optimizing algorithms and memory management, suitable for system-level programming and computationally intensive tasks.</p>
        </div>
        <div className="section-text">
          <h3>MySQL <img src={sql} className="image-logo" alt="sql" height="100" /></h3>
          <p>Well-versed in MySQL, specializing in designing and managing databases. My skills include data modeling, query optimization, and ensuring data integrity, crucial for developing data-driven applications with efficient data storage solutions.</p>
        </div>
              
      </section>
      <section id='experience' className='section-container fade-in'>
        <div class="section-title">Experience & Achievements...</div>
          <div className="image-logo">
          <img src={toggle} alt="Toggle Logo" />
        </div>
  
          <div className="section-subtitle">
            <p>
            Software Engineer Intern (Decemeber 2022 - July 2023) 
            </p>
          </div>
          <div className="section-text">
          <p>At Toggle, I leveraged Google's Tesseract API to convert 
            users emails into text format, enabling data accessibility. Additionally, I integrated OpenAI's GPT-4 via their API to provide 
            valuable answers to user queries, enhancing the user experience.</p>

          <p>On the backend, I designed and implemented a database using SQL, with Node.js and Express for REST API development. This allowed 
            us to efficiently store and manage the information generated from the Emails and user interactions.</p>

          <p>For the frontend, I crafted a web app using React, powered by JavaScript, HTML, 
            and CSS, delivering a seamless user interface and overall experience. Additionally, I developed a desktop app using Flutter and Dart, featuring 
            a calendar and the ability to import events from various productivity platforms.</p>

          <p>Collaboration was a key aspect of my role, and I excelled at working with a team via GitHub, ensuring smooth project development and version 
            control. Lastly, I had the privilege of contributing creative and innovative UI/UX design ideas in collaboration with the design team, enhancing 
            the overall user interaction and visual appeal of our applications.</p>
          </div>
          <div className="image-logo">
        </div>
          <div className="section-subtitle">
            <p>
            Western AI Case Competition 2023: Top 3 Finalist, Cash Prize Winner
            </p>
          </div>  
          <div className="section-text">
              <p>My group's task was to conceive an innovative concept centered around AI technology. We addressed the common issue 
                of a lack of human connection experienced during video calls when the connection drops.</p>

              <p>The strategy we devised involved a multi-step approach to enhance the visual quality of video frames.</p>
        
            <p>First, we strategized Fast Super-Resolution Neural Networks (FSCNN) to sharpen the frame. Next, we included Computer Vision 
              techniques to recognize facial structures. Then, we combined the user's 3D face model with the information from computer vision's 
              analysis. Finally, we reconstructed the user's face using a General Adversarial Network (GAN) to achieve a higher-quality result.</p>
          </div>
          
          <div className="image-logo">
          <img src={mcdonalds} alt="McDonalds Logo" height="200" />
        </div>
          <div className="section-subtitle">
            <p>
            McDonalds Crew Trainer
            </p>
          </div>  
          <div className="section-text">
              <p>Recived a promotion to crew trainer as a show of my leadership and collaboration skills</p>

          </div>
              
      </section>
      <section id='projects' className='section-container fade-in'>
  <div className="section-title">Projects</div>


  <div className="section-subtitle">
    <p>Alarm Car</p>
  </div>
  <div className="section-text">
    <article>
      <p>
        This innovative project involves an alarm clock mounted on a set of wheels. It's designed to activate at a user-defined time, 
        initiating a unique mechanism where it drives around the room until the user manually disables it. This design encourages 
        physical interaction, ensuring the user is fully awake.
      </p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Custom-built Car:</strong> The vehicle was meticulously assembled from scratch, incorporating a Raspberry Pi for 
        enhanced customizability and control.</li>
        <li><strong>Python Script:</strong> A specialized Python script was developed to manage the car’s actions. It includes 
        randomized movement patterns triggered when the alarm is set off.</li>
        <li><strong>Component Integration:</strong> The project features a sophisticated blend of various components - servo motors, 
        standard motors, an alarm buzzer, LEDs, and an ultrasonic module. Each component was carefully programmed and integrated 
        to achieve the desired functionality.</li>
      </ul>
    </article>
  </div>

  <div className="section-subtitle">
    <p>NBA Player Comparison</p>
  </div>
  <div className="section-text">
    <article>
      <p>
        This project focuses on evaluating the overall abilities of NBA players through a unique algorithm. The algorithm is designed to 
        assign different weights to each player's statistics, offering a nuanced and comprehensive assessment of their performance.
      </p>
      <h4>Project Highlights:</h4>
      <ul>
        <li><strong>Data Integration:</strong> Utilized a public third-party NBA API to fetch comprehensive player statistics. The data 
        spans from the inception of the NBA to the present, allowing for a broad analysis of player performances across different eras.</li>
        <li><strong>Custom Algorithm Development:</strong> Developed a specialized algorithm that assigns varying weights to different 
        statistical categories. This approach enables a more balanced and accurate representation of a player's overall impact and skill.</li>
        <li><strong>Front-End Development:</strong> Personally handled the entire front-end development of the web application. This 
        experience provided invaluable insights and proficiency in various front-end technologies, enhancing both the functional and 
        aesthetic aspects of the application.</li>
      </ul>
    </article>
  </div>

  <div className="section-subtitle">
    <p>Study Helper Chrome Extension</p>
  </div>
  <div className="section-text">
    <article>
      <p>
        Recognizing the absence of an efficient study planning tool in the Chrome Web Store, I developed this app to fulfill the essential need for simplified study session organization. Its key objective is to enhance the overall study experience by introducing a user-friendly approach to time management.
      </p>
      <h4>Core Features:</h4>
      <ul>
        <li><strong>Customizable Timers:</strong> Enables users to set specific timers for focused study periods, ensuring productive and uninterrupted learning sessions.</li>
        <li><strong>Scheduled Break Times:</strong> Integrates the option to plan break times, facilitating a balanced study routine that prevents burnout.</li>
        <li><strong>Straightforward Planning:</strong> The app offers a straightforward, effortless interface for listing and planning study sessions, making it accessible and convenient for all users.</li>
      </ul>
    </article>
  </div>
</section>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
  <div style={{ marginRight: '20px' }}>
    <a href="https://github.com/beo1259" target="_blank" rel="noopener noreferrer">
      <img src={github} className="hyperlink-imgs" height="75"  alt="GitHub" />
    </a>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
    <a href="https://www.linkedin.com/in/brayden-o-neil-32b405205/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} className="hyperlink-imgs" height="70" alt="LinkedIn" />
    </a>
  </div>
</div>

<div style={{ textAlign: 'center', color: 'white', marginBottom: '10px'}}>Copyright @2023 | All rights reserved | Brayden O'Neil</div>
</div>
    </>
  );
}

export default App;
