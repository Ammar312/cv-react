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
        <section className="sidebar">Sidebar</section>
      </div>
    </>
  );
}

export default App;
