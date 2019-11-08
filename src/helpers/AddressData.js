/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleItem } from 'react-materialize';
import { Capitalize, CapitalizeFirstLetter } from './StringFormatter';

const AddressData = ({ data, dataClass }) => (
  <Fragment>
    {data.map(({
      id, friendly_name, state, country, street, city, email
    }) => (
      <CollapsibleItem
        key={id}
        header={`${Capitalize(friendly_name)} - ${Capitalize(state)}, ${Capitalize(country)}`}
        icon={<i className={dataClass} />}
      >
        <div>
          <p>
            <strong>Location Alias: </strong>
            {' '}
            {Capitalize(friendly_name)}
          </p>
          <p>
            <strong>Address: </strong>
            {' '}
            {`${Capitalize(street)}, ${city ? `${Capitalize(city)}, ` : ''}${Capitalize(state)}, ${
              Capitalize(country)
            }`}
          </p>
          <p>
            <strong>Email: </strong>
            {' '}
            {CapitalizeFirstLetter(email)}
          </p>
        </div>
      </CollapsibleItem>
    ))}
  </Fragment>
);

AddressData.propTypes = {
  data: PropTypes.object.isRequired,
  dataClass: PropTypes.string.isRequired
};

export default AddressData;
