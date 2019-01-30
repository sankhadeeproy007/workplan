import React from 'react';

const ProjectSummary = ({ title, id, content, firstName, lastName }) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{title}</span>
          <p>Posted by {firstName + ' ' + lastName}</p>
          <p className="grey-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
