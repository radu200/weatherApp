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
      data-test-id="input-search"
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  className:PropTypes.string,
  onChange: PropTypes.func
}
export default FormInput;