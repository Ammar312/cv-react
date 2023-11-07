import "./App.css";
import skill from "./skills.png";
import suitcase from "./suitcase.png";
import python from "./assets/python.pdf";
import wordpress from "./assets/wordpress.pdf";
import graphic from "./assets/graphic design.pdf";
import pic from "./pic.png";

function App() {
  return (
    <>
      <div className="display">
        <section className="main">
          <div className="main1Div">
            <div className="img">
              <span>
                <img src={pic} alt="" />
                {/* <i className="bi bi-person-fill"></i> */}
              </span>
            </div>
            <div className="nameAndTagline">
              <h1>Ammar Ul Mustafa</h1>
              <p>MERN STACK DEVELOPER</p>
              <div>
                Passionate MERN Stack Developer with a knack for creating smooth
                web experiences. Turning ideas into practical solutions with
                creative coding and an eye for good design. Excited to use my
                MongoDB, Express, React, and Node.js skills to build dynamic
                apps that make a lasting impact.
              </div>
            </div>
          </div>
          <div className="main2Div">
            <div className="iconAndHeading">
              <span>
                <img src={skill} alt="skill icon" className="skillIcon" />
              </span>
              <p>SKILLS</p>
            </div>
            <div className="skills">
              <div className="skill">
                <span>
                  Front-end <br />
                  technology
                </span>
                <p>HTML5, CSS3, Tailwind CSS, JavaScript and ReactJS</p>
              </div>
              <div className="skill">
                <span>
                  Back-end <br />
                  technology
                </span>
                <p>NodeJS, ExpressJS and JWT</p>
              </div>
              <div className="skill">
                <span>Database</span>
                <p>MongoDB, Firebase and Pinecone</p>
              </div>
              <div className="skill">
                <span>Soft Skills</span>
                <p>Teamwork, Adaptability and Work Ethic</p>
              </div>
            </div>
          </div>
          <div className="main3Div">
            <div className="iconAndHeading">
              <span>
                <i className="bi bi-mortarboard"></i>
              </span>
              <p>Education</p>
            </div>
            <div className="educationDiv">
              <div className="education">
                <div>Web and App Development</div>
                <span>Saylani Mass IT Training {`(SMIT)`}</span>
                <p>Dec 2022 - Dec 2023</p>
              </div>
              <div className="education">
                <div>Intermediate in Pre-Engineering</div>
                <span>DJ Science College</span>
                <p>2020-2022</p>
              </div>
              <div className="education">
                <div>Matriculation in Computer Science</div>
                <span>The Educators School</span>
                <p>2018-2020</p>
              </div>
            </div>
          </div>
          <div className="main2Div">
            <div className="iconAndHeading">
              <span>
                <img src={suitcase} alt="skill icon" className="skillIcon" />
              </span>
              <p>Certifications</p>
            </div>
            <div className="education">
              <div>Google Certificate</div>
              <a
                href={python}
                download="Google Certification in Python"
                target="_blank"
                rel="noreferrer"
              >
                <span>Crash Course in Python</span>
              </a>
            </div>
            <div className="education">
              <div>DigiSkills Certificates</div>
              <a
                href={wordpress}
                download="Wordpress certificate"
                target="_blank"
                rel="noreferrer"
              >
                <span>Wordpress Certificate</span>
              </a>
              <br />
              <br />
              <a
                href={graphic}
                download="Graphic Design certificate"
                target="_blank"
                rel="noreferrer"
              >
                <span>Graphic Design Certificate</span>
              </a>
            </div>
          </div>
        </section>

        {/* --------------- */}
        <section className="sidebar">
          <div className="info">
            <div className="line">
              <span>
                <i className="bi bi-envelope-fill"></i>
              </span>
              <p>ammar.ul.mustafa3@gmail.com</p>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-phone-fill"></i>
              </span>
              <a
                href="https://wa.me/3104160942"
                target="_blank"
                rel="noopener noreferrer"
              >
                03104160942
              </a>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-linkedin"></i>
              </span>
              <a
                href="https://www.linkedin.com/in/ammar-ul-mustafa-728b5820b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ammar-ul-mustafa
              </a>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-github"></i>
              </span>
              <a
                href="https://github.com/Ammar312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Ammar312
              </a>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <p>Karachi,Pakistan</p>
            </div>
          </div>
          <div className="secondBar">
            <div className="projectDiv">
              <div className="iconAndHeadingSideBar">
                <span>
                  <i className="bi bi-mortarboard"></i>
                </span>
                <p>PROJECTS</p>
              </div>
              <div className="projects">
                <div className="project">
                  <i className="bi bi-app"></i>
                  <a
                    href="https://jwt-auth-server-production-8cfa.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JWT Auth Server
                  </a>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <a
                    href="https://ammar312.github.io/weather-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weather App
                  </a>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <a
                    href="https://ammar312.github.io/project-planning/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trello Clone
                  </a>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <a
                    href="https://ammar312.github.io/grocery-list/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grocery Bud
                  </a>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <a
                    href="https://ammar312.github.io/threads-clone/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Threads Clone
                  </a>
                </div>
              </div>
            </div>
            <div className="projectDiv">
              <div className="iconAndHeadingSideBar">
                <span>
                  <i className="bi bi-translate"></i>
                </span>
                <p>LANGUAGES</p>
              </div>
              <div className="projects">
                <div className="project">
                  <i className="bi bi-app"></i>
                  <p className="language">URDU</p>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <p className="language">ENGLISH</p>
                </div>
              </div>
            </div>
            <div className="projectDiv">
              <div className="iconAndHeadingSideBar">
                <span>
                  <i className="bi bi-translate"></i>
                </span>
                <p>HOBBIES</p>
              </div>
              <div className="projects">
                <div className="project">
                  <i className="bi bi-app"></i>
                  <p className="language">Learning</p>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <p className="language">Travelling</p>
                </div>
                <div className="project">
                  <i className="bi bi-app"></i>
                  <p className="language">Gardening</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
