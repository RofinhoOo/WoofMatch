import React from 'react';

const Button = ({ onClick, children, color = 'primary' }) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
