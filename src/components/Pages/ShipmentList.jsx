import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Ring } from 'react-awesome-spinners';
import ListOfData from '../../helpers/ListOfData';
import { GetShipmentAction } from '../../actions/GetShipment';
import ShipmentData from '../../helpers/ShipmentData';

/**
 *
 *
 * @export
 * @class ShipmentList
 * @extends {Component}
 */
class ShipmentList extends Component {
  /**
   *
   *
   * @memberof ShipmentList
   * @returns {Null} null
   */
  async componentDidMount() {
    const { GetShipmentAction: GetShipments } = this.props;
    await GetShipments();
  }

  /**
   *
   *
   * @returns {JSX} HTML element
   * @memberof ShipmentList
   */
  render() {
    const {
      GetShipmentReducer: {
        isLoading,
        data: { shipments }
      }
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <div className="ring">
            <Ring size={100} color="#1976D2" sizeUnit="px" />
          </div>
        ) : (
          <ListOfData
            Component={ShipmentData}
            data={shipments}
            emptyDataString="No Shipments Found"
            dataHeaderString="List Of Shipments"
            dataClass="fas fa-dolly"
          />
        )}
      </div>
    );
  }
}

ShipmentList.propTypes = {
  GetShipmentReducer: PropTypes.object.isRequired,
  GetShipmentAction: PropTypes.func.isRequired
};

export const mapStateToProps = ({ GetShipmentReducer }) => ({ GetShipmentReducer });

export default connect(
  mapStateToProps,
  {
    GetShipmentAction
  }
)(ShipmentList);
