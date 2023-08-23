import "./App.css";
import skill from "./skills.png";
import suitcase from "./suitcase.png";

function App() {
  return (
    <>
      <div className="display">
        <section className="main">
          <div className="main1Div">
            <div className="img">
              <span>
                <i className="bi bi-person-fill"></i>
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
                <p>HTML5, CSS3, JavaScript and ReactJS</p>
              </div>
              <div className="skill">
                <span>
                  Back-end <br />
                  technology
                </span>
                <p>NodeJS and ExpressJS</p>
              </div>
              <div className="skill">
                <span>Database</span>
                <p>MongoDB and Firebase</p>
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
              <p>Work Experience</p>
            </div>
            <h2>Not Yet</h2>
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
              <p>03104160942</p>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <p>Karachi,Pakistan</p>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-linkedin"></i>
              </span>
              <p>linkedin.com/in/ammar-ul-mustafa</p>
            </div>
            <div className="line">
              <span>
                <i className="bi bi-github"></i>
              </span>
              <p>github.com/Ammar312</p>
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
