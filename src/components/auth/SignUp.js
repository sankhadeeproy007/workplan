import React, { Component } from 'react';

export class SingUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { onChange, onSubmit } = this;
    return (
      <div className="container">
        <form className="white" {...{ onSubmit }}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...{ onChange }} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...{ onChange }} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...{ onChange }} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Email</label>
            <input type="text" id="lastName" {...{ onChange }} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SingUp;
