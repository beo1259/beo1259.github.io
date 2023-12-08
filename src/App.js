import './App.css';
import React, { useEffect, useState } from 'react';
import python from './python.png';
import js from './js.png';
import java from './java.png';
import cpp from './C++_logo.png';
import htmlcss from './htmlcss.png';
import csharp from './csharp.png';
import typescript from './typescript.png';
import sql from './sql.png';
import expressLogo from './expressLogo.png';
import toggle from './toggle.png';
import wai from './wai.png';
import mcdonalds from './mcdonalds.png';
import headshot from './Headshot.png';
import github from './github.png';
import linkedin from './linkedin.png';
import react from './react.png';
import reactnative from './reactnative.png';
import flutter from './flutter.png';
import pcyc from './pcyc.png'
import githubgrey from './githubgrey.png';
import resume from './resume.pdf';
import flowchart from './flowchart.jpg';
import travellift from './travellift.jpg';
import alarmcar from './alarmcar.jpg';
import nbaplayer from './nbaplayer.jpg';
import study from './chromext.png';
import westerndev from './westerndev.jpg';
import devsociety1 from './devsocietyimg1.JPG'
import devsociety2 from './devsocietyimg2.JPG'
import recommendation from './recommendation.png';

function equalizeContainerHeights() {
  let maxHeight = 0;
  const containers = document.querySelectorAll('.item-container');

  containers.forEach(container => {
    container.style.height = 'auto';
  });

  containers.forEach(container => {
    if (container.offsetHeight > maxHeight) {
      maxHeight = container.offsetHeight;
    }
  });

  containers.forEach(container => {
    container.style.height = `${maxHeight}px`;
  });
}

equalizeContainerHeights();

window.addEventListener('resize', equalizeContainerHeights);



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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <header className="header">
      <button type="name-button"
        className='name-button'
        onClick={() => scrollToTop()}
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
        <button
          type="button"
          className={getButtonClass('skills')}
          onClick={() => scrollToSection('skills')}
        >
          SKILLS
        </button>
        <a
          href={resume}
          className={getButtonClass('resume')}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    </header>
  );
}

function App() {

  const [currentSection, setCurrentSection] = useState('about-me');
  const [activeModal, setActiveModal] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalFadeIn, setModalFadeIn] = useState(false);


  const openModal = (modalId) => {
    setActiveModal(modalId);
    setIsModalVisible(true);
    setTimeout(() => {
      setModalFadeIn(true);
    }, 10);
    disableScrolling();
  };

  const closeModal = () => {
    setModalFadeIn(false);
    setTimeout(() => {
      setIsModalVisible(false);
      setActiveModal(null);
    }, 500);
    enableScrolling();
  };

  const enableScrolling = () => {
    document.body.classList.remove('no-scroll');
  };

  const disableScrolling = () => {
    document.body.classList.add('no-scroll');
  };


  useEffect(() => {


    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        document.querySelector('.header').classList.add('header-hidden');
      } else {
        document.querySelector('.header').classList.remove('header-hidden');
        
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const handleMouseMove = (e) => {
      if (e.clientY < 50) { // 50px from the top
        document.querySelector('.header').classList.remove('header-hidden');
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  




    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            entry.target.classList.add('visible');

            const title = entry.target.querySelector('.section-title');
            if (title) {
              title.classList.add('title-visible');
            }

            if (entry.target.id === 'about-me') {
              document.querySelector('.headshot').classList.add('headshot-visible');
            }
            const containers = entry.target.querySelectorAll('.item-container');
            containers.forEach(container => {
              container.classList.add('item-container-visible');
            });
          } else {
            entry.target.classList.remove('visible');

            const title = entry.target.querySelector('.section-title');
            if (title) {
              title.classList.remove('title-visible');
            }

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
        threshold: 0.09
      }
    );

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      observer.observe(section);
    });



    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('no-scroll');
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (

    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <div className='App'>

        <section id='name' className='name-container'>
          <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
              <li><span>Software Engineer</span></li>
              <li><span>Self Starter</span></li>
              <li><span>Student</span></li>
              <li><span>Creative</span></li>
              <li><span>Hardworker</span></li>
              <li><span>Compulsive Learner</span></li>
              <li><span>Curious Person</span></li>
              <li><span>Programmer</span></li>
            </ul>
          </div>
        </section>
        <section id='about-me' className='section-container fade-in'>
          <div className='item-container'>
            <div className='headshot-container'>
              <img src={headshot} className="headshot" alt="Headshot" />
            </div>
            <div>
              <div class="about-me-title">HELLO!</div>
              <p class='section-text'>I'm Brayden! I am a hardworking Computer Science student, who enjoys pursuing hard-to-reach goals
                that require critical thinking and problem solving. I pursue these goals through the use
                of cutting edge technology that I find interesting, and maintain an optimistic attitude
                when faced with adversity.
              </p>
              </div>
              </div>

              <button onClick={() => openModal('aboutmeModal')} className='section-text-mobile'>
              <div class="about-me-title">HELLO!</div>
                Welcome to my portfolio! My name is Brayden, I'm a hardworking Computer Science student passionate about tech and innovation!
              </button>
              {isModalVisible && activeModal === 'aboutmeModal' && (
                <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
                  <div className="overlay" onClick={closeModal}></div>
                  <div className="modal-content">
                    <h2 className='item-title'>Who am I?</h2>
                    <button className='close-modal' onClick={closeModal}>
                      X
                    </button>
                    <p className='modal-text'>I'm Brayden! I am a hardworking Computer Science student, who enjoys pursuing hard-to-reach goals
                      that require critical thinking and problem solving. I pursue these goals through the use
                      of cutting edge technology that I find interesting, and maintain an optimistic attitude
                      when faced with adversity.
                    </p>

                    <p><img src={headshot} alt="headshot" className='headshot-modal' /></p>

                  </div>
                </div>
              )}

        </section>
        
        <section id='experience' className='section-container fade-in'>
          <div className="section-title">Experience...</div>

          <button onClick={() => openModal('toggleExperience')} id='experiences' className='item-container fade in'>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={toggle} alt="Toggle Logo" className='logo' />
              <h2 className='item-title'>Toggle<div className='item-subtitle'>Full-Stack Software Engineer Intern: (2022 - 2023, 2023 - Present) </div></h2>
            </div>
            <ul className='item-text'>
              <li>Integrated OpenAI's GPT-4 to deliver accurate responses to user inquiries.</li>
              <p></p>
              <li>Designed and implemented a SQL database, with a Node.js/Express backend.</li>
              <p></p>
              <li>Created a web app interface using React, and a desktop app with Flutter.</li>
            </ul>
          </button>

          {isModalVisible && activeModal === 'toggleExperience' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Experience at Toggle</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>At toggle, I was priviledged with working with a capable team of Software Engineers who I was able to learn a lot from.</p>
                <p></p>
                <p className='modal-text'>I became experienced with frameworks like React and React Native, as I was tasked with developing a website and
                  mobile app built upon these structures. I enhanced my previous knowledge of JavaScript, HTML, and CSS for front-end, and learned Backend for the first
                  time where a coworker and I built a SQL database and REST API with the use of Express and NodeJS. We incoroporated Open AI's GPT-4 API where we would provide a
                  user's email as a pdf and allow the user to ask questions that pertain to the information. Google's Tesseact OCR was used as the PDF would be converted to an
                  image, and then it's contents would would be read by Tesseract and given to GPT-4
                </p>
                <p></p>
                <p className='modal-text'>
                  Outside of technical expereince, I was able to learn how a group environment functions and what must be done to ensure proper collaboration.
                  I gained expereince with Git, and frequently helped the UI/UX team come up with designs for the website with Figma. The skills I've learned about working
                  with others throught this position are invaluable, and I am grateful that I was given the oppurtunity to blossom among talented minds.
                </p>
                <p></p>
                <p className='modal-text'>
                  Please view this letter of recommendation from my previous boss, and CEO of Toggle, Gyu Tae Bae:
                </p>
                <p></p>
                <p><img src={recommendation} alt='flowchart' className='flowchart-img' /></p>

              </div>
            </div>
          )}

          <button onClick={() => openModal('devsocietyExperience')} id='experiences' className='item-container fade in'>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={westerndev} alt="Western Dev Logo" className='logo' style={{ borderRadius: '10px' }} />
              <h2 className='item-title'>Western Dev Society Overhaul Hackathon - 2nd Place<div className='item-subtitle'>(December 3, 2023)</div></h2>
            </div>
            <ul className='item-text'>
              <li>Created a note taking web-app optimized for those with impairments.</li>
              <p></p>
              <li>Used various APIs for accessibility, such javascript's text-to-speech and speech-to-text built in APIs, and the Google Cloud Translation API.</li>
              <p></p>
              <li>Created a full front-end and back-end for user storage in the 36 hours given.</li>
            </ul>
          </button>

          {isModalVisible && activeModal === 'devsocietyExperience' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Experience at Western Dev Society's 2023 Overhaul Hackathon</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>At the hackathon, I was part of an incredible team that inspired me with their skills and knowledge. Our
                  collaboration led to an enriching learning experience.</p>
                <p></p>
                <p className='modal-text'>We developed a cutting-edge note-taking app specifically designed for impaired individuals. The app featured Text-to-Speech
                  (TTS) and Speech-to-Text (STT) capabilities, facilitated by advanced frameworks. My role involved significant work in front-end development using
                  JavaScript, HTML, and CSS, as well as backend development, where we established a robust SQL database and a REST API using Express and NodeJS.
                  A key feature of our app was its live translation functionality, powered by Google Cloud API, which was instrumental in our second-place win at the
                  hackathon.</p>
                <p></p>
                <p className='modal-text'>
                  This project wasn't just a technical journey; it was a lesson in teamwork and collaboration. I honed my skills in Git and ensured our web-app was not only functional but also user-friendly. We focused on accessibility features like font resizing to cater to a
                  broader range of users. The experience of working in such a dynamic group and achieving second place at the hackathon has been incredibly valuable,
                  teaching me the importance of teamwork in bringing innovative ideas to life.
                </p>

                <p className='modal-text'>
                  One of the most fulfilling aspects of this project was my deep commitment to making web applications accessible. Through my coding experience,
                  I gained profound insights into the struggles of impaired individuals. This understanding drove me to ensure that our app was not just a technological
                  triumph, but a beacon of inclusivity. Implementing features like voice commands, audio feedback, and adjustable visual settings, I learned the
                  immense value of accessibility in technology. This experience didn't just enhance my technical skills; it also instilled in me a strong sense of
                  empathy and a passion for creating solutions that cater to all users, regardless of their abilities.
                </p>
                <p></p>
                <p className='modal-text'>
                  If you'd like to learn more about this, please check the projects section!
                </p>
              </div>
            </div>
          )}
          <button onClick={() => openModal('waiExperience')} id='experiences' className='item-container fade in'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={wai} alt="WAI Logo" className='logo' />
              <h2 className='item-title'>Western AI Case Competition - 3rd Place<div className='item-subtitle'> (November 19, 2023) </div></h2>
            </div>
            <ul className='item-text'>
              <li>Conceptualized an AI-based solution to improve human connection in video calls, involing replacing the low quality face with a 3D rendered version</li>
              <p></p>

              <li>Awarded Top 3 Finalist among 35 teams, received a cash prize for innovative approach.</li>
            </ul>
          </button>
          {isModalVisible && activeModal === 'waiExperience' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Experience Competing in Western AI's 2023 Case Compeition</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>At this year's Wetsern AI Case Compeition, groups were tasked with creating an innovative product using AI, a very general instruction which
                  left very much room for interpretation. My group placed 3rd out of 5 finalists, and 35 teams overall.</p>
                <p></p>
                <p className='modal-text'> I was lucky enough to be paired with 3 other very competent and creative group members, and we came up with an idea to solve the problem of low quality
                  video calls, and the lack of human conncetion that is felt when this occurs. Our process included using a submitted 3D scan of the user's face, which most of today's smartphones are capable
                  of. Through the use of that, and various AI technologies we would construct a mapping of the user's constructed face on top of the low quality image. Please view the flowchart I created:
                  <img src={flowchart} alt='flowchart' className='flowchart-img' />
                </p>
                <p></p>
                <p className='modal-text'> This 48 hour project greatly enhanced my ability to work under pressure with a team, and having to be creative in such a short time helped me understand
                  the way that my brain works in a time of stress, and how to maintain composure.
                </p>

              </div>
            </div>
          )}


          <button onClick={() => openModal('pcycExperience')} id='experiences' className='item-container fade in'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={pcyc} alt="PCYC Logo" className='logo' />
              <h2 className='item-title'>Port Credit Yacht Club<div className='item-subtitle'> Harbour Staff/Administrative Assistant: (2022 - 2023, Seasonal) </div></h2>
            </div>
            <ul className='item-text'>
              <li>Dealt with conflict among employees and members, resolving situations swiftly.</li>
              <p></p>

              <li>Accessed member data in a database, learning how company's backend is structured.</li>
              <p></p>
              <li>Worked on/fixed the docks, maintaining a high level of club preservation.</li>
            </ul>
          </button>

          {isModalVisible && activeModal === 'pcycExperience' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Experience at Port Credit Yacht Club</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>I've worked at Port Credit Yacht Club for the past two summers, and it has been an incredible experience that has taught me valuable soft skills,
                  skills that I still apply to this day, and am eternally glad that I possess.</p>
                <p></p>
                <p className='modal-text'> My role as Administrative Assistant consisted of me being put in charge of a dock office, where members would frequently come in and access our services, such as:
                  buying ice, booking dock space to bring their boat, and requesting event information. In this position, I frequently worked with Microsoft Excel to create and modify spreadsheets that contained
                  information such as: dock layouts, employee information, and member's boat launch and haulout dates. I also used Jonas Databases to access member information when a member needed to be contacted,
                  whch helped me understand the way that the backends of companies are structured.
                </p>
                <p></p>
                <p className='modal-text'> My role as Harbour Staff consisted of various tasks which helped to maintain the quality of the club, which I took pride in. My team and I were frequently
                  fixing docks and building new additions to the club, and I really developed an appreciation for seeing work that I had a hand in completed to the highest degree. At the beginning
                  and end of the boating season, I was launching, and hauling boats in and out of the water. This required a great deal of responsiblity, as one slip up could have resulted in the the boat
                  slipping out of the slings. This image is an example of what we used to launch/haulout boats:
                  <img src={travellift} alt='travellift' className='flowchart-img' />
                </p>

              </div>
            </div>
          )}
          <button onClick={() => openModal('mcdonaldsExperience')} id='experiences' className='item-container fade in' >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={mcdonalds} alt="McDonalds Logo" className='logo' />
              <h2 className='item-title'>McDonalds Crew Trainer<div className='item-subtitle'> (2020 - 2021) </div></h2>
            </div>
            <ul className='item-text'>
              <li>Promoted to Crew Trainer, demonstrating leadership and teamwork skills.</li>
              <p></p>
              <li>Guided new employees through training processes and protocols.</li>
              <p></p>
              <li>Ensured high standards of customer service and operational efficiency.</li>

            </ul>
          </button>

          {isModalVisible && activeModal === 'mcdonaldsExperience' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Experience at McDonalds</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>At McDonalds, I was originally kitchen staff, and then promoted to Crew Trainer as a testament to my leadership and responsibility</p>
                <p></p>
                <p className='modal-text'>In my role as crew trainer, I frequently trained new employees and kept in mind their lack of knowledge pertaining to the way the kitchen
                  works. This skill still comes in handy when working with people who are less versed on a specific topic.
                </p>
                <p></p>
                <p className='modal-text'>
                  My managers saw that I always showed up on time, respected my coworkers, and put the efficiency and quality of the food first. As a show of appreciation, I was
                  promoted to Crew Trainer after only 2 months of working. I took this role seriously, as even though a job at McDonalds is not extremely difficult to obtain,
                  I am unable to put my name on something that isn't done with my best effort.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id='projects' className='section-container fade-in'>
          <div className="section-title">Projects...</div>

          <button onClick={() => openModal('inklinkModal')} className='item-container fade in' >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://github.com/beo1259/WDS-Overhaul-2023" target="_blank" rel="noopener noreferrer">
                <img src={githubgrey} alt="github grey" className='github-grey' />
              </a>
              <h2 className='item-title'>INKLINK; Note Taking Made Acessible<div className='item-subtitle'> (2023) </div></h2>
            </div>

            <ul className='item-text'>
              <li>Note Taking App for the visually impaired, made possible with the use of various APIs for specific features.</li>
              <p></p>
              <li>Our goal was to create an accesible application plus a generally inclusive browsing experience.</li>
              <p></p>
              <li>Developed a full front-end and back-end, furthering my understanding of both.</li>

            </ul>
          </button>
          {isModalVisible && activeModal === 'inklinkModal' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My App Dedicated to Improving Note Taking for the Impaired</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>
                  Our project's mission was to develop a note-taking application specifically designed for impaired users. This endeavor aimed to revolutionize digital
                  accessibility, allowing individuals with various impairments to interact more effectively with digital content. We focused on creating a tool that
                  would simplify the process of capturing and organizing thoughts, making digital note-taking a seamless experience for all users, regardless of their
                  physical or cognitive abilities.
                </p>
                <p className='modal-text'>
                  In developing the application, we incorporated advanced features like Text-to-Speech (TTS) and Speech-to-Text (STT). These technologies were pivotal
                  in ensuring the app was accessible. TTS allowed visually impaired users to hear the text read aloud, making it easier for them to comprehend and
                  interact with the content. Conversely, STT enabled users with mobility or dexterity challenges to dictate their notes, breaking down barriers in the
                  note-taking process.
                </p>
                <p className='modal-text'>
                  A standout feature of our app was its live translation capability, powered by the Google Cloud API. This functionality was a game-changer,
                  particularly for non-native speakers and those with hearing impairments. It allowed for real-time translation of spoken or written text, facilitating
                  better comprehension and engagement with content in various languages, thereby enhancing the inclusivity and utility of the note-taking process.
                </p>
                <p className='modal-text'>
                  For the front-end, we employed HTML, CSS, and JavaScript to craft an intuitive and accessible user interface, designed to be navigable and
                  understandable for users with different impairments. The backend, supported by Express, NodeJS, and a SQL database, ensured robust data management
                  and responsiveness. We meticulously integrated accessibility features, such as adjustable font sizes and straightforward navigation, to make the
                  application not just functional but also truly accommodating for all users, thereby enriching the note-taking experience for the impaired community.
                </p>
                <p></p>

                <img src={devsociety1} alt="Inklink Demo 1" className='flowchart-img' />
                <img src={devsociety2} alt="Inklink Demo 2" className='flowchart-img' />
                <p></p>
                <p className='modal-text'>
                  This was done as a part of Western Developer Society's 2023 Overhaul hackathon, where my team took second place. See experience section
                  to learn more.
                </p>

              </div>
            </div>
          )}

          <button onClick={() => openModal('alarmcarModal')} className='item-container fade in' >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://github.com/beo1259/Alarm-Car" target="_blank" rel="noopener noreferrer">
                <img src={githubgrey} alt="github grey" className='github-grey' />
              </a>
              <h2 className='item-title'>Alarm Car<div className='item-subtitle'> (2023 - Present) </div></h2>
            </div>

            <ul className='item-text'>
              <li>Engineered a mobile alarm clock to ensure waking through physical interaction.</li>
              <p></p>
              <li>Assembled a custom car with a Raspberry Pi for programmable control.</li>
              <p></p>
              <li>Developed a Python script for random movement upon alarm activation.</li>

            </ul>
          </button>
          {isModalVisible && activeModal === 'alarmcarModal' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Alarm Car Project</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>
                  During my time working on this project, I've been able to expand my comptuer engineering skills, building an RC car completely from scratch,
                  and connecting it to a Raspberry Pi that runs a script to randomize its movement when the user-defined alarm time is reached.
                </p>
                <p></p>
                <p className='modal-text'>
                  Working on this has been one of my most challenging, yet rewarding projects becuase
                  I had previously not worked as in depth with hardware. The goal was to create an alarm that necessitates
                  physical interaction to turn it off, ensuring that the user gets out of bed out of bed. This involved designing a mechanism that could move autonomously, integrating
                  it with an alarm system that would only deactivate with a specific level of physical interaction.
                </p>
                <p></p>
                <p className='modal-text'>
                  I also assembled a custom car equipped with a Raspberry Pi for programmable control. This involved not only hardware assembly but also software
                  programming to enable the car to perform various tasks autonomously. It was an exercise in both engineering and computer science, providing a hands-on
                  experience with robotics and the Internet of Things (IoT).
                </p>
                <p></p>
                <p className='modal-text'>
                  To bring this projects to life, I developed a Python script capable of initiating random movements in the alarm clock upon activation. This script
                  was essential for the alarm clock's functionality, requiring an understanding of Python's programming logic and hardware interaction to successfully
                  create random, yet controlled, movement patterns.
                  <img src={alarmcar} alt='alarmcar' className='flowchart-img' />
                </p>


              </div>
            </div>
          )}

          <button onClick={() => openModal('portfolioModal')} className='item-container fade in' >

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://github.com/beo1259/beo1259.github.io" target="_blank" rel="noopener noreferrer">
                <img src={githubgrey} alt="github grey" className='github-grey' />
              </a>
              <h2 className='item-title'>My Personal Portfolio Website<div className='item-subtitle'> (2023 - Present) </div></h2>
            </div>

            <ul className='item-text'>
              <li>The website you're currently on, <span style={{ color: 'gold', textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073' }}>welcome!</span></li>
              <p></p>
              <li>Included JavaScript functions to work in conjunction with my HTML and CSS designs.</li>
              <p></p>
              <li>Emphasized a focus on simplicity to focus on a smooth experience.</li>

            </ul>
          </button>

          {isModalVisible && activeModal === 'portfolioModal' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>This Website</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>
                  <span style={{ color: 'gold', textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073' }}>The website that you're currently navigating </span> is a testament to my passion for web development and design.
                </p>
                <p></p>
                <p className='modal-text'>
                  It integrates JavaScript functions seamlessly with my HTML and CSS designs, demonstrating my technical skill in creating dynamic, interactive web elements.
                </p>
                <p></p>
                <p className='modal-text'>
                  Throughout the development process, I placed a strong emphasis on simplicity to ensure a smooth and intuitive user experience, focusing on the ease of navigating through the content.
                </p>
                <p></p>
                <p className='modal-text'>
                  This project serves as a personal playground for showcasing my design ideas and capabilities, reflecting my creativity and the breadth of my web development skills.
                </p>
                <p></p>
                <p className='modal-text'>
                  Working on this site allowed me to refresh and reinforce my knowledge of web development fundamentals, broadening my expertise and enhancing my ability to craft well-structured, aesthetically pleasing websites.
                </p>


              </div>
            </div>
          )}
          <button onClick={() => openModal('nbaModal')} className='item-container fade in' >

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://github.com/beo1259/nba-player-comparison" target="_blank" rel="noopener noreferrer">
                <img src={githubgrey} alt="github grey" className='github-grey' />
              </a>
              <h2 className='item-title'>NBA Player Comparison<div className='item-subtitle'> (2022 - 2023) </div></h2>
            </div>

            <ul className='item-text'>
              <li>Analyzed NBA players' abilities with a statistical weight calculation.</li>
              <p></p>
              <li>Integrated data from an NBA API for historical and current player stats.</li>
              <p></p>
              <li>Implemented measures to ensure accuracy and consistency of player's stats.</li>

            </ul>
          </button>

          {isModalVisible && activeModal === 'nbaModal' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My NBA Player Comparison Project</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>
                  My project analyzing NBA players' performance was a deep dive into the world of sports analytics. By calculating statistical weights for various
                  abilities, I was able to quantify the contributions of players to their teams. This process required a nuanced understanding of the game's mechanics
                  and the factors that contribute to a player's success on the court.
                </p>
                <p></p>
                <p className='modal-text'>
                  The integration of data from an NBA API was a crucial component of my analysis. It allowed me to access a vast repository of historical and current
                  player statistics, providing a rich dataset to inform my calculations. This step demonstrated my ability to work with complex datasets and extract
                  meaningful insights from them.
                </p>
                <p></p>
                <p className='modal-text'>
                  Ensuring the accuracy and consistency of the players' stats was paramount. To achieve this, I implemented various measures, including data validation
                  and normalization techniques. These steps ensured that the statistical analysis was reliable and could be trusted by users of the analytical tool.
                </p>
                <p></p>
                <p className='modal-text'>
                  The project also included the complete front-end development of a user-centric web application. This phase involved designing and coding the user
                  interface, ensuring that the application was not only functional but also intuitive to use. My focus was on providing a seamless user experience that
                  made the analysis accessible to all users.
                </p>
                <p></p>
                <p className='modal-text'>
                  I delivered an analytical tool that fills a gap in the current internet offerings. This tool allows for the comparison of NBA players across different
                  eras in a simplified manner, catering to fans and analysts alike. My approach was to create a simple yet powerful tool that could bring complex
                  statistical insights into a more digestible format for the average user.
                  <img src={nbaplayer} alt='nbaplayer' className='flowchart-img' />
                </p>

              </div>
            </div>
          )}

          <button onClick={() => openModal('studyModal')} className='item-container fade in' >

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://github.com/beo1259/Study-Helper-Chrome-Extension" target="_blank" rel="noopener noreferrer">
                <img src={githubgrey} alt="github grey" className='github-grey' />
              </a>
              <h2 className='item-title'>Study Helper Chrome Extension<div className='item-subtitle'> (2023 - Present) </div></h2>
            </div>

            <ul className='item-text'>
              <li>Created a Chrome extension for improved study session organization.</li>
              <p></p>
              <li>Enabled customizable timers for focused study periods and planned breaks.</li>
              <p></p>
              <li>Offered a simple, accessible interface for session planning and time management.</li>

            </ul>
          </button>

          {isModalVisible && activeModal === 'studyModal' && (
            <div className={`modal ${modalFadeIn ? 'modal-fade-in' : 'modal-fade-out'}`}>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <h2 className='item-title'>My Study Helper Chrome Extension</h2>
                <button className='close-modal' onClick={closeModal}>
                  X
                </button>
                <p className='modal-text'>
                  The Chrome extension I developed serves as an innovative solution for managing study sessions. Its creation was motivated by the need for improved
                  organizational tools that cater specifically to the unique rhythms of focused study and rest periods.
                </p>
                <p></p>
                <p className='modal-text'>
                  The extension features customizable timers that allow users to define periods of concentrated study along with scheduled breaks. This functionality
                  supports the Pomodoro Technique and similar time management methods that have been proven to boost productivity.
                </p>
                <p></p>
                <p className='modal-text'>
                  By facilitating a balanced study routine, the extension helps users to optimize their learning while also preventing burnout. Recognizing the
                  importance of regular breaks for mental health and sustained focus, it encourages a healthier approach to study habits.
                </p>
                <p></p>
                <p className='modal-text'>
                  Accessibility was a key consideration in the design of the extension’s interface. It offers a simple, intuitive UI that allows for quick session
                  planning and time management, enabling users to start their study sessions with minimal setup time.
                </p>
                <p></p>
                <p className='modal-text'>
                  With this extension, I addressed a gap in the Chrome Web Store for efficient and user-friendly study planning tools. It stands out by providing a
                  streamlined solution that helps students and professionals alike to organize their study sessions more effectively.
                  <p></p>
                  <img src={study} alt='study' className='chrome-img' />
                </p>


              </div>
            </div>
          )}


        </section>
        <div className="skills-section">
          <section id='skills' className='section-container fade in skills-section'>
            <div className='lang-container'>
              <div class="section-title">Languages...</div>

              <button id='experiences' className='item-container fade in'>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={python} alt="Python logo" className='lang-img' />
                  <h2 className='item-title'>Python</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I have been using python since I was 14 years old, and am very well versed in this language. I frequently practice Leetcode problems using python
                    as I find it to be the closest to pseudocode.
                  </li>
                  <li>
                    I have also used it for my Alarm Car project;
                    the entire script for its movement and behaviour is written in python.
                  </li>
                </ul>
              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={java} alt="Java logo" className='lang-img' />
                  <h2 className='item-title'>Java</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I have been using Java since high school, and it is currently my strongest language.
                  </li>
                  <li>
                    Java provides an  Object-Oriented programming experience, which makes it easy to bring the ideal structure of my projects into fruition
                  </li>
                </ul>
              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={js} alt="JavaScript logo" className='lang-img' />
                  <h2 className='item-title'>JavaScript</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    JavaScript is essential for creating an entertaining user experience for web apps, and I have been honing on it while building this website!
                  </li>
                  <li>
                    I enjoy this aspect of web development, as it enables me to employ my problem solving skills and strategize approaches to different issues I may face while developing a website.
                  </li>
                </ul>

              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={typescript} alt="TypeScript logo" className='lang-img' />
                  <h2 className='item-title'>TypeScript</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I first used TypeScript at my most recent internship with Toggle, and picked it up rather quickly due to my previous experience with JavaScript.
                  </li>
                  <li>
                    I think TypeScript is a great choice for scalable websites worked on by a large group of people, as it outshines JavaScript in its maintainability and readability.
                  </li>
                </ul>
              </button>


              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={htmlcss} alt="HTML/CSS logo" className='lang-img' />
                  <h2 className='item-title'>HTML/CSS</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I have become very fluent in HTML while experimenting with web development over the past few years, I'm able to quickly turn a visualized website structure into what I want.
                  </li>
                  <li>
                    CSS has many styles, however its structure is simple. I'm able to consistently apply my desired design after of years of experience.
                  </li>
                </ul>
              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={csharp} alt="C# logo" className='lang-img' />
                  <h2 className='item-title'>C#</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    Syntatically, I was able to pick C# up pretty quickly due to my abilities with Java; however I find the process of coding with C# more efficient than the latter.
                  </li>
                  <li>
                    C# is extremely scalable and used very widely, so I am currently practicing and learning its ins and outs by the day.
                  </li>
                </ul>
              </button>
              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={cpp} alt="C++ Logo" className='lang-img' />
                  <h2 className='item-title'>C/C++</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I am currently taking an Operating Systems course, and the assignments are done in C, which has allowed me to hone in on my low-level skills.
                  </li>
                  <li>
                    Being that C++ is very similar syntatically, but used on a much higher-level, I certainly plan to incorporate it into one of my future projects.
                  </li>
                </ul>
              </button>
              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={sql} alt="SQL logo" className='lang-img' />
                  <h2 className='item-title'>SQL</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    In my intership at Toggle, a coworker an I managed a SQL database, where I leared how to write queries and the structure of MySQL.
                  </li>
                  <li>
                    I frequently practice writing queries with Leetcode SQL questions, as SQL is an ever present language, and every back-end engineer will work with it at some point.
                  </li>
                </ul>
              </button>
            </div>
            <div className='lang-container'>
              <div class="frameworks-title" >Frameworks...</div>

              <button id='skills' className='item-container fade in'>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={react} alt="React logo" className='lang-img' />
                  <h2 className='item-title'>React</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    In my intership at Toggle, React was the main framework I worked with for the front-end of the web-app, gaining invaluable experience with it.
                  </li>
                  <li>
                    I was able to learn from my coworkers how frameworks are used to structure web-apps, and it boosted my conceptual and technical understanding of front-end development.
                  </li>
                </ul>
              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={reactnative} alt="Native logo" className='lang-img' />
                  <h2 className='item-title'>React Native</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    Being that React Native is extremely similar to React, it wasn't as hard to pick up and was a smooth transition for me.
                  </li>
                  <li>
                    I learned how mobile devleopment frameworks work in conjunction with Android Studio, which I previously had no knowledge of.
                  </li>
                </ul>
              </button>

              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={flutter} alt="Flutter logo" className='lang-img' />
                  <h2 className='item-title'>Flutter and Dart</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    I have been using Flutter for a personal project, and at my internship with Toggle, where I helped build the front-end of a desktop app for Windows and MacOS.
                  </li>
                  <li>
                    This came with an understanding of dart, the language used with flutter. I find dart to be an interesting approach to the structure of code in web development, and I am excited keep using it.
                  </li>
                </ul>
              </button>


              <button id='skills' className='item-container fade in'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={expressLogo} alt="Express.js logo" className='lang-img' />
                  <h2 className='item-title'>Express/NodeJS</h2>
                </div>
                <ul className='item-text'>
                  <li style={{ paddingBottom: '7px' }}>
                    Express and Node JS is what a coworker and I at Toggle used to engineer the REST API to connect our front-end to our back-end SQL database.
                  </li>
                  <li>
                    Though it took some time to pickup, the use of NodeJS to write the REST API has not only taught me how to use Express/NodeJS, but given me and understanding of a back-end is structured to its core.
                  </li>
                </ul>
              </button>
            </div>

          </section>
        </div>

        <div className='bottom-icons'>
          <a href="https://github.com/beo1259" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='Github icon' className="hyperlink-imgs" style={{ filter: "hue-rotate(-15deg)" }} />
          </a>

          <a href="https://www.linkedin.com/in/brayden-o-neil-32b405205/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='Linkedin Icon' className="hyperlink-imgs" />
          </a>


        </div>


        <div className='copyright-text'>Copyright ©2023 | All rights reserved | Brayden O'Neil</div>
      </div>
    </>
  );
}

export default App;