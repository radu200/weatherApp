import React from "react";
import PropTypes from 'prop-types';


const FormInput = ({
  name,
  type,
  placeholder,
  handleChange,
  value,
  className
}) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      required
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}
export default FormInput;