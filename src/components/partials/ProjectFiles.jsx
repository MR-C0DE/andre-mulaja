import React, { useState } from 'react';
import "../../styles/projectFiles.css";

const ProjectFiles = ({ files }) => {
    const [index, setIndex] = useState(0);
    const [select, setSelect] = useState(0);

    const changeFiles = (i) => {
        setSelect(i);
        setIndex(i);
    };

    return (
        <div className='project-files-container'>
            {files[index].type === "image" ? (
                <img className='image-content' src={files[index].url} alt={files[index].name} />
            ) : (
                <video className='video-content' src={files[index].url} controls autoPlay loop />
            )}

            <div className='file-changer'>
                {files.map((file, i) => (
                    <div key={i} className={'btn-change-files ' + (select == i ? "select": "")} onClick={() => changeFiles(i)}></div>
                ))}
            </div>
           
        </div>
    );
};

export default ProjectFiles;
