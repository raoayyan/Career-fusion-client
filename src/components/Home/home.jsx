import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <div
        className="home"
        style={{
          backgroundImage: `url(industry-3087393.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flex: "1", // Adjust flex property as needed
          margin: "0px",
        }}
      >
        <div className="hero">
          <div className="hero1">
            <h1 className="home-text Heading1">
              <span> Get all the resources at </span>
              <span className="home-text02">CareerFusion</span>
            </h1>
            <div className="list">
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>{" "}
                Unlock your full potential and embrace productivity as the
                catalyst for your success at your ease.Go Go and be successfull.Successfull and arrogant.
              </h4>
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                Discover your dream job effortlessly! Our job section, powered
                by real-time APIs
              </h4>
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                Stand out in the tech crowd! Access and download curated resumes
                of successful candidates
              </h4>
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                Embark on a journey of skill exploration and career advancement
                with our platform
              </h4>
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                Challenge your knowledge across diverse tech domains!
              </h4>
              <h4>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon02"
                  style={{ width: "25px", height: "15px", fill: "#fa7930" }}
                >
                  <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>{" "}
                Each moment invested in your work is a step closer to realizing
                your goals.
              </h4>
            </div>
            <div className="data">
              <div className="stats-container">
                <div className="stat">
                  <h3>
                    15+ <br></br>Jobs
                  </h3>
                  {/* Additional details or description if needed */}
                </div>
                <div className="stat">
                  <h3>
                    14+ <br></br>Skills
                  </h3>
                  {/* Additional details or description if needed */}
                </div>
                <div className="stat">
                  <h3>
                    10+ <br></br>Resumes
                  </h3>
                  {/* Additional details or description if needed */}
                </div>
              </div>
            </div>
          </div>
          <div className="hero2"></div>
        </div>
        {/* Content for the first div <img src="/main.png" alt="main" /> */}
      </div>
      <div className="home-section">
        <div className="contain">
          <h2>
            Read <span>everything in one place</span> and keep up with important
            news
          </h2>
          <div className="box">
            <div className="inside">
             
              <div className="sbox">
                <svg viewBox="0 0 1024 1024" class="feature-card-icon">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <h4>Skills Assessment</h4>
                <span className="txt">
                  <p>
                    Explore our Skill Test section and challenge yourself with
                    quizzes tailored to various fields, including Modern Stack,
                    Data Engineering, DevOps, Flutter, and more.
                  </p>
                </span>
                <br></br>
                <span className="last">
                  <Link className="last" to="/test">
                    Learn More
                  </Link>
                </span>
              </div>
              <div className="sbox">
                <svg viewBox="0 0 1024 1024" class="feature-card-icon">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <h4>Job Search</h4>
                <span className="txt">
                  <p>
                    Navigate to our Jobs section and harness the power of our
                    API to find the latest job opportunities. Simply input your
                    name and location, hit the search button, and discover 10 to
                    15 jobs waiting for your skills. 
                  </p>
                </span>
                <br></br>
                <span className="last">
                  <Link className="last" to="/jobs">
                    Learn More
                  </Link>
                </span>
              </div>
              <div className="sbox">
                <svg viewBox="0 0 1024 1024" class="feature-card-icon">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <h4>Stand Out with Resumes</h4>
                <span className="txt">
                  <p>
                    In the Resume section, access curated resumes of successful
                    candidates who have aced interviews at major tech companies.
                    Download these templates to get a head start on crafting
                    your own impressive resume.
                  </p>
                </span>
                <br></br>
                <span className="last">
                  <Link className="last" to="/resume">
                    Learn More
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Content for the second div */}
      </div>
    </div>
  );
};

export default Home;

// tommorow : user set up model cration.ai tool route register
