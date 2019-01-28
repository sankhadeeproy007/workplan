import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from './../../store/actions/authActions';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { onChange, onSubmit } = this;
    return (
      <div className="container">
        <form className="white" {...{ onSubmit }}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...{ onChange }} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...{ onChange }} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
