import React from 'react';

const Project = ({name, desc, previewLink, codeLink, imgLink}) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-xl">{name}</h3>
            <div className="mb-auto">
                <a target="_blank" className="link" rel="noreferrer" href={previewLink}>Preview</a>
                {codeLink && <a target="_blank" rel="noreferrer" className="link" href={codeLink}>Code</a>}
            </div>
            <img className="mb-auto mt-4" src={imgLink} alt=""/>
            {desc && <p>{desc}</p>}
        </div>
    );
};

export default Project;
