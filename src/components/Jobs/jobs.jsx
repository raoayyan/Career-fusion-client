import React, { useState } from "react";
import axios from "axios";

import "./jobs.css";

const Jobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL,
        {
          params: {
            title,
            location,
          },
        }
      );
      const jobListingsData = response.data.data;
      setJobListings(jobListingsData);
    } catch (error) {
      console.error("Error fetching job listings from SerpApi:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="job" >
      <div className="container1" >
        <div className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            className="search-input"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {/* Display loader while loading */}
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="jobs" >
            <h2>Job Listings</h2>
            <ul>
              {jobListings &&
                jobListings.map((job, index) => (
                  <li key={index}>
                    {/* Render job listing details here */}
                    <div className="boxing1">
                      <h5 className="job-title">{job.job_title}</h5>
                      <hr className="line"></hr>
                      <h5>{job.employer_name}</h5>
                      <hr className="line"></hr>
                      <h5>{job.job_employment_type}</h5>
                      <hr className="line"></hr>
                      <h5>{job.job_city}</h5>
                      <br></br>
                      <a
                        href={job.job_apply_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="apply-button">Apply Now</button>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
