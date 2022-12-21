import React from "react";
import { useState } from "react";

import CreateProject from "./CreateProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showCreateProject, setShowCreateProject] = useState(false);

  const handleDisplayCreateProject = () => {
    return showCreateProject ? "block" : "hidden";
  };

  const handleAddProject = (title) => {
    const project = { title };
    project.id = projects.length;
    setProjects(projects.concat(project));
    setShowCreateProject(false);
  };

  return (
    <div className="font-poppins container md m-auto">
      <header className="container mx-auto p-6">
        <h1 className="flex items-center justify-center text-4xl font-medium">
          Projects
        </h1>
        <div className="flex items-center justify-center">
          <button
            className="hover:bg-blue-200 rounded-lg bg-blue-300 p-2 pt-1 pb-1 mt-4 ml-2 mr-2"
            onClick={() => setShowCreateProject(true)}
          >
            New project
          </button>
        </div>
      </header>
      <CreateProject
        isProjectVisible={handleDisplayCreateProject}
        setShowCreateProject={setShowCreateProject}
        handleSubmit={handleAddProject}
      ></CreateProject>
      <div className="flex flex-col w-2/6 m-auto">
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
