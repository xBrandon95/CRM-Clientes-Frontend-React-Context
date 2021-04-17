import React from 'react';

const Alert = ({ msg }) => (
  <input
    type="text"
    className="btn btn-block btn-rojo mb-2"
    defaultValue={msg}
  />
);

export default Alert;
