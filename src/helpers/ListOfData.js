import React from 'react';
import PropTypes from 'prop-types';
import { Collapsible } from 'react-materialize';

const ListOfData = ({
  data, Component, emptyDataString, dataHeaderString, dataClass
}) => (!data.length ? (
  <h2 className="center-align">{emptyDataString}</h2>
) : (
  <div>
    <h4 className="header blue-text darken-1">{dataHeaderString}</h4>
    <Collapsible>
      <Component data={data} dataClass={dataClass} />
    </Collapsible>
  </div>
));

ListOfData.propTypes = {
  data: PropTypes.array.isRequired,
  emptyDataString: PropTypes.string.isRequired,
  dataHeaderString: PropTypes.string.isRequired,
  dataClass: PropTypes.string.isRequired,
  Component: PropTypes.node.isRequired
};

export default ListOfData;
