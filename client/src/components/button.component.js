import React from 'react';

const Button = (props) => {
  return(
      <button
          style={props.style}
          onClick={props.action}>
          {props.style}
      </button>
  )
};

export default Button
