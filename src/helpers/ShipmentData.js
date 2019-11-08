import React from 'react';
import { CollapsibleItem } from 'react-materialize';
import { Capitalize } from './StringFormatter';

const ShipmentData = ({ data, dataClass }) => data.map(({
  id, origin, destination, courier, item, weight, created_at
}) => (
  <CollapsibleItem
    key={id}
    header={`${Capitalize(item.description)} from ${Capitalize(origin.state)}, ${Capitalize(
      origin.country
    )}  to ${Capitalize(destination.state)}, ${Capitalize(
      destination.state
    )} - ${courier.name.toUpperCase()}`}
    icon={<i className={dataClass} />}
  >
    <div className="row">
      <div className="col s12 m6">
        <h6 className="underline center-align"><strong>Origin</strong></h6>
        <p>
          <strong>Name: </strong>
          {' '}
          {Capitalize(origin.name)}
        </p>
        <p>
          <strong>Address: </strong>
          {' '}
          {`${Capitalize(origin.street)}, ${origin.city ? `${Capitalize(origin.city)}, ` : ''}${Capitalize(origin.state)}, ${
            Capitalize(origin.country)
          }`}
        </p>
        <p>
          <strong>Phone: </strong>
          {' '}
          {origin.phone}
        </p>
      </div>
      <div className="col s12 m6">
        <h6 className="underline center-align"><strong>Destination</strong></h6>
        <p>
          <strong>Name: </strong>
          {' '}
          {Capitalize(destination.name)}
        </p>
        <p>
          <strong>Address: </strong>
          {' '}
          {`${Capitalize(destination.street)}, ${destination.city ? `${Capitalize(destination.city)}, ` : ''}${
            Capitalize(destination.state)
          }, ${Capitalize(destination.country)}`}
        </p>
        <p>
          <strong>Phone: </strong>
          {' '}
          {destination.phone}
        </p>
      </div>
    </div>
    <p>
      <strong>Courier: </strong>
      {' '}
      {courier.name}
    </p>
    <p>
      <strong>Item: </strong>
      {' '}
      {item.description}
    </p>
    <p>
      <strong>Quantity: </strong>
      {' '}
      {item.quantity}
    </p>
    <p>
      <strong>Weight: </strong>
      {' '}
      {weight}
      {'kg'}
    </p>
    <p>
      <strong>Date: </strong>
      {' '}
      {new Date(created_at).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      })}
    </p>
  </CollapsibleItem>
));

export default ShipmentData;
