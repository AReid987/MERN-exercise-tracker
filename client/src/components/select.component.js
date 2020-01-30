import React from 'react';

const Select = (props) => {
  return(
    <div className="dropdown">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        className={"form-control"}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        >
        <option value={props.value}>{props.placeholder}</option>
        {props.options.map(option => {
          return (
            <option
              key={option}
              value={option}
              label={option}>{option}
            </option>
          );
        })}
        </select>
    </div>
  )
}

export default Select;
