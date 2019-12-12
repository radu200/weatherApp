import React from "react";
import PropTypes from "prop-types";
import FormInput from '../Inputs/FormInput'
import Button from '../Inputs/Button'
import withSearch from '../../containers/HOC/withSearch'
import style from './SearchWeather.module.scss'


const SearchWeather = ({
  handleClick,
  handleChange
}) => {
  return (
    <>
      <FormInput
        name="search-weather"
        type="text"
        placeholder="St. George, Utah"
        handleChange={handleChange}
        className={style.search_weather_input}
        required
        
      />
      <Button
        name="Get Weather"
        type="submit"
        handleClick={handleClick}
        className={style.btn_success}
      />
    </>
  );
};

SearchWeather.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.any
}

export default withSearch(SearchWeather);
