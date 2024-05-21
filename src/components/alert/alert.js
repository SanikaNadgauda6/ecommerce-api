import React from 'react';

const Alert = ({ type, message }) => {
  const alertStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: type === 'success' ? '#4CAF50' : '#F44336',
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;
