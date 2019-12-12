import React from "react";
import PropTypes from 'prop-types';

const Button = ({
  name,
  type,
  className,
  handleClick
}) => {
  return (
    <button  data-test-id="button-search" className={className} onClick={handleClick} type={type}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className:PropTypes.string,
  handleClick: PropTypes.func
}
export default Button;
