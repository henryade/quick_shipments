import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';
import { SignupAction } from '../../actions/SignupAction';
import { passwordVal, confirmPasswordVal } from '../../helpers/Validation';

/**
 *
 *
 * @export
 * @class SignUp
 * @param {Object} e event-listener
 * @extends {Component}
 */
class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    errors: {
      password: '',
      confirmPassword: '',
      other: ''
    }
  };

  /**
   *
   * @param {String} error error
   * @memberof SignUp
   * @returns {Null} null
   */
  renderError = (error) => {
    this.setState({ errors: { other: error } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.updateErrorState();
    const { errors } = this.state;
    const CorrectDetails = Object.values(errors).every((value) => value === '');
    if (!CorrectDetails) {
      return null;
    }
    const {
      email, username, phone, password
    } = this.state;
    const {
      history: { push },
      SignupAction: RegisterAction
    } = this.props;
    await RegisterAction({
      email,
      username,
      phone,
      password
    });
    const {
      SignupReducer: { user, error }
    } = this.props;

    if (error) this.renderError(error);
    else if (user) push('/home');
    else this.renderError('Something Happened: Try Again');
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  /**
   *
   * @param {String} input input field
   * @memberof SignUp
   * @returns {Null} null
   */
  handleOnChange = (input) => (e) => {
    this.setState({ [input]: e });
  };

  handleFocus = (e) => {
    const { errors } = this.state;

    Object.keys(errors).forEach((key) => {
      this.setState({ errors: { [key]: '' } });
    });
  };

  updateErrorState = () => {
    const { password, confirmPassword, errors } = this.state;

    const passwordError = passwordVal(password) || '';
    const confirmPasswordError = confirmPasswordVal(
      password, confirmPassword
    ) || '';

    this.setState({
      errors: {
        ...errors,
        password: passwordError,
        confirmPassword: confirmPasswordError
      }
    });
  };

  /**
   *
   *
   * @returns {JSX} Html Element
   * @memberof SignUp
   */
  render() {
    const {
      errors: {
        password: passwordError,
        confirmPassword: confirmPasswordError,
        other
      },
      phone
    } = this.state;

    const {
      SignupReducer: { isLoading }
    } = this.props;

    return (
      <div className="row">
        <div className="col s12 m5 pink lighten-3" />
        <div className="col s12 m6 offset-m1">
          <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
              <h4 className="grey-text text-darken-2 section">Sign Up</h4>
              <div className="input-field signup-input-field">
                <input
                  type="email"
                  name="email"
                  className="validate"
                  id="email"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field signup-input-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field signup-input-field">
                <PhoneInput
                  defaultCountry="ng"
                  value={phone}
                  onChange={this.handleOnChange('phone')}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field signup-input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
                {{ passwordError }
                && <span className="helper-text">{passwordError}</span>}
              </div>
              <div className="input-field signup-input-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={this.handleChange}
                  className="validate"
                  required
                  onFocus={this.handleFocus}
                />
                {{ confirmPasswordError } && (
                  <span className="helper-text">{confirmPasswordError}</span>
                )}
                {{ other } && <span className="helper-text">{other}</span>}
              </div>
              <div className="input-field signup-input-field">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn right green darken-1 z-depth-0"
                >
                  {isLoading ? 'Loading...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
  SignupReducer: PropTypes.object.isRequired,
  SignupAction: PropTypes.func.isRequired
};

export const mapStateToProps = ({ SignupReducer }) => ({ SignupReducer });

export default connect(
  mapStateToProps,
  {
    SignupAction
  }
)(SignUp);
