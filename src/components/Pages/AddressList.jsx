import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Ring } from 'react-awesome-spinners';
import ListOfData from '../../helpers/ListOfData';
import { GetAddressAction } from '../../actions/GetAddress';
import AddressData from '../../helpers/AddressData';

/**
 *
 *
 * @export
 * @class AddressList
 * @extends {Component}
 */
class AddressList extends Component {
  /**
   *
   *
   * @memberof AddressList
   * @returns {Null} null
   */
  async componentDidMount() {
    const { GetAddressAction: GetAddresses } = this.props;
    await GetAddresses();
  }

  /**
   *
   *
   * @returns {JSX} HTML element
   * @memberof AddressList
   */
  render() {
    const {
      GetAddressReducer: {
        isLoading,
        data: { addresses }
      }
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <div className="ring">
            <Ring size={100} color="#1976D2" sizeUnit="px" />
          </div>
        ) : (
          <ListOfData Component={AddressData} data={addresses} emptyDataString="No Address Found" dataHeaderString="List Of Addresses" dataClass="far fa-address-card" />
        )}
      </div>
    );
  }
}

AddressList.propTypes = {
  GetAddressReducer: PropTypes.object.isRequired,
  GetAddressAction: PropTypes.func.isRequired
};

export const mapStateToProps = ({ GetAddressReducer }) => ({ GetAddressReducer });

export default connect(
  mapStateToProps,
  {
    GetAddressAction
  }
)(AddressList);
