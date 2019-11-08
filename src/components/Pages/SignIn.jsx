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
    error: '',
    passwordHide: true,
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
    const { SigninAction: LoginAction } = this.props;
    await LoginAction(identifier, password);
    const { SigninReducer: { error } } = this.props;
    if (error) this.renderError(error);
    else window.location = '/home';
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  togglePasswordHide = (e) => {
    const { passwordHide } = this.state;
    this.setState({ passwordHide: !passwordHide });
  }

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
    const { error, passwordHide } = this.state;
    const { SigninReducer: { isLoading } } = this.props;
    const spanClass = `fa fa-fw field-icon ${passwordHide ? 'fa-eye' : 'fa-eye-slash'}`;
    return (
      <div className="row HomePage">
        <div className="col s12 m6 offset-m3 l6 offset-l3 shift-down">
          <div className="container transperant little-border shift-down middle-card">
            <form
              onSubmit={this.handleSubmit}
              onFocus={this.handleFocus}
            >
              <h4 className="grey-text text-darken-2 section">Sign In</h4>
              <div className="input-field">
                <input
                  type="text"
                  name="identifier"
                  className="validate"
                  disabled={isLoading}
                  id="identifier"
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="identifier">Username/Email</label>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordHide ? 'password' : 'text'}
                  name="password"
                  id="password"
                  className="validate"
                  disabled={isLoading}
                  required
                  onChange={this.handleChange}
                />
                <span className={spanClass} onClick={this.togglePasswordHide} role="presentation" onKeyDown={this.togglePasswordHide} />
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
