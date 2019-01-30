import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => (
          <Link to={`/project/${project.id}`}>
            <ProjectSummary
              key={project.id}
              id={project.id}
              title={project.title}
              content={project.content}
              firstName={project.authorFirstName}
              lastName={project.authorLastName}
              createdAt={project.createdAt}
            />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
