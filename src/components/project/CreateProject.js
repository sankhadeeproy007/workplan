import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createProject } from './../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    const { onChange, onSubmit } = this;
    return (
      <div className="container">
        <form className="white" {...{ onSubmit }}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...{ onChange }} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              {...{ onChange }}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
