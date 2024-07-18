import React from "react";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { user } from "../../data/user";
import "../../styles/resume.css";
const Resume = () => {
  const { width } = useScreenSize();
  return (
    <div className="resume-container">
        <h1>{user.name}</h1>
      <div className="myself">
        <div>
          <h2>{user.title}</h2>
          <p className="summary">{user.summary}</p>
        </div>
        <div className="image-content-1">
          <div className="image-content-2">
            <img src={user.image} alt={"Image user"} />
          </div>
        </div>
      </div>
      <div className="social-media">
          <ul>
              <li><img src="linkedin.png" width={35} alt="" /></li>
              <li><img src="github.png" width={35} alt="" /></li>
              {width <= 580 && (
                <li>
                  <a href={"/Software_Developer.pdf"} download>
                    <button>Resume</button>
                  </a>
                </li>
              )}
          </ul>
      </div>
    </div>
  );
};

export default Resume;
