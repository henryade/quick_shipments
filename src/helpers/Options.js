import React from 'react';

const Options = ({ options }) => (
  options.map(({ name, id }) => (
    <option
      key={name}
      value={id}
      label={name}
    />
  ))
);

export default Options;
