import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import Options from '../../helpers/Options';
import { AddShipmentAction, GetCourierAction } from '../../actions/AddShipment';
import { getItems } from '../../helpers/Storage';
import { removeAuthentication } from '../../helpers/Authentication';

/**
 *
 *
 * @class NewShipment
 * @param {Object} e event-listener
 * @extends {Component}
 */
class NewShipment extends Component {
  state = {
    origin: {
      name: '',
      city: '',
      street: '',
      phone: '',
      country: '',
      region: ''
    },
    destination: {
      name: '',
      city: '',
      street: '',
      phone: '',
      country: '',
      region: ''
    },
    courier: '',
    weight: 0,
    item: {
      description: '',
      quantity: ''
    },
    error: ''
  };

  /**
   *
   * @returns {NULL} null
   * @memberof NewShipment
   */
  async componentDidMount() {
    const { GetCourierAction: GetCouriers } = this.props;
    await GetCouriers();
  }

  handleChange = (input) => (e) => {
    const { name, value } = e.target;
    const { item } = this.state;
    let field = input || name;
    const { origin, destination } = this.state;
    if (name.includes('origin_')) {
      field = name.replace('origin_', '');
      this.setState({ origin: { ...origin, [field]: value } });
    } else if (name.includes('destination_')) {
      field = name.replace('destination_', '');
      this.setState({ destination: { ...destination, [field]: value } });
    } else if (name.includes('item_')) {
      field = name.replace('item_', '');
      this.setState({ item: { ...item, [field]: value } });
    } else this.setState({ [field]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { error: stateError, ...body } = this.state;
    const { AddShipmentAction: AddNewShipment } = this.props;
    body.origin.state = body.origin.region;
    body.destination.state = body.destination.region;
    delete body.destination.region;
    delete body.origin.region;
    body.user = getItems('id');
    await AddNewShipment(body);
    const {
      AddShipmentReducer: { error }
    } = this.props;
    if (error) {
      if (error.statusCode == 401 || error.statusCode == 403) {
        removeAuthentication();
      } else this.setState({ error });
    } else window.location = '/home';
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
    const { origin, destination } = this.state;
    if (input.includes('origin_')) {
      const field = input.replace('origin_', '');
      this.setState({ origin: { ...origin, [field]: e } });
    } else if (input.includes('destination_')) {
      const field = input.replace('destination_', '');
      this.setState({ destination: { ...destination, [field]: e } });
    } else this.setState({ [input]: e });
  };

  /**
   *
   *
   * @returns {JSX} HTML element
   * @memberof NewShipment
   */
  render() {
    const { origin, destination } = this.state;
    const {
      AddShipmentReducer: {
        isLoading,
        data: { couriers }
      }
    } = this.props;
    return (
      <div className="card white darken-3">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="card-content">
            <h4 className="underline center-align card-title blue-text darken-1">New Shipment</h4>
            <div className="row">
              <div className="section">
                <h5 className="little-padding blue-text ligthen-2">Origin</h5>
                <div className="divider" />
                <div className="input-field col s6">
                  <label htmlFor="origin_name">Location Alias</label>
                  <input
                    type="text"
                    name="origin_name"
                    id="origin_name"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s6">
                  <label htmlFor="origin_email">Email</label>
                  <input
                    type="email"
                    name="origin_email"
                    id="origin_email"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s8">
                  <label htmlFor="origin_street">Street</label>
                  <input
                    type="text"
                    name="origin_street"
                    id="origin_street"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="origin_city">City</label>
                  <input
                    type="text"
                    name="origin_city"
                    id="origin_city"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s4">
                  <CountryDropdown
                    required
                    value={origin.country}
                    onChange={this.handleOnChange('origin_country')}
                  />
                </div>
                <div className="input-field col s4">
                  <RegionDropdown
                    country={origin.country}
                    value={origin.region}
                    required
                    onChange={this.handleOnChange('origin_region')}
                  />
                </div>
                <div className="input-field col s4">
                  <PhoneInput
                    defaultCountry="ng"
                    value={origin.phone}
                    onChange={this.handleOnChange('origin_phone')}
                    onFocus={this.handleFocus}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="section">
                <h5 className="little-padding blue-text ligthen-2">Destination</h5>
                <div className="divider" />
                <div className="input-field col s6">
                  <label htmlFor="destination_name">Location Alias</label>
                  <input
                    type="text"
                    name="destination_name"
                    id="destination_name"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s6">
                  <label htmlFor="destination_email">Email</label>
                  <input
                    type="email"
                    name="destination_email"
                    id="destination_email"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s8">
                  <label htmlFor="destination_street">Street</label>
                  <input
                    type="text"
                    name="destination_street"
                    id="destination_street"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s4">
                  <label htmlFor="destination_city">City</label>
                  <input
                    type="text"
                    name="destination_city"
                    id="destination_city"
                    className="validate"
                    required
                    onChange={this.handleChange()}
                  />
                </div>
                <div className="input-field col s4">
                  <CountryDropdown
                    value={destination.country}
                    required
                    onChange={this.handleOnChange('destination_country')}
                  />
                </div>
                <div className="input-field col s4">
                  <RegionDropdown
                    country={destination.country}
                    value={destination.region}
                    required
                    onChange={this.handleOnChange('destination_region')}
                  />
                </div>
                <div className="input-field col s4">
                  <PhoneInput
                    defaultCountry="ng"
                    value={destination.phone}
                    onChange={this.handleOnChange('destination_phone')}
                    onFocus={this.handleFocus}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div className="input-field col s6 m6 l6">
                <select onChange={this.handleChange()} name="courier">
                  <option value="" disabled selected>
                    Courier
                  </option>
                  <Options options={couriers} />
                </select>
              </div>
              <div className="input-field col s6 m6 l6">
                <label htmlFor="weight">Weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="validate"
                  required
                  onChange={this.handleChange()}
                />
              </div>
              <h5 className="little-padding blue-text ligthen-2">Item</h5>
              <div className="divider" />
              <div className="input-field col s6 m9 l9">
                <label htmlFor="item_description">Description</label>
                <input
                  type="text"
                  name="item_description"
                  id="item_description"
                  className="validate"
                  required
                  onChange={this.handleChange()}
                />
              </div>
              <div className="input-field col s6 m3 l3">
                <label htmlFor="item_quantity">Quantity</label>
                <input
                  type="number"
                  name="item_quantity"
                  id="item_quantity"
                  className="validate"
                  required
                  autoComplete="off"
                  onChange={this.handleChange()}
                />
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

NewShipment.propTypes = {
  AddShipmentReducer: PropTypes.object.isRequired,
  AddShipmentAction: PropTypes.func.isRequired,
  GetCourierAction: PropTypes.func.isRequired
};

export const mapStateToProps = ({ AddShipmentReducer }) => ({ AddShipmentReducer });

export default connect(
  mapStateToProps,
  {
    AddShipmentAction,
    GetCourierAction
  }
)(NewShipment);
