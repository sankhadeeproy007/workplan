import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => (
          <ProjectSummary
            key={project.id}
            id={project.id}
            title={project.title}
            content={project.content}
          />
        ))}
    </div>
  );
};

export default ProjectList;
