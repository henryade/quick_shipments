/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SigninAction } from '../../actions/SigninAction';

/**
 *
 * @export
 * @class SignIn
 * @param {Object} e event-listener
 * @extends {Component}
 */
class SignIn extends Component {
  state = {
    identifier: '',
    password: '',
    error: ''
  };

  /**
   *
   * @param {String} error error
   * @memberof SignIn
   * @returns {Null} null
   */
  renderError = (error) => {
    error = error.replace(/identifier/gi, 'username/email');
    this.setState({ error });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password } = this.state;
    const { history: { push }, SigninAction: LoginAction } = this.props;
    await LoginAction(identifier, password);
    const { SigninReducer: { user, error } } = this.props;

    if (error) this.renderError(error);
    else if (user) push('/home');
    else this.renderError('Something Happened: Try Again');
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFocus = () => {
    this.setState({ error: '' });
  };

  /**
   *
   *
   * @returns {JSX} Html Element
   * @memberof SignIn
   */
  render() {
    const { error } = this.state;
    const { SigninReducer: { isLoading } } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6 pink lighten-3" />
        <div className="col s12 m5 offset-m1">
          <div className="container">
            <form
              className="white"
              onSubmit={this.handleSubmit}
              onFocus={this.handleFocus}
            >
              <h4 className="grey-text text-darken-2 section">Sign In</h4>
              <div className="input-field">
                <input
                  type="text"
                  name="identifier"
                  className="validate"
                  id="identifier"
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="identifier">Username/Email</label>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="validate"
                  required
                  onChange={this.handleChange}
                />
                { { error } && <span className="helper-text">{error}</span>}
              </div>
              <div className="input-field">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn right green darken-1 z-depth-0"
                >
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  SigninReducer: PropTypes.object.isRequired,
  SigninAction: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ SigninReducer }) => ({ SigninReducer });

export default connect(
  mapStateToProps,
  {
    SigninAction
  }
)(SignIn);
