import React from 'react';

const Button = (props) => {
  return(
      <button
          className={props.className}
          name={props.name}
          type={props.type}
          data-toggle={props.dataToggle}
          aria-pressed={props.ariaPressed}
          value={props.value}
          onClick={props.onClick}>
          {props.title}
      </button>
  )
};

export default Button
