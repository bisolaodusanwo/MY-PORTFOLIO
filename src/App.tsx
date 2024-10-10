import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faLink, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import './App.css';

const App: React.FC = () => {


  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.barfiller .fill');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      if (percentage) {
        const percentageValue = parseInt(percentage, 10);
  

        (bar as HTMLElement).style.width = `${percentageValue}%`;

        const tip = bar.querySelector('.tip') as HTMLElement;
        if (tip) {
          tip.textContent = `${percentageValue}%`;
          tip.style.left = `${percentageValue}%`;
        }
      }
    });
  };
  
  

  useEffect(() => {
    const sections = [
      { linkId: 'about-link', sectionId: 'about', closeId: 'close-about' },
      { linkId: 'contact-link', sectionId: 'contact', closeId: 'close-contact' },
      { linkId: 'projects-link', sectionId: 'projects', closeId: 'close-projects' },
    ];

    sections.forEach(({ linkId, sectionId, closeId }) => {
      const link = document.getElementById(linkId);
      const section = document.getElementById(sectionId);
      const closeBtn = document.getElementById(closeId);

      if (link && section && closeBtn) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          section.classList.remove('closing');
          section.style.display = 'block';
          section.classList.add('active'); 

         
          if (sectionId === 'about') {
            animateProgressBars();
          }
        });

        closeBtn.addEventListener('click', function () {
          section.classList.remove('active'); 
          section.classList.add('closing'); 

          
          section.addEventListener('transitionend', function () {
            if (!section.classList.contains('active')) {
              section.style.display = 'none'; 
              section.classList.remove('closing'); 
            }
          }, { once: true });
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home />

        
        <section id="about" className="page-section">
          <button id="close-about" className="close-btn">X</button>
          <div className="container">
            <div className="page-title text-center">
              <p className="subtitle">About</p>
              <h1 className="title">My Resume</h1>
            </div>
            <div className="section-inner">
           
              <div className="row">
                <div className="col-12 col-md-5 col-lg-5">
                  <div className="info-image">
                    <img src="media/bisola_odusanwo.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                  <div className="info-content">
                    <h2>Shaping the Future, One Line of Code at a Time</h2>
                    <div className="entry">
                      <p>I&#039;m Bisola Odusanwo, a passionate and committed Software Engineer with a strong focus on backend development. With a blend of experience in frontend and backend technologies, I specialize in building efficient, scalable, and secure applications. From crafting APIs to integrating databases and designing user interfaces, I love creating solutions that truly make an impact.</p>
                    </div>
                  </div>
                  <div className="row single-info">
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Name:</span> Bisola Odusanwo</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Email:</span><a href="mailto:abizmichelle@gmail.com">abizmichelle@gmail.com</a></p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Linkdin:</span> <a href="https://www.linkedin.com/in/bisolaodusanwo/">@bisolaodusanwo</a></p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Phone:</span><a href="tel:+2349099378204">09099378204</a></p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Experience:</span> 2 years</p>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <p><span>Location:</span> Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="row single-info-btn">
                    <div className="col-12 col-md-12">
                      <a href="/media/Bisola Odusanwo_ cv.pdf" className="btn black-btn margin-rb">Download CV</a>
                      <a href="https://wa.link/31n50l" className="btn black-btn margin-rb" target="_blank" rel="noopener noreferrer">Hire Me</a>
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="row resume-block">
              
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="resume-items">
                    <h2 className="col-title">Education</h2>
                    <div className="item">
                      <span className="bullet"></span>
                      <div className="item-card">
                        <h3>Bachelor of Arts (B.A.) in History</h3>
                        <h4>University of Lagos, Lagos, Nigeria</h4>
                        <li>
                        Transitioning from a humanities background into software development, I have applied my strong analytical skills and research abilities to understanding and solving technical problems in the software world.<br /></li>
                      </div>
                    </div>
                    <div className="item">
                      <span className="bullet"></span>
                      <div className="item-card">
                        <h3>Full Stack Developer Program</h3>
                        <h4>GoMyCode, Nigeria</h4>
                        <li>
                        Completed an intensive bootcamp program where I honed my skills in the MERN stack (MongoDB, Express, React, and Node.js), working on real-world projects with a focus on both frontend and backend development.<br /></li>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>

              
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="resume-items">
                    <h2 className="col-title">Experience</h2>
                    <div className="item">
                      <span className="bullet"></span>
                      <div className="item-card">
                        <h3>Software Developer Intern at GoMyCode, Nigeria</h3>
                        <li>
          Built and maintained RESTful APIs.<br /></li>
          <li>Collaborated with frontend developers using React.js.<br /></li>
          <li>Designed and implemented backend logic using Node.js and Express.js.<br /></li>
          <li>Worked on database design and management using MongoDB and PostgreSQL.
        </li>
                      </div>
                    </div>
                    <div className="item">
                      <span className="bullet"></span>
                      <div className="item-card">
                        <h3>Freelance Software Developer</h3>
                        <li>
                        Designed and developed various web applications for clients, focusing on backend functionality, scalability, and performance.<br /></li>
          <li>Specialized in database design and server-side programming, ensuring optimized and secure solutions.<br /></li>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              
              <div className="skills-block">
                <h2 className="col-title">My Skills</h2>
                <div className="row">
                  {/* <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">Javascript</p>
                      <div className="barfiller javascript">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="70"></span>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">Javascript</p>
                      <div className="barfiller Javascript">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="80"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">Node.js & Express.js</p>
                      <div className="barfiller nodejs">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="80"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">MongoDB & PostgreSQL</p>
                      <div className="barfiller MongoDBPostgreSQL">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">React.js</p>
                      <div className="barfiller ReactJs">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">TypeScript</p>
                      <div className="barfiller TypeScript">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">Git & Version Control</p>
                      <div className="barfiller git">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">Cloudinary</p>
                      <div className="barfiller Cloudinary">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="progress-bar-linear">
                      <p className="progress-bar-text">HTML & CSS</p>
                      <div className="barfiller htmlcss">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="76"></span>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section">
          <button id="close-contact" className="close-btn">X</button>
          <div className="container">
    <div className="page-title text-center">
      <p className="subtitle">Say Hello</p>
      <h1 className="title">Contact Me</h1>
    </div>
    <div className="section-inner">
      <div className="row">
      
        <div className="col-12 col-md-7 col-lg-7">
        <div className="contact-image">
    <img 
      src="/media/bisola_odusanwo.jpg"  
      alt="Your Name"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '10px'
      }} 
    />
  </div>
        </div>

       
        <div className="col-12 col-md-5 col-lg-5">
          <div className="contact-info">
            <h2 className="col-title">Contact Info</h2>
            <p>
            I&#039;m always excited to collaborate on new projects and ideas. Whether you have a question, want to discuss a potential collaboration, or just want to say hello, feel free to reach out! I&#039;m open to opportunities and am happy to connect with like-minded individuals.
            </p>
            <div className="row">
              <div className="col-12">
                <div className="info">
                  <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <div className="desc">
                    <span>Email</span>
                    <p>
                      <a href="mailto:abizmichelle@gmail.com">abizmichelle@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info">
                  <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <div className="desc">
                    <span>Linkedin</span>
                    <p>
                    <a href="https://www.linkedin.com/in/bisolaodusanwo/">@BisolaOdusanwo</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info">
                  <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <div className="desc">
                    <span>Phone</span>
                    <p>
                      <a href="tel:+2349099378204">09099378204</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="info">
                  <span className="icon">
                  <FontAwesomeIcon icon={faInstagram} />
                  </span>
                  <div className="desc">
                    <span>Instagram</span>
                    <p>
                    <a href="https://www.instagram.com/abizcodes?igsh=Z215Z3k2bXRjZ2ln">@abizcodes</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
        </section>

        <section id="projects" className="page-section">
          <button id="close-projects" className="close-btn">X</button>
          <div className="container">
    <div className="page-title text-center">
      <p className="subtitle">Projects</p>
      <h1 className="title">My Works</h1>
    </div>
    <div id="tp_portfolio" className="section-inner">
      <div className="row no-gutters grid-items">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 grid-item">
          <div className="item-box">
            <div className="item-img">
              <img src="/media/realestate.jpg" alt="Real Estate" />
            </div>
            <div className="item-info">
            <a href="https://github.com/bisolaodusanwo/RealEstate-App--server">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="vercel" data-lity="">
                <FontAwesomeIcon icon={faLink} />
              </a>
              <h3><a href="#">Real Estate App Server</a></h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 grid-item">
          <div className="item-box">
            <div className="item-img">
              <img src="/media/ecommerce.avif" alt="Ecommerce Frontend" />
            </div>
            <div className="item-info">
            <a href="https://github.com/bisolaodusanwo/Ecommerce-Frontend">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="vercel" data-lity="">
                <FontAwesomeIcon icon={faLink} />
              </a>
              <h3><a href="#">Ecommerce Frontend</a></h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 grid-item">
          <div className="item-box">
            <div className="item-img">
              <img src="/media/movieapp.avif" alt="Movie App" />
            </div>
            <div className="item-info">
            <a href="https://github.com/bisolaodusanwo/movie-app-react-hooks">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="vercel" data-lity="">
                <FontAwesomeIcon icon={faLink} />
              </a>
              <h3><a href="#">Movie App</a></h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 grid-item">
          <div className="item-box">
            <div className="item-img">
              <img src="/media/carrental.avif" alt="Car Rental App" />
            </div>
            <div className="item-info">
            <a href="https://github.com/bisolaodusanwo/car-rental-app">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="vercel" data-lity="">
                <FontAwesomeIcon icon={faLink} />
              </a>
              <h3><a href="#">Car Rental App</a></h3>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
