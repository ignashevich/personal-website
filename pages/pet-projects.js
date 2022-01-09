import React from 'react';
import {petProjects} from "../data/petProjects";
import Project from "../components/Project";

const PetProjects = () => {
    return (
        <div className="grid px-8 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mt-4 md:mt-12">
            {petProjects.map((p) => <Project {...p} key={p.name}/>)}
        </div>
    );
};

export default PetProjects;
