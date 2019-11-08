import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { AddAddressAction } from '../../actions/AddAddress';
import { getItems } from '../../helpers/Storage';
import { removeAuthentication } from '../../helpers/Authentication';

/**
 *
 *
 * @class NewAddress
 * @param {Object} e event-listener
 * @extends {Component}
 */
class NewAddress extends Component {
  state = {
    country: '',
    region: '',
    error: '',
    friendly_name: '',
    email: '',
    city: '',
    street: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { error: stateError, region, ...body } = this.state;
    const { AddAddressAction: AddNewAddress } = this.props;
    body.state = region;
    body.user = getItems('id');
    await AddNewAddress(body);
    const {
      AddAddressReducer: { error }
    } = this.props;
    if (error) {
      if (error.statusCode == 401 || error.statusCode == 403) {
        removeAuthentication();
      } else this.setState({ error });
    } else window.location = '/home';
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFocus = (e) => {
    this.setState({ error: '' });
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

  /**
   *
   *
   * @returns {JSX} HTML element
   * @memberof NewAddress
   */
  render() {
    const { country, region, error } = this.state;
    const {
      AddAddressReducer: { isLoading }
    } = this.props;
    return (
      <div className="card white darken-3">
        <form onSubmit={this.handleSubmit}>
          <div className="card-content">
            <h4 className="card-title blue-text darken-1">New Address</h4>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="friendly_name">Location Alias</label>
                <input
                  type="text"
                  name="friendly_name"
                  id="friendly_name"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field col s6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field col s8">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field col s4">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="validate"
                  required
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              <div className="input-field col s6">
                <CountryDropdown
                  required
                  value={country}
                  onFocus={this.handleFocus}
                  onChange={this.handleOnChange('country')}
                />
              </div>
              <div className="input-field col s6">
                <RegionDropdown
                  country={country}
                  value={region}
                  required
                  onFocus={this.handleFocus}
                  onChange={this.handleOnChange('region')}
                />
                {{ error } && <span className="helper-text">{error}</span>}
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn right green darken-1 z-depth-0" type="submit">
              {isLoading ? 'Loading...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NewAddress.propTypes = {
  AddAddressReducer: PropTypes.object.isRequired,
  AddAddressAction: PropTypes.func.isRequired
};

export const mapStateToProps = ({ AddAddressReducer }) => ({ AddAddressReducer });

export default connect(
  mapStateToProps,
  {
    AddAddressAction
  }
)(NewAddress);
