import React from 'react';

const ProjectDetail = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            nam qui culpa illum repellendus, velit recusandae debitis eveniet
            neque asperiores sunt, obcaecati, delectus praesentium aliquid
            dolorem necessitatibus quod inventore odit.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Sankho</div>
          <div>5th January</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
