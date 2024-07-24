import React, { useState } from "react";
import classNames from "classnames";
import "../../styles/projectFiles.css";

const ProjectFiles = ({ files }) => {
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState(0);

  const changeFiles = (i) => {
    setSelect(i);
    setIndex(i);
  };

  if (files.length === 0) {
    return <div>No files available</div>;
  }

  const currentFile = files[index];
  const isImage = currentFile.type === "image";

  return (
    <div className="project-files-container">
      {isImage ? (
        <img
          className="image-content"
          src={currentFile.url}
          alt={currentFile.name}
        />
      ) : (
        <video
          className="video-content"
          src={currentFile.url}
          controls
          autoPlay
          loop
          aria-label={`Video: ${currentFile.name}`}
        />
      )}

      <div className="file-changer">
        {files.map((file, i) => (
          <div
            key={i}
            className={classNames("btn-change-files", { select: select === i })}
            onClick={() => changeFiles(i)}
          >
            {/* Optional: Add a label or tooltip here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFiles;
