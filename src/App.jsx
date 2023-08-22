import "./App.css";

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
        </section>
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
                <i class="bi bi-phone-fill"></i>
              </span>
              <p>03104160942</p>
            </div>
            <div className="line">
              <span>
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <p>Karachi,Pakistan</p>
            </div>
            <div className="line">
              <span>
                <i class="bi bi-linkedin"></i>
              </span>
              <p>linkedin.com/in/ammar-ul-mustafa</p>
            </div>
            <div className="line">
              <span>
                <i class="bi bi-github"></i>
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
