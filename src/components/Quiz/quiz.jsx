import React from "react";
import "./quiz.css";
import { useLocation } from "react-router-dom";
const Quiz = () => {
    const location = useLocation(); // Get the location object from React Router
  const searchParams = new URLSearchParams(location.search);
  const quizUrl = searchParams.get("quizUrl");
  return (
    // <div className="main">
    //   <div className="sidel1">Side left</div>
    //   <div className="mid1">
    //     <div className="midin1">
    //       <div className="container1">
    //         <script src="https://app.embedquiz.com/js/iframeResizer.min.js"></script>
    //         <iframe
    //         title="quiz"
    //         style={{ width: '100%', height: '620px' }}
    //           class="embedquiz-embed fitvidsignore"
    //           id="embedquiz-431"
    //           src={quizUrl}
    //           frameborder="0"
    //         ></iframe>
    //         <script>iFrameResize({},'#embedquiz-431')</script>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="sider1">Side right</div>
    // </div>
  <div className="mainq">
  <div className="container1q">
          <script src="https://app.embedquiz.com/js/iframeResizer.min.js"></script>
         <iframe
          title="quiz"
          style={{ width: '100%', height: '620px' }}
            class="embedquiz-embed fitvidsignore"
            id="embedquiz-431"
            src={quizUrl}
            frameborder="0"
          ></iframe>
          <script>iFrameResize({},'#embedquiz-431')</script>
        </div>
  </div>
  );
};

export default Quiz;
