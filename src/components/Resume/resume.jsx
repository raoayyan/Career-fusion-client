import React from "react";
import "./resume.css";

const Resume = () => {
  const resumeImageNames = [
    "r1.jpg",
    "r2.jpg",
    "r3.jpg",
    "r4.jpg",
    "r5.jpg",
    "r6.jpg",
    "r7.jpg",
    "r8.jpg",
    "r9.jpg",
    "r10.jpg",
    
    "r12.jpg",
    // Add more image names as needed
  ];

  const handleDownload = (imageName) => {
    // Construct the full URL for the image in the public folder
    const imageUrl = process.env.PUBLIC_URL + "/" + imageName;

    // Create a temporary link element
    const link = document.createElement("a");

    // Set the href attribute to the image URL
    link.href = imageUrl;

    // Set the download attribute to specify the filename for the downloaded file
    link.download = imageName;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="mainr">
      <div className="sidelr"></div>
      <div className="midr">
        <div className="midinr">
        <h2>Resumes of Selected candidates</h2>
          <div className="containerr">
            
              {/* Map through the resumeImageNames array and create a box for each image */}
              {resumeImageNames.map((imageName, index) => (
                <div className="boxing1r" key={index} style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  flex: "1", // Adjust flex property as needed
                    margin: "5px",
                }}>
                 
                  <button className="download-button" onClick={() => handleDownload(imageName)}>
                    Download
                  </button>
                  <h3></h3>
                </div>
                
              ))}
              
          </div>
        </div>
      </div>
      <div className="siderr">
        
      </div>
    </div>
  );
};

export default Resume;
