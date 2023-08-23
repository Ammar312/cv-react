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
                Passionate MERN Stack Developer with a flair for crafting
                seamless web experiences. Transforming ideas into elegant,
                functional solutions through innovative coding and a keen eye
                for design. Eager to contribute expertise in MongoDB, Express,
                React, and Node.js to create dynamic applications that leave a
                lasting impact.
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
                <div>Matriculation in Computer</div>
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
        </section>
      </div>
    </>
  );
}

export default App;
