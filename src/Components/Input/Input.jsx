import React from 'react';

const Input = props => {
  const {
    id,
    type,
    placeholder,
    name,
    autoComplete,
    onChange,
    value,
    className
  } = props;

  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={"form-control form-control-sm " + className}
    />
  );
};

export default Input;