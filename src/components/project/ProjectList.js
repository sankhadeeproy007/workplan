import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list section">
      {[0, 1, 2].map(project => (
        <ProjectSummary />
      ))}
    </div>
  );
};

export default ProjectList;
