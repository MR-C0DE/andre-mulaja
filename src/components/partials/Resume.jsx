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
              <li><a href={user.media.linkedin}><img src="linkedin.png" width={35} alt="" /></a></li>
              <li><a href={user.media.github}><img src="github.png" width={35} alt="" /></a></li>
              {width <= 580 && (
                <li>
                  <a href={"https://portfoliomulaja.s3.ca-central-1.amazonaws.com/docs/MulajaDev.pdf"} download="MulajaDev.pdf">
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
