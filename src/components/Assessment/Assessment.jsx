import React from "react";
import "./assessment.css";

import {  useNavigate } from "react-router-dom";

const Assessment = () => {
 
  const quizUrls = {
    mernStackQuiz: "https://app.embedquiz.com/play/7409b37b-251d-4983-a946-b203442e42c5/embed",
    meanStackQuiz:"https://app.embedquiz.com/play/e0e83f7a-d4f0-4097-8c39-51397847c0af/embed",
    reactredux:"https://app.embedquiz.com/play/87881756-76c8-4bb3-a487-bb9698a75885/embed",
    nextjs:"https://app.embedquiz.com/play/98666998-69cd-4dbe-9b16-5ec50afa4bc1/embed",
    nodejs:"https://app.embedquiz.com/play/f7d8bf39-0fa8-4c60-a026-b8d1be528d20/embed",
    aiml:"https://app.embedquiz.com/play/684756d5-5abb-45cd-b351-d45617b2eece/embed",
    aws:"https://app.embedquiz.com/play/3d722ccc-606b-4de6-a3a5-b694615ce2f3/embed",
    data:"https://app.embedquiz.com/play/1ec477d1-3446-4328-9576-4f1dc371c1b0/embed",
    cyber:"https://app.embedquiz.com/play/d7900691-89ca-464b-8e3f-12702e9b84b3/embed",
    cloud:"https://app.embedquiz.com/play/55d9462f-3c77-4618-bad9-5a16901f1b32/embed",
    docker:"https://app.embedquiz.com/play/588cf585-c39f-4859-aa91-f6f520ddc559/embed",
    secops:"https://app.embedquiz.com/play/0407c471-8ae8-49e2-8f24-8fa970743a33/embed"

    // Add URLs for other quizzes here
  };

  const Navigate = useNavigate(); // Get the history object from React Router

  const handleQuizButtonClick = (quizName) => {
    const quizUrl = quizUrls[quizName];
    
    // Manually construct the URL with the quizUrl as a parameter and push it
    Navigate(`/quiz?quizUrl=${encodeURIComponent(quizUrl)}`);
  };
  
   
  const skillsImprovementData = [
    { text: "Improve React Component Handling", link: "https://styled-components.com/docs/basics" },
    { text: "Master Data Warehousing Concepts", link: " https://towardsdatascience.com/how-to-become-a-data-engineer-c0319cb226c2" },
    { text: "Become an Expert in CI/CD Pipelines", link: " https://www.pluralsight.com/resources/blog/cloud/how-to-begin-your-cloud-career" },
    { text: "Deep Dive into MERN Stack Authentication", link: " https://www.freecodecamp.org/news/mern-stack-crash-course" },
    { text: "Leverage Next.js TypeScript for Server-Side Rendering", link: "https://nextjs.org/docs/messages/react-client-hook-in-server-component" },
    { text: "Build Scalable Node.js Applications with Express", link: "https://expressjs.com/en/guide/using-middleware.html" },
    { text: "Explore Cutting-Edge AI/ML Techniques", link: "https://www.analyticsvidhya.com/blog/2023/02/top-10-cutting-edge-machine-learning-techniques-to-learn-in-2023/" },
    { text: "Become a Cloud Architect with AWS Expertise", link: "https://aws.amazon.com/blogs/compute/becoming-a-cloud-architect/" },
    
  ];
  const skillsImprovementData1 = [{ text: "Master Docker and Kubernetes for Containerization", link: "https://www.docker.com/get-started/overview/" },
  { text: "Implement Secure DevOps Practices with SecOps", link: "https://www.synopsys.com/blogs/software-security/what-is-devsecops-and-why-do-you-need-it/" },
  { text: "Learn Data Engineering Fundamentals", link: "https://www.coursera.org/specializations/google-data-engineering" }, // Replace with a relevant blog link
  { text: "Upskill in DevOps on AWS", link: "https://aws.amazon.com/devops/what-is-devops/" }, // Replace with a relevant blog link
  { text: "Become a Full-Stack MERN Stack Developer", link: "https://www.mongodb.com/resources/languages/mern-stack" }, // Replace with a relevant blog link
  { text: "Master Next.js and TypeScript for Modern Web Dev", link: "https://nextjs.org/docs/pages/building-your-application/configuring/typescript" }, // Replace with a relevant blog link
  { text: "Build Robust Node.js Applications with Express", link: "https://expressjs.com/" }, // Replace with a relevant blog link]
  ]
  return (
    <div className="main">
      <div className="sidel">{skillsImprovementData.map((item, index) => (
        <div key={index} className="skills-box" onClick={() => window.location.href = item.link}>
          <p className="skills-text">{item.text}</p>
        </div>
      ))}</div>
      <div className="mid">
        <div className="midin">
          <div className="container">
          
            <div className="boxing">
              <h2 className="centered-heading">MERN Stack</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="react.png" alt="Logo1" class="logo" />
                <img src="express.png" alt="Logo2" class="logo" />
                <img src="Nodejs.png" alt="Logo3" class="logo" />
                <img src="mongodb.png" alt="Logo4" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("mernStackQuiz")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">MEAN Stack</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
              <img src="ang.png" alt="Logo1" class="logo" />
              <img src="express.png" alt="Logo2" class="logo" />
              <img src="Nodejs.png" alt="Logo3" class="logo" />
              <img src="mongodb.png" alt="Logo4" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("meanStackQuiz")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>
              
            <div className="boxing">
              <h2 className="centered-heading">Frontend (React/Redux)</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
              <img src="react.png" alt="Logo1" class="logo" />
              <img src="redux.png" alt="Logo1" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("reactredux")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">Frontend (NextJs/TS)</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
              <img src="next.png" alt="Logo1" class="logo" />
              <img src="ts.png" alt="Logo2" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("nextjs")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

          

            <div className="boxing">
              <h2 className="centered-heading">Backend (Node/Express)</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
              <img src="express.png" alt="Logo2" class="logo" />
              <img src="Nodejs.png" alt="Logo3" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("nodejs")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>




            <div className="boxing">
              <h2 className="centered-heading">AI/ML Specialist</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="ai.png" alt="Logo1" class="logo" />
                <img src="ml.png" alt="Logo2" class="logo" />
                
              </div>
              <button
              onClick={()=> handleQuizButtonClick("aiml")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">DevOps on AWS</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="dev.png" alt="Logo1" class="logo" />
                <img src="aws.png" alt="Logo2" class="logo" />
                
              </div>
              <button
              onClick={()=> handleQuizButtonClick("aws")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">Data Engineer (Azure)</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="data.png" alt="Logo1" class="logo" />
                <img src="az.png" alt="Logo1" class="logo" />
              </div>
              <button
              onClick={()=> handleQuizButtonClick("data")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">Cyber Security</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                
                <img src="sec.png" alt="Logo2" class="logo" />
               
              </div>
              <button
              onClick={()=> handleQuizButtonClick("cyber")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">Cloud Engineer </h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="cloud.png" alt="Logo1" class="logo" />
                
              </div>
              <button
              onClick={()=> handleQuizButtonClick("cloud")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>
            <div className="boxing">
              <h2 className="centered-heading">Docker (kubernetes)</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="docker.png" alt="Logo1" class="logo" />
                <img src="kb.png" alt="Logo2" class="logo" />
                
              </div>
              <button
              onClick={()=> handleQuizButtonClick("docker")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>

            <div className="boxing">
              <h2 className="centered-heading">DevSecOps</h2>
              <h5 className="desc">Interview Questions</h5>
              <div class="logo-container">
                <img src="dev.png" alt="Logo1" class="logo" />
                <img src="sec.png" alt="Logo2" class="logo" />
               
              </div>
              <button
              onClick={()=> handleQuizButtonClick("secops")}
                
                class="assessment-button"
              >
                Take Test
              </button>
            </div>
                      
          </div>
        </div>
      </div>
      <div className="sider">{skillsImprovementData1.map((item, index) => (
        <div key={index} className="skills-box" onClick={() => window.location.href = item.link}>
          <p className="skills-text">{item.text}</p>
        </div>
      ))}</div>
    </div>

    
  );
};

export default Assessment;
